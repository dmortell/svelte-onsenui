<script>
	import {onMount} from 'svelte';
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
	<LazyList bind:children={children} length=1000 calculateItemHeight={() => 44} >
		{#each children as idx}
			<ListItem>{'Item ' + (idx + 1)} {data[idx]} </ListItem>
		{/each}
	</LazyList>
</Page>
*/


  /**
   * @name modifier
   *  [en]The appearance of the lazy list.[/en]
   * @name length
   *  [en]The length of the list.[/en]
   * @name renderRow
   *  [en] A function given the index of the to display row, renders it.[/en]
   * @name calculateItemHeight
   *  [en] A function given the index of the to row, returns the height of it.[/en]
   */

	export let calculateItemHeight;		// prop: function to calculate the height of a row
	export let length;								// prop: number of items in list
	export let children;							// prop: children to render
	let node

	$: update(length);								// todo test list items are reactive to changes

	onMount(() => {
		setTimeout(()=>{update(length)}, 10)
	})

	function update(length) {
		if (!node) return console.log('node not set')
		try {
			node.delegate = {
				calculateItemHeight: function(index) { return calculateItemHeight(index); },	// optional - return height of item for better scrolling
				countItems: function() { return length; },
				_render: function(start, limit, updateTop) {				// called from https://github.com/OnsenUI/OnsenUI/blob/05c8ef93b55cf4c21f31d6d614153a21cd51a2f5/core/src/ons/internal/lazy-repeat.js#L318
					const el = [];
					for (let i = start; i < limit; i++) el.push(i);
					children = el;
					updateTop();																			// callback onsenui to set this.padding = this._topPositions[start];
				},
				// createItemContent: function(index, template) {},	// Return a DOM element here
				// destroyItem: function(index, element) {},				// Remove event listeners, etc. here to avoid memory leaks.
				// configureItemScope: function(){},								// recieves an index and the scope for the item. Can be used to configure values in the item scope.
			};
			// node.refresh();																		// todo may need to refresh if data changes
		} catch(err){ console.log(err)}
	}
</script>

<ons-list {...$$restProps} class='list' style="position:relative" use:events>
	<ons-lazy-repeat bind:this={node} id='lazy' />
	<slot name='header' />
	<slot/>
	<slot name='footer' />
</ons-list>
