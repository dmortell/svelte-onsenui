<script>
	import {onMount, tick} from 'svelte';
	import {getEventsAction} from './Utils.js';
	const events = getEventsAction();

	// export let visible = true
	export let isOpen = false
	export let node

	$: {
		setOpen(isOpen)
	}

	onMount(() => { setOpen(isOpen); })

	function setOpen(wantOpen){
		if (node){
			if (isOpen && !wantOpen) node.close();
			else if (!isOpen && wantOpen) node.open();
			isOpen = wantOpen;
		}
	}

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
    <SplitterSide
      side="left"
      width={200}
      swipeable={true}>
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
  //   super.componentDidMount();
  //   this.node = ReactDOM.findDOMNode(this);
  //   this.UNSAFE_componentWillReceiveProps(this.props);

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
   * @type string
   * @description
   *  [en] Specify the collapse behavior. Valid values are `"portrait"`, `"landscape"` or a media query.
   *     The strings `"portrait"` and `"landscape"` means the view will collapse when device is in landscape or portrait orientation.
   *     If the value is not defined, the view always be in `"collapse"` mode.
[/en]
   *  [ja][/ja]
   */
  // collapse: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * @name swipeable
   * @type bool
   * @description
   *  [en]Enable swipe interaction on collapse mode.[/en]
   *  [ja][/ja]
   */
  // swipeable: PropTypes.bool,

  /**
   * @name isOpen
   * @type bool
   * @description
   *  [en]Specifies whether the menu is open.[/en]
   *  [ja][/ja]
   */
  // isOpen: PropTypes.bool,

  /**
   * @name onOpen
   * @type function
   * @description
   *  [en]Called after the menu is opened.[/en]
   *  [ja][/ja]
   */
  // onOpen: PropTypes.func,

  /**
   * @name onClose
   * @type function
   * @description
   *  [en]Called after the menu is closed.[/en]
   *  [ja][/ja]
   */
  // onClose: PropTypes.func,

  /**
   * @name side
   * @type string
   * @description
   *  [en]Specify which side of the screen the SplitterSide element is located. Possible values are `"left"` and `"right"`.[/en]
   *  [ja][/ja]
   */
  // side: PropTypes.oneOf(['left', 'right']),

  /**
   * @name swipeTargetWidth
   * @type number
   * @description
   *  [en]Specifies the width of the menu with a number (for pixels) or a string (e.g. "20%" for percentage).[/en]
   *  [ja][/ja]
   */
  // swipeTargetWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * @name width
   * @type  number
   * @description
   *  [en]Specifies the width of the menu with a number (for pixels) or a string (e.g. "20%" for percentage).[/en]
   *  [ja][/ja]
   */
  // width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]Specify the animation. Use one of `overlay`, `push`, `reveal`, or `default`.[/en]
   *  [ja][/ja]
   */
  // animation: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  // animationOptions: PropTypes.object,

  /**
   * @name openThreshold
   * @type object
   * @required false
   * @description
   *  [en] Specify how much the menu needs to be swiped before opening. A value between `0` and `1`.  [/en]
   *  [ja][/ja]
   */
  // openThreshold: PropTypes.number,

  /**
   * @name mode
   * @type string
   * @required false
   * @description
   *  [en] Current mode. Possible values are `"collapse"` or `"split"`. This attribute is read only.  [/en]
   *  [ja][/ja]
   */
  // mode: PropTypes.oneOf(['collapse', 'split']),

  /**
   * @name onPreOpen
   * @type string
   * @description
   *  [en] Called before the menu opens.  [/en]
   *  [ja][/ja]
   */
  // onPreOpen: PropTypes.func,

  /**
   * @name onPreClose
   * @type string
   * @description
   *  [en] Called before the menu closes.  [/en]
   *  [ja][/ja]
   */
  // onPreClose: PropTypes.func,

  /**
   * @name onModeChange
   * @type string
   * @description
   *  [en] Called after the component's mode changes. [/en]
   *  [ja][/ja]
   */
  // onModeChange: PropTypes.func
</script>

<!-- {#if visible}
{/if} -->
<ons-splitter-side bind:this={node} {...$$restProps} use:events>
	<slot/>
</ons-splitter-side>