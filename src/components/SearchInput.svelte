<script>
	import {onMount} from 'svelte'
	import {getEventsAction} from './Utils.js';
	const events = getEventsAction();
	const EVENT_TYPES = ['change', 'input'];
	export let id;
	let node;

	/**
 * @original ons-search-input
 * @category form
 * @tutorial react/Reference/search-input
 * @description
 * [en]
 *  A search input component. The component will automatically render as a Material Design search input on Android devices.
 *
 *  Most attributes that can be used for a normal `<input>` element can also be used on the `<SearchInput>` component.
 * [/en]
 * [ja][/ja]
 * @example
 * <SearchInput
 *   value={this.state.text}
 *   onChange={(event) => { this.setState({text: event.target.value})} }
 *   modifier='material'
 *   placeholder='Username' />
 */

	const onChange = (event) => {
		if (props.onChange) {
			return $$props.onChange(event);
		}
	};

	onMount(()=>{
		// if ($$props.defaultValue !== undefined) {
		// 	node.value = this.props.defaultValue;
		// }
		// if (typeof this.props.checked !== 'undefined') {
		// 	node.checked = this.props.checked;
		// } else if (this.props.defaultChecked !== undefined) {
		// 	node.checked = this.props.defaultChecked;
		// }
		// if (this.props.value !== undefined) {
		// 	node.value = this.props.value;
		// }
		// EVENT_TYPES.forEach(eventType => node.addEventListener(eventType, this.onChange));
		// return () => {
		// 	EVENT_TYPES.forEach(eventType => node.removeEventListener(eventType, this.onChange));
		// }
	})

  // componentDidUpdate() {
  //   if (typeof this.props.value !== 'undefined' && node.value !== this.props.value) {
  //     node.value = this.props.value;
  //   }
  //   if (typeof this.props.checked !== 'undefined') {
  //     node.checked = this.props.checked;
  //   }
  // }

  // modifier: PropTypes.string,
  // disabled: PropTypes.bool,
  // onChange: PropTypes.func,
  // defaultValue: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.instanceOf(Date)
  // ]),
  // value: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.instanceOf(Date)
  // ]),
  // defaultChecked: PropTypes.bool,
  // checked: PropTypes.bool,
  // placeholder: PropTypes.string,
  // type: PropTypes.string,
  // inputId: PropTypes.string,
  // float: PropTypes.bool
</script>

<ons-search-input input-id={id} bind:this={node} {...$$restProps} use:events>
	<slot/>
</ons-search-input>
