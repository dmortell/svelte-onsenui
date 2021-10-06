<script>
	import {onMount} from 'svelte'
	import {getEventsAction, getAttribs} from './Utils.js';
	const events = getEventsAction();
// import BaseDialog from './BaseDialog.jsx';

/**
 * @original ons-action-sheet
 * @category dialog
 * @tutorial react/Reference/action-sheet
 * @description
 * [en]
 *  Action/bottom sheet that is displayed on top of current screen.
 *  The action sheet is useful for displaying a list of options and asking the user to make a decision. An ActionSheetButton component is provided for this purpose, although it can contain any type of content.
 *  It will automatically be displayed as Material Design (bottom sheet) when running on an Android device.
 * [/en]
 * [ja][/ja]
 */

  /**
   * @name onCancel
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
   *  [/en]
   *  [ja][/ja]
   */
  // onCancel: PropTypes.func,

  /**
   * @name isOpen
   * @type bool
   * @required true
   * @description
   *  [en]
   *  Indicates whether the dialog is open and shown.
   *  [/en]
   *  [ja][/ja]
   */
  // isOpen: PropTypes.bool.isRequired,

  /**
   * @name isCancelable
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is cancelable or not.
   *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
   *  [/en]
   *  [ja][/ja]
   */
  // isCancelable: PropTypes.bool,

  /**
   * @name isDisabled
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  // isDisabled: PropTypes.bool,

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]
   *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
   *  [/en]
   *  [ja][/ja]
   */
  // animation: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [ja][/ja]
   */
  // modifier: PropTypes.string,

  /**
   * @name maskColor
   * @type string
   * @required false
   * @description
   *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
   *  [ja][/ja]
   */
  // maskColor: PropTypes.string,

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
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the action sheet is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  // onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the action sheet is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  // onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the action sheet is hidden.[/en]
   *  [ja][/ja]
   */
  // onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the action sheet is hidden.[/en]
   *  [ja][/ja]
   */
  // onPostHide: PropTypes.func,

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
  // onDeviceBackButton: PropTypes.func




    // const callback = (name, event) => {
    //   if (this.props[name]) {
    //     return this.props[name](event);
    //   }
    // };
    // this.onCancel = callback.bind(this, 'onCancel');
    // this.onPreShow = callback.bind(this, 'onPreShow');
    // this.onPostShow = callback.bind(this, 'onPostShow');
    // this.onPreHide = callback.bind(this, 'onPreHide');
    // this.onPostHide = callback.bind(this, 'onPostHide');

  function show() {
    node.firstChild.show();
  }
  function hide() {
    node.firstChild.hide();
  }

  // function updateClasses() {
  //   var node = this.node.firstChild;
  //   if (this.props.className) {
  //     if (this.lastClass) {
  //       node.className = node.className.replace(this.lastClass, '');
  //     }
  //     this.lastClass = ' ' + this.props.className;
  //     node.className += this.lastClass;
  //   }
  // }

  // componentDidMount() {
  //   this.node = document.createElement('div');
  //   document.body.appendChild(this.node);

  //   this.node.addEventListener('dialog-cancel', this.onCancel);
  //   this.node.addEventListener('preshow', this.onPreShow);
  //   this.node.addEventListener('postshow', this.onPostShow);
  //   this.node.addEventListener('prehide', this.onPreHide);
  //   this.node.addEventListener('posthide', this.onPostHide);

  //   this.renderPortal(this.props, false, this.props.onDeviceBackButton);
  // }

  // UNSAFE_componentWillReceiveProps(newProps) {
  //   this.renderPortal(newProps, this.props.isOpen);
  //   if (newProps.onDeviceBackButton !== undefined) {
  //     this.node.firstChild.onDeviceBackButton = newProps.onDeviceBackButton;
  //   }
  // }

  // componentWillUnmount() {
  //   this.node.removeEventListener('dialog-cancel', this.onCancel);
  //   this.node.removeEventListener('preshow', this.onPreShow);
  //   this.node.removeEventListener('postshow', this.onPostShow);
  //   this.node.removeEventListener('prehide', this.onPreHide);
  //   this.node.removeEventListener('posthide', this.onPostHide);

  //   const unmount = () => {
  //     ReactDOM.unmountComponentAtNode(this.node);
  //     document.body.removeChild(this.node);
  //   };

  //   if (this.node.firstChild.visible === true) {
  //     this.node.firstChild.hide().then(unmount);
  //   } else {
  //     unmount();
  //   }
  // }

  // function _update(isShown, onDeviceBackButton) {
  //   if (this.props.isOpen) {
  //     if (!isShown) {
  //       this.show();
  //     }
  //   } else {
  //     this.hide();
  //   }

  //   this.updateClasses();

  //   if (onDeviceBackButton instanceof Function) {
  //     this.node.firstChild.onDeviceBackButton = onDeviceBackButton;
  //   }
  // }

  // function renderPortal(props, isShown, onDeviceBackButton = null) {
  //   const { isOpen, ...others } = props;
  //   const attrs = Util.getAttrs(this, others);
  //   const DomNodeName = this._getDomNodeName();

  //   ReactDOM.unstable_renderSubtreeIntoContainer(
  //     this,
  //     <DomNodeName { ...attrs } children={ props.children } />,
  //     this.node,
  //     this._update.bind(this, isShown, onDeviceBackButton)
  //   );
  // }


// export let cancelable = true
// export let disabled = false
// export let isOpen, visible
export let visible
let node
let isOpen = visible

onMount(()=>{

})

$: console.log('visible11', visible, $$restProps)

$: toggleDialog(visible)
$: attrs = getAttribs($$restProps)

function toggleDialog(wantOpen){
	console.log('toggle', wantOpen)
	if (wantOpen && !isOpen) node.show()
	else if (!wantOpen && isOpen) node.hide()
	isOpen = wantOpen
}

// animation-options={{ duration: 0.6, delay: 0.1, timing: 'ease-in' }}

// bug fix title being displayed on mouse move

</script>

<!-- <ons-action-sheet {visible} {...$$restProps} use:events bind:this={node}> -->
<ons-action-sheet {visible} {...attrs} use:events bind:this={node}>
	<slot/>
</ons-action-sheet>
