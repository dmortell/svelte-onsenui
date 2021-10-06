<script>
import {getEventsAction} from './Utils.js';
const events = getEventsAction();

/**
 * @original ons-action-sheet-button
 * @category dialog
 * @tutorial react/Reference/action-sheet
 * @description
 * [en]Component that represent each button of the action sheet.[/en]
 * [ja][/ja]
 */

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the action sheet button.[/en]
   *  [ja][/ja]
   */
  // modifier: PropTypes.string,

  /**
   * @name icon
   * @type string
   * @description
   *  [en]Creates an `Icon` component with this string. Only visible on Android.[/en]
   *  [ja][/ja]
   */
  // icon: PropTypes.string,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en]This function will be called when the button is clicked.[/en]
   *  [ja][/ja]
   */
  // onClick: PropTypes.func


</script>

<ons-action-sheet-button {...$$restProps} use:events>
	<slot/>
</ons-action-sheet-button>