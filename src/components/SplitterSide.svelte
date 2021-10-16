<script>
	import {onMount, tick} from 'svelte';
	import {getEventsAction} from './Utils.js';
	const events = getEventsAction();

/**
 * @original ons-splitter-side
 * @category menu
 * @tutorial react/Reference/splitter
 * @description
 * [en]  The SplitterContent  element is used as a child element of Splitter.
 *    It contains the main content of the page while SplitterSide contains the list.
 [/en]
 * [ja][/ja]
 * @example
  <Splitter>
    <SplitterSide side="left" width={200} swipeable={true}>
      <Page> Page Left </Page>
    </SplitterSide>
    <SplitterContent>
      <Page> Page Content </Page>
    </SplitterContent>
    <SplitterSide side="right" width={300}
      collapse={!this.state.showRight}
      isOpen={this.state.openRight}
      onClose={this.handleRightClose.bind(this)}
      onOpen={this.handleRightOpen.bind(this)}
      swipeable={true}>
      <Page> Page Right </Page>
    </SplitterSide>
  </Splitter>
 */


    // const callback = (name, event) => {
    //   if (this.props[name]) {
    //     return this.props[name](event);
    //   }
    // };
    // this.onOpen = callback.bind(this, 'onOpen');
    // this.onClose = callback.bind(this, 'onClose');
    // this.onPreOpen = callback.bind(this, 'onPreOpen');
    // this.onPreClose = callback.bind(this, 'onPreClose');
    // this.onModeChange = callback.bind(this, 'onModeChange');

  // componentDidMount() {
  //   this.node.addEventListener('postopen', this.onOpen);
  //   this.node.addEventListener('postclose', this.onClose);
  //   this.node.addEventListener('preopen', this.onPreOpen);
  //   this.node.addEventListener('preclose', this.onPreClose);
  //   this.node.addEventListener('modechange', this.onModeChange);
  // }

  // componentWillUnmount() {
  //   this.node.removeEventListener('postopen', this.onOpen);
  //   this.node.removeEventListener('postclose', this.onClose);
  //   this.node.removeEventListener('preopen', this.onPreOpen);
  //   this.node.removeEventListener('preclose', this.onPreClose);
  //   this.node.removeEventListener('modechange', this.onModeChange);
  // }

	// use collapsed and swipeable
	// const attrs = Util.getAttrs(this, props);

  /**
   * @name collapse
   *  [en] Specify the collapse behavior. Valid values are `"portrait"`, `"landscape"` or a media query.
   *     The strings `"portrait"` and `"landscape"` means the view will collapse when device is in landscape or portrait orientation.
   *     If the value is not defined, the view always be in `"collapse"` mode.
	 * Set collapse='landscape' to allow the sidebar to be opened and closed with el.open() and el.close()
	 * Set collapse='portrait' to hide the sidebar when the device is in portrait mode, and shown when in landscape mode
	 * Otherwise the sidebar will always stay open
	 *
	 * mode='collapse' and collapse='landscape': the menu is collapsed but can be swiped
	 *
   * @name swipeable
   *  [en]Ennable swipe interaction on collapse mode.[/en]
   * @name isOpen
   *  [en]Specifies whether the menu is open.[/en]
   * @name onOpen
   *  [en]Called after the menu is opened.[/en]
   * @name onClose
   *  [en]Called after the menu is closed.[/en]
   * @name side
   *  [en]Specify which side of the screen the SplitterSide element is located. Possible values are `"left"` and `"right"`.[/en]
   * @name swipeTargetWidth
   *  [en]Specifies the width of the menu with a number (for pixels) or a string (e.g. "20%" for percentage).[/en]
   * @name width
   *  [en]Specifies the width of the menu with a number (for pixels) or a string (e.g. "20%" for percentage).[/en]
   * @name animation
   *  [en]Specify the animation. Use one of `overlay`, `push`, `reveal`, or `default`.[/en]
   * @name animationOptions
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   * @name openThreshold
   *  [en] Specify how much the menu needs to be swiped before opening. A value between `0` and `1`.  [/en]
   * @name mode
   *  [en] Current mode. Possible values are `"collapse"` or `"split"`. This attribute is read only.  [/en]
   * @name onPreOpen
   *  [en] Called before the menu opens.  [/en]
   * @name onPreClose
   *  [en] Called before the menu closes.  [/en]
   * @name onModeChange
   *  [en] Called after the component's mode changes. [/en]
   */




// 	export var expanded = false; 	// PropTypes.bool
// 	export var left = null;
// 	import {onMount} from 'svelte'

// 	let node
// //  $: hasLeft = (typeof left !== undefined || typeof left !== null) || $$slots.left
// 	$: hasLeft = (left !== undefined && left !== null) || $$slots.left
// 	$: doExpand(expanded)

// 	function doExpand(expanded){
// 	if (node && expanded !== node.expanded){
// 		console.log('expand',expanded,node);
// 		expanded ? node.showExpansion() : node.hideExpansion()
// 	}
// 	}



	export let isOpen = false
	export let node

	$: setOpen(isOpen)

	function setOpen(wantOpen){
		if (node){
			if (node.isOpen && !wantOpen) node?.close();
			else if (!node.isOpen && wantOpen) node?.open();
		}
	}

</script>


<ons-splitter-side {...$$restProps} bind:this={node} use:events>
	<slot/>
</ons-splitter-side>