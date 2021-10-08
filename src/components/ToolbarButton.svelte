<script>
import {getEventsAction} from './Utils.js';
const events = getEventsAction();

 /**
 * @original ons-toolbar-button
 * @category page
 * @tutorial react/Reference/page
 * @description
 *   [en]
 *   Button component for the Toolbar. Using this component gives a nice default style.
 *
 *
 *   [/en]
 * [ja][/ja]
 * @example
 * <Page
     renderToolbar = { () =>
      <Toolbar>
        <div className='left'><BackButton>Back</BackButton></div>
        <div className='center'>Input</div>
        <div className='right'>
          <ToolbarButton onClick={this.add} >Add</ToolbarButton>
        </div>
      </Toolbar>
     }>
      Page Content
    </Page>
 */

</script>

<ons-toolbar-button {...$$restProps} use:events>
	<slot/>
</ons-toolbar-button>