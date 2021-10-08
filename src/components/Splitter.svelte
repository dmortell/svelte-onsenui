<script>
import {getEventsAction} from './Utils.js';
const events = getEventsAction();
// export let visible = true

/*
The swipable attribute must be defined to enable opening and closing the menu by swiping.

The menu supports two modes: “collapse” and “split” mode. When the menu is collapsed it will be hidden
from view and only visible if the user swipes or the open() method is called.

In “split” mode the menu is displayed as a column on the side of the <ons-splitter-content> element.

The value of the collapse attribute defines when it should be in either mode conditionally.
If you set the value to "portrait“ it will be collapsed when the device is in portrait mode.
It also supports a media query.
*/

/**
 * @original ons-splitter
 * @category menu
 * @tutorial react/Reference/splitter
 * @description
 * [en]  A component that enables responsive layout by implementing both a two-column layout and a sliding menu layout.
 *
 *    It can be configured to automatically expand into a column layout on large screens and collapse the menu on smaller screens. When the menu is collapsed the user can open it by swiping.
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


  // componentDidMount() {
  //   super.componentDidMount();
  //   const node = ReactDOM.findDOMNode(this);

  //   if (this.props.onDeviceBackButton instanceof Function) {
  //     node.onDeviceBackButton = this.props.onDeviceBackButton;
  //   }
  // }

  // UNSAFE_componentWillReceiveProps(newProps) {
  //   if (newProps.onDeviceBackButton !== undefined) {
  //     ReactDOM.findDOMNode(this).onDeviceBackButton = newProps.onDeviceBackButton;
  //   }
  // }


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

</script>

<!-- {#if visible}
{/if} -->
<ons-splitter {...$$restProps} use:events>
	<slot/>
</ons-splitter>