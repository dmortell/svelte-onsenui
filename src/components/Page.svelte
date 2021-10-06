<script>
import { noop } from "svelte/internal";


// import React from 'react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
// import BasicComponent from './BasicComponent.jsx';
// import Util from './Util.js';

/**
 * @original ons-page
 * @category page
 * @tutorial react/Reference/page
 * @description
 * [en]
 *   This component is handling the entire page. The content can be scrolled.
 *
 *   To add fixed content that doesn't scroll with the page the `renderFixed` prop is used.
 *
 *   A page toolbar can be added with the `renderToolbar` prop.
 * [/en]
 * [ja][/ja]
 * @example
  <Page
    renderFixed={() => <Fab></Fab>}
    renderToolbar={() => <Toolbar>...</Toolbar>}
    contentStyle={{padding: 40}}>
    <div> Page content </div>
  </Page>
 */

/**
 * @name contentStyle
 * @type Object
 * @description
 *  [en]
 *  Specify the style of the page content. Optional.
 *  [/en]
 */
export var contentStyle = {};		// PropTypes.object,

/**
 * @name modifier
 * @type string
 * @description
 *  [en]
 *  Specify modifier name to specify custom styles. Optional.
 *  [/en]
 *  [ja][/ja]
 */
 export let modifier = '';			// PropTypes.string,

/**
 * @name renderModal
 * @type function
 * @required false
 * @defaultValue null
 * @description
 *  [en] This function renders a modal that masks current screen.[/en]
 */
 export let renderModal = noop;		// PropTypes.func,

/**
 * @name renderToolbar
 * @type function
 * @required false
 * @defaultValue null
 * @description
 *  [en] This function renders the toolbar of the page.[/en]
 *  [ja][/ja]
 */
 export let renderToolbar = noop;		// PropTypes.func,

/**
 * @name renderBottomToolbar
 * @type function
 * @defaultValue null
 * @description
 *  [en] This function renders the bottom toolbar of the page.[/en]
 *  [ja][/ja]
 */
 export let renderBottomToolbar = noop;	// PropTypes.func,

/**
 * @name renderFixed
 * @type function
 * @defaultValue null
 * @description
 *  [en] This function renders fixed content of the page. Can be used to render `Fab` or `SpeedDial` components as well as other components that don't scroll with the page.[/en]
 *  [ja][/ja]
 */
 export let renderFixed = noop;				// PropTypes.func,

/**
 * @name onInit
 * @type function
 * @required false
 * @description
 *  [en]
 *  	Fired right after the page is attached.
 *  [/en]
 *  [ja][/ja]
 */
 export let onInit = () => {}							// PropTypes.func,

/**
 * @name onShow
 * @type function
 * @required false
 * @description
 *  [en]
 *  Called Fired right after the page is shown.
 *  [/en]
 *  [ja][/ja]
 */
 export let onShow = () => {}							// PropTypes.func,

/**
 * @name onHide
 * @type function
 * @required false
 * @description
 *  [en]
 *  Called after the page is hidden.
 *  [/en]
 *  [ja][/ja]
 */
 export let onHide = () => {}							// PropTypes.func,

/**
 * @name onInfiniteScroll
 * @type function
 * @required false
 * @description
 *  [en]
 *  Called when scrolling to the bottom of the page. It gets a 'done' callback (first argument) that must be called when it's finished.
 *  [/en]
 *  [ja][/ja]
 */
 export let onInfiniteScroll = () => {}		// PropTypes.func,

/**
 * @name onDeviceBackButton
 * @type function
 * @required false
 * @description
 *  [en]
 *  Custom handler for device back button.
 *  [/en]
 *  [ja][/ja]
 */
 export let onDeviceBackButton = () => {}	// PropTypes.func

// const {contentStyle, ...other} = this.props;
// const attrs = Util.getAttrs(this, other);



// class Page extends BasicComponent {
//   constructor(...args) {
//     super(...args);

//     const callback = (name, event) => {
//       if (this.props[name]) {
//         return this.props[name](event);
//       }
//     };
//     this.onInit = callback.bind(this, 'onInit');
//     this.onShow = callback.bind(this, 'onShow');
//     this.onHide = callback.bind(this, 'onHide');
//   }

//   componentDidMount() {
//     super.componentDidMount();
//     const node = ReactDOM.findDOMNode(this);
//     node.addEventListener('init', this.onInit);
//     node.addEventListener('show', this.onShow);
//     node.addEventListener('hide', this.onHide);

//     if (this.props.onDeviceBackButton instanceof Function) {
//       node.onDeviceBackButton = this.props.onDeviceBackButton;
//     }
//     if (this.props.onInfiniteScroll instanceof Function) {
//       node.onInfiniteScroll = this.props.onInfiniteScroll;
//     }
//   }

//   UNSAFE_componentWillReceiveProps(newProps) {
//     if (newProps.onDeviceBackButton !== undefined) {
//       ReactDOM.findDOMNode(this).onDeviceBackButton = newProps.onDeviceBackButton;
//     }
//     if (newProps.onInfiniteScroll !== undefined) {
//       ReactDOM.findDOMNode(this).onInfiniteScroll = newProps.onInfiniteScroll;
//     }
//   }

//   componentWillUnmount() {
//     const node = ReactDOM.findDOMNode(this);
//     node.removeEventListener('init', this.onInit);
//     node.removeEventListener('show', this.onShow);
//     node.removeEventListener('hide', this.onHide);
//   }

// }

// const toolbar = this.props.renderToolbar(this);
// const bottomToolbar = this.props.renderBottomToolbar(this);
// const modal = this.props.renderModal(this);
// const fixed = this.props.renderFixed(this);

const attrs = {}		// todo capture other props

</script>

<ons-page {...attrs} >
	<slot name='toolbar' />
	<div class='page__background'> </div>
	<div class='page__content' style={contentStyle}>
		<slot/>
	</div>
	<div class='page__extra' style={{zIndex: 10001}}>
		<slot name='modal' />
	</div>
	<slot name='fixed'/>
	<slot name='bottomToolbar' />
</ons-page>

<!--
<ons-page {...attrs} >
	{toolbar}
	<div class='page__background'> </div>
	<div class='page__content' style={contentStyle}>
		<slot/>
	</div>
	<div class='page__extra' style={{zIndex: 10001}}>
		{modal}
	</div>
	{fixed}
	{bottomToolbar}
</ons-page> -->