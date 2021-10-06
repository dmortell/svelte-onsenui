<script>
import {getEventsAction} from './Utils.js';
const events = getEventsAction();
export let visible = true

/**
 * @original ons-toolbar
 * @category page
 * @tutorial react/Reference/toolbar
 * @description
 * [en]Toolbar component that can be used with navigation. Left, center and right container can be specified by class names. This component will automatically displays as a Material Design toolbar when running on Android devices.[/en]
 * [ja][/ja]
 * @example
 *
<Page renderToolbar={() =>
  <Toolbar>
    <div className="left">
      <BackButton>
          Back
      </BackButton>
    </div>
    <div className="center">
      Title
    </div>
    <div className="right">
      <ToolbarButton>
        <Icon icon="md-menu" />
      </ToolbarButton>
    </div>
  </Toolbar> }
/>
 */


// Toolbar.propTypes = {
//   /**
//    * @name modifier
//    * @type string
//    * @description
//    *  [en]
//    *  Specify modifier name to specify custom styles. Optional.
//    *  [/en]
//    *  [ja][/ja]
//    */
//   modifier: PropTypes.string,

//   /**
//    * @name visible
//    * @type bool
//    * @description
//    *  [en]If true, the toolbar is shown on the screen. Otherwise, the toolbar is not shown.[/en]
//    *  [ja][/ja]
//    */
//   visible: PropTypes.bool
// };


</script>

{#if visible}
<ons-toolbar {...$$restProps} use:events>
	<slot/>
</ons-toolbar>
{/if}