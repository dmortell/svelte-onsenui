<script>
	import ons from 'onsenui';
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
 [/en]
 * [ja][/ja]
 * @example
 *
  renderRow(index) {
    return (
      <ListItem key={index}>
        {'Item ' + (index + 1)}
      </ListItem>
    );
  }

  render() {
    return (
      <Page renderToolbar={() => <MyToolbar title='LazyList' />} >
        <div style={{height: 100}}>
          <LazyList
            length={1000}
            renderRow={() =>
              <ListItem key={index}>
                {'Item ' + (index + 1)}
              </ListItem>
            }
            calculateItemHeight={() => 44}
          />
        </div>
      </Page>
    );
  }
}
*/


//   UNSAFE_componentWillReceiveProps(newProps) {
//     var helpProps = {
//       ...this.props,
//       ...newProps
//     };
//     this.update(helpProps);
//   }

//   componentDidMount() {
//     super.componentDidMount();
//     this.update(this.props);
//   }


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
	export let render;								// prop: list item component
	let node
	let state = { children: [] };

	$: update(length);								// todo test list items are reactive to changes
	onMount(() => {
		update(length);									// You can call node.refresh() when the data changes
	})

	function update(length) {
		if (!node) return console.log('node not set')
		console.log('update', length)
		console.log('node', node)
		if (0) node.delegate = {
			calculateItemHeight: function(index) { return calculateItemHeight(index); },	// optional - return height of item for better scrolling
			countItems: function() { return length; },
			createItemContent: function(index, template) {
				// Return a DOM element here
				console.log('created',index)
				return ons.createElement('<ons-list-item>Item2 ' + index + '</ons-list-item>');
				return render(index)
			},
			// destroyItem: function(index, element) {},				// Remove event listeners, etc. here to avoid memory leaks.
			// configureItemScope: function(){},								// recieves an index and the scope for the item. Can be used to configure values in the item scope.
			_render: function(start, limit, updateTop) {				// https://github.com/OnsenUI/OnsenUI/blob/05c8ef93b55cf4c21f31d6d614153a21cd51a2f5/core/src/ons/internal/lazy-repeat.js#L291
				console.log('rendering',{start,limit, updateTop})
			// 	var createElement = function(index) {
			// 		return render(index);
			// 	};

			// 	console.log({start,limit})

			// 	const el = [];
			// 	for (let i = start; i < limit; i++) {
			// 		el.push(createElement(i));
			// 	}
			// 	state.children = el;				// self.setState({children: el}, updateTop);
			// 	updateTop(el);
			},
		};
		// node.refresh();
	}

</script>

<!-- <ons-list style={{position: 'relative', height: this.state.height}} -->

<ons-list {...$$restProps} class='list' style="position:relative; height:{state.height}px">
	<ons-lazy-repeat bind:this={node} id='lazy' />
	<slot/>
	{#each state.children as idx}
		<ons-list-item>item {idx}</ons-list-item>
	{/each}

</ons-list>
{length}xxxx

<!-- <ons-list {modifier} {...$$restProps} use:events>
	<slot name='header' />
	<slot/>
	<slot name='footer' />
</ons-list> -->

<!-- <ons-list {modifier} {...$$restProps}>
	<slot name='header' />
		{#if dataSource}
			{#each dataSource as row, idx}
				<slot/>
			{/each}
		{:else}
			<slot/>
		{/if}
	<slot name='footer' />
</ons-list> -->


<!-- <ons-list { ...attrs } ref={(list) => { this._list = list; }}>
	{this.props.renderHeader()}
	{pages}
	{this.props.children}
	{this.props.renderFooter()}
</ons-list> -->
