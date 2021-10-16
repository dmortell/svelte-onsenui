<script>
import {getEventsAction} from './Utils.js';
const events = getEventsAction();

/**
 * @original ons-row
 * @category grid
 * @description
 * [en]
 * Represents a row in the grid system. Use with `Col` to layout components.
 * [/en]
 * [ja][/ja]
 * <Row>
 *   <Col width={50}>
  *   <ons-icon icon="fa-twitter"></ons-icon>
 *   </Col>
 *   <Col>Text</Col>
 * </Row>
 */

  /**
  * @name verticalAlign
  * @type {String}
  * @description
  *   [en]Short hand attribute for aligning vertically. Valid values are top, bottom, and center.[/en]
  *   [ja][/ja]
  */
  // verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center'])
</script>

<ons-row {...$$restProps} use:events>
	<slot/>
</ons-row>