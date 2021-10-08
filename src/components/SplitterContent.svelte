<script>
	// import {onMount} from 'svelte';
	import {getEventsAction} from './Utils.js';
	const events = getEventsAction();

	// export let visible = true
	// export let isOpen
	// let node

	// $: setOpen(isOpen)

	// function setOpen(wantOpen){
	// 	if (node){
	// 		if (isOpen && !wantOpen) node.close();
	// 		else if (!isOpen && wantOpen) node.open();
	// 		isOpen = wantOpen;
	// 	}
	// }


/**
 * @original ons-splitter-content
 * @category menu
 * @tutorial react/Reference/splitter
 * @description
 * [en]  The SplitterContent  element is used as a child element of Splitter.
 *    It contains the main content of the page while SplitterSide contains the list.
 [/en]
 * [ja][/ja]
 * @example
  <Splitter>
    <SplitterSide
      side="left"
      width={200}
      isSwipeable={true}>
      <Page> Page Left </Page>
    </SplitterSide>
    <SplitterContent>
      <Page> Page Content </Page>
    </SplitterContent>
    <SplitterSide
      side="right"
      width={300}
      collapse={!this.state.showRight}
      isOpen={this.state.openRight}
      onClose={this.handleRightClose.bind(this)}
      onOpen={this.handleRightOpen.bind(this)}
      isSwipeable={true}>
      <Page> Page Right </Page>
    </SplitterSide>
  </Splitter>
 */
</script>

<ons-splitter-content {...$$restProps} use:events>
	<slot/>
</ons-splitter-content>