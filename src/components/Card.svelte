<script>
import {getEventsAction} from './Utils.js';
const events = getEventsAction();

/**
 * @original ons-card
 * @category visual
 * @tutorial react/Reference/visual
 * @description
 * [en]Card component that can be used to display content.[/en]
 * [ja][/ja]
 * @example
 *
<Card>
  <p>Some content</p>
</Card>
 */

  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  // modifier: PropTypes.string

</script>

<ons-card {...$$restProps} use:events>
	<slot/>
</ons-card>