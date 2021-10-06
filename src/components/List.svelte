<script>
	import {getEventsAction} from './Utils.js';
	const events = getEventsAction();

// import BasicComponent from './BasicComponent.jsx';

/**
 * @original ons-list
 * @category list
 * @tutorial react/Reference/list
 * @description
 *   [en]
 *     Component for representing a list. It takes an array called datasource and calls renderRow(row, index) for every row.  Furthermore, the header and the footer can be specified with `renderRow` and `renderHeader` respectively. [/en]
 * [ja][/ja]
 * @example
  <List
    dataSource={['Row 1', 'Row 2']}
    renderHeader={this.renderHeader}
    renderRow={(row, idx) => (
      <ListItem modifier={idx === this.state.data.length - 1 ? 'longdivider' : null}>
      	{row}
		  	<Button modifier="quiet" onClick={this.remove.bind(this, idx)}>Remove</Button>
  		</ListItem>
  )}
  renderFooter={this.renderFooter}
  />
 */


  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles.
   *  [/en]
   *  [ja][/ja]
   */
	 export var modifier = ''		// PropTypes.string,

/**
 * @name dataSource
 * @type string
 * @description
 *  [en]
 *    Source of the list data. Should be an array.
 *  [/en]
 *  [ja][/ja]
 */
// export var dataSource = []	// PropTypes.array,

/**
 * @name renderRow
 * @type function
 * @description
 *  [en]
 *  Function to specify the rendering function for every element in
 *  in the dataSource.
 *  [/en]
 *  [ja][/ja]
 */
// renderRow: PropTypes.func,

/**
 * @name renderHeader
 * @type function
 * @description
 *  [en]
 *  Function to specify the rendering function for the header
 *  [/en]
 *  [ja][/ja]
 */
// renderHeader: PropTypes.func,

/**
 * @name renderFooter
 * @type function
 * @description
 *  [en]
 *  Function to specify the rendering function for the footer
 *  [/en]
 *  [ja][/ja]
 */
// export renderFooter: PropTypes.func

// const attrs = Util.getAttrs(this);
// const pages = this.props.dataSource.map((data, idx) => this.props.renderRow(data, idx));

</script>

<ons-list {modifier} {...$$restProps} use:events>
	<slot name='header' />
	<slot/>
	<slot name='footer' />
</ons-list>

<!-- <ons-list {modifier} {...$$restProps}>
	<slot name='header' />
		{#if dataSource}
			{#each dataSource as row, idx}
				<slot/>
			{/each}
		{:else}
			<slot/>
		{/if}
	<slot name='footer' />
</ons-list> -->


<!-- <ons-list { ...attrs } ref={(list) => { this._list = list; }}>
	{this.props.renderHeader()}
	{pages}
	{this.props.children}
	{this.props.renderFooter()}
</ons-list> -->
