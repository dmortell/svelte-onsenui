<script>
	import { onMount, tick } from 'svelte';
	import {getEventsAction} from './Utils.js';
	const events = getEventsAction();

/**
 * @original ons-lazy-repeat
 * @category list
 * @tutorial react/Reference/lazy-list
 * @description
 * [en] Using this component a list with millions of items can be rendered without a drop in performance.
 *     It does that by "lazily" loading elements into the DOM when they come into view and
 *     removing items from the DOM when they are not visible.
 *     Note that LazyList must be a direct descendant of a Page element
 [/en]
 * [ja][/ja]
 * @example
 *
<Page>
	<Toolbar title='LazyList' />
	<LazyList items={things} let:item>
		<p>{item.number}: {item.name}</p>
	</LazyList>
</Page>
*/

// export let calculateItemHeight;		// prop: function to calculate the height of a row


// 	function update(length) {
// 		if (!node) return console.log('node not set')
// 		try {
// 			node.delegate = {
// 				calculateItemHeight: function(index) { return calculateItemHeight(index); },	// optional - return height of item for better scrolling
// 				countItems: function() { return length; },
// 				_render: function(start, limit, updateTop) {				// called from https://github.com/OnsenUI/OnsenUI/blob/05c8ef93b55cf4c21f31d6d614153a21cd51a2f5/core/src/ons/internal/lazy-repeat.js#L318
// 					const el = [];
// 					for (let i = start; i < limit; i++) el.push(i);
// 					children = el;
// 					updateTop();																			// callback onsenui to set this.padding = this._topPositions[start];
// 				},
// 				// createItemContent: function(index, template) {},	// Return a DOM element here
// 				// destroyItem: function(index, element) {},				// Remove event listeners, etc. here to avoid memory leaks.
// 				// configureItemScope: function(){},								// recieves an index and the scope for the item. Can be used to configure values in the item scope.
// 			};
// 			// node.refresh();																		// todo may need to refresh if data changes
// 		} catch(err){ console.log(err)}
// 	}

	// props
	export let items;
	export let height = '100%';
	export let itemHeight = undefined;
	export let start = 0;								// read-only, but visible to consumers via bind:start
	export let end = 0;

		// local state
	let height_map = [];
	let rows;
	let viewport;
	let contents;
	let viewport_height = 0;
	let visible;
	let mounted;

	let top = 0;
	let bottom = 0;
	let average_height;

	$: visible = items.slice(start, end).map((data, i) => {
		return { index: i + start, data };
	});

	// whenever `items` changes, invalidate the current heightmap
	$: if (mounted) refresh(items, viewport_height, itemHeight);

	async function refresh(items, viewport_height, itemHeight) {
		const { scrollTop } = viewport;
		await tick(); // wait until the DOM is up to date

		let content_height = top - scrollTop;
		let i = start;
		while (content_height < viewport_height && i < items.length) {
			let row = rows[i - start];
			if (!row) {
				end = i + 1;
				await tick(); // render the newly visible row
				row = rows[i - start];
			}
			const row_height = height_map[i] = itemHeight || row.offsetHeight;
			content_height += row_height;
			i += 1;
		}

		end = i;
		const remaining = items.length - end;
		average_height = (top + content_height) / end;
		bottom = remaining * average_height;
		height_map.length = items.length;
	}

	async function handle_scroll() {
		const { scrollTop } = viewport;
		const old_start = start;
		for (let v = 0; v < rows.length; v += 1) {
			height_map[start + v] = itemHeight || rows[v].offsetHeight;
		}

		let i = 0;
		let y = 0;
		while (i < items.length) {
			const row_height = height_map[i] || average_height;
			if (y + row_height > scrollTop) {
				start = i;
				top = y;
				break;
			}
			y += row_height;
			i += 1;
		}

		while (i < items.length) {
			y += height_map[i] || average_height;
			i += 1;
			if (y > scrollTop + viewport_height) break;
		}

		end = i;
		average_height = y / end;
		const remaining = items.length - end;
		while (i < items.length) height_map[i++] = average_height;
		bottom = remaining * average_height;

		// prevent jumping if we scrolled up into unknown territory
		if (start < old_start) {
			await tick();

			let expected_height = 0;
			let actual_height = 0;
			for (let i = start; i < old_start; i +=1) {
				if (rows[i - start]) {
					expected_height += height_map[i];
					actual_height += itemHeight || rows[i - start].offsetHeight;
				}
			}

			const d = actual_height - expected_height;
			viewport.scrollTo(0, scrollTop + d);
		}

		// TODO if we overestimated the space these
		// rows would occupy we may need to add some
		// more. maybe we can just call handle_scroll again?
	}

	onMount(() => {
		rows = contents.getElementsByTagName('svelte-virtual-list-row');
		mounted = true;
	});
</script>

<style>
	svelte-virtual-list-viewport {
		position: relative;
		overflow-y: auto;
		-webkit-overflow-scrolling:touch;
		display: block;
	}

	svelte-virtual-list-contents, svelte-virtual-list-row {
		display: block;
	}

	svelte-virtual-list-row {
		overflow: hidden;
	}
</style>

<svelte-virtual-list-viewport bind:this={viewport} bind:offsetHeight={viewport_height} on:scroll={handle_scroll} style="height: {height};" class='list' use:events>
	<svelte-virtual-list-contents bind:this={contents} style="padding-top: {top}px; padding-bottom: {bottom}px;" >
		<slot name='header' />
		{#each visible as row (row.index)}
			<svelte-virtual-list-row>
				<slot item={row.data}>Missing template</slot>
			</svelte-virtual-list-row>
		{/each}
		<slot name='footer' />
	</svelte-virtual-list-contents>
</svelte-virtual-list-viewport>

<!-- <ons-list {...$$restProps} class='list' style="position:relative" use:events> -->
