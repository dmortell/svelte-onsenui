<script>
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import SimpleWrapper from './SimpleWrapper.jsx';
import {getEventsAction} from './Utils.js';
const events = getEventsAction();

/**
 * @original ons-list-item
 * @category list
 * @tutorial react/Reference/list
 * @description
 *   [en]
 *   Component that represents each item in the list. Must be put inside the `List` component. The list item is composed of four parts that are represented with the `left`, `center`, `right` and `expandable-content` classes. These classes can be used to ensure that the content of the list items is properly aligned.
 *   [/en]
 * [ja][/ja]
 * @example
   <ListItem>
 *   <div className="left">Left</div>
 *   <div className="center">Center</div>
 *   <div className="right">Right</div>
 *   <div className="expandable-content">Expandable content</div>
 * </ListItem>
 */


  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en] The appearance of the list item.[/en]
   *  [ja][/ja]
   */
  // export var modifier 		// PropTypes.string,

  /**
   * @name tappable
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the list item is tappable.
   *  [/en]
   *  [ja][/ja]
   */
  // export var tappable	= undefined;		// PropTypes.bool,

  /**
   * @name tapBackgroundColor
   * @type string
   * @description
   *  [en]
   *  Changes the background color when tapped. For this to work, the attribute "tappable" needs to be set. The default color is "#d9d9d9". It will display as a ripple effect on Android.
   *  [/en]
   *  [ja][/ja]
   */
  // export var tapBackgroundColor 	// PropTypes.string,

  /**
   * @name lockOnDrag
   * @type bool
   * @description
   *  [en] Prevent vertical scrolling when the user drags horizontally. [/en]
   *  [ja][/ja]
   */
  // export var lockOnDrag = false;	// PropTypes.bool,

  /**
   * @name expandable
   * @type bool
   * @description
   *  [en]Specifies whether list item can be expanded to reveal hidden content. Expanded content must be defined in `div.expandable-content`.[/en]
   *  [ja][/ja]
   */
	//  export var expandable =false;	// PropTypes.bool,

  /**
   * @name expanded
   * @type bool
   * @description
   *  [en]For expandable list items, specifies whether item is expanded[/en]
   *  [ja][/ja]
   */
	 export var expanded; 	// PropTypes.bool
	 import {onMount} from 'svelte'
	 //  onMount(() => {})

	 let node
	 $: {
		 if (node){
			 expanded ? node.showExpansion() : node.hideExpansion()
		 }
	 }



  // componentDidMount() {
  //   this.node = ReactDOM.findDOMNode(this);
  //   this.node.expanded = this.props.expanded === true;
  //   if (this.node.expanded) {
  //     this.node.classList.add('expanded');
  //   }
  // }

  // componentDidUpdate() {
  //   if (this.props.expanded !== this.node.expanded) {
  //     const action = this.props.expanded ? 'show' : 'hide';
  //     this.node[action + 'Expansion']();
				// showExpansion()
  //   }
  // }

</script>

<ons-list-item bind:this={node} class:expanded {expanded} {...$$restProps} use:events>
	<slot/>
</ons-list-item>

<!-- <ons-list-item {expanded} {expandable} {lockOnDrag} {tappable} {tapBackgroundColor} {modifier} {...$$restProps}>
	<slot/>
</ons-list-item> -->

<!-- {#if $$slots.left}
	<div class="nav-left">
		<slot name="left"></slot>
	</div>
{/if} -->


<!-- <div class="list-item {$$props.class ??''}" class:narrow class:link on:click >
	{#if title}<div class="left"><slot name="title">{title}</slot></div>{/if}
	<div class='listitem-left'><slot name='left'></slot></div>
	<div class='listitem-center'>
		<div class='listitem-title'><slot></slot></div>
		<div class='listitem-footer'><slot name='footer'></slot></div>
	</div>
	{#if after}<div class="left"><slot name="after">{after}</slot></div>{/if}
	<div class='listitem-right'><slot name='right'></slot></div>
</div> -->
