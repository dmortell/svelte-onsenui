<script>
	import {onMount} from 'svelte'
	import {getEventsAction} from './Utils.js';
	const events = getEventsAction();

	/**
 * @original ons-checkbox
 * @category form
 * @tutorial react/Reference/checkbox
 * @description
 * [en]
 *  A checkbox element. The component will automatically render as a Material Design checkbox on Android devices.
 *
 *  Most attributes that can be used for a normal `<input type="checkbox">` element can also be used on the `<Checkbox>` component.
 * [/en]
 * [ja][/ja]
 * @example
 * <Checkbox
 *   onChange={event => { this.setState({checked: event.target.checked})} }
 *   modifier='material' />
 */

	export let checked;
	export let id;
	export let defaultValue, defaultCheck;
	// $: if (defaultValue !== undefined && checked===undefined) checked = defaultValue
	// $: if (defaultCheck !== undefined && checked===undefined) checked = defaultCheck
	$: checked = checked ?? defaultCheck ?? defaultValue
	$: checked = checked ? 'checked' : null
	let node;

	const onChange = (event) => {
		// if (props.onChange) return $$props.onChange(event);
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

<ons-checkbox {checked} input-id={id} bind:this={node} {...$$restProps} use:events>
	<slot/>
</ons-checkbox>
