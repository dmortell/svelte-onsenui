<script>
	import {getEventsAction} from './Utils.js';
	const events = getEventsAction();

/**
 * @original ons-bottom-toolbar
 * @category page
 * @description
 * [en]Toolbar component that is positioned at the bottom of the page.[/en]
 * [ja][/ja]
 * @example
 * <BottomToolbar modifier="material"> Content </BottomToolbar>
 */

  /**
   * @name modifier
   * @type string
   * @description
   *  [en]Specify modifier name to specify custom styles. Optional.[/en]
   *  [ja][/ja]
   */
	// modifier: PropTypes.string


</script>

<ons-bottom-toolbar {...$$restProps} use:events>
	<slot/>
</ons-bottom-toolbar>
