<script>
	import {onMount} from 'svelte'
	import {getEventsAction} from './Utils.js';
	const events = getEventsAction();

	let node;
	export let id;
	export let defaultValue, value;
	$: value = value ?? defaultValue
	// $: if (defaultValue !== undefined && value===undefined) value = defaultValue

	// const onChange = (event) => {
	// 	if (props.onChange) return $$props.onChange(event);
	// };

	// onMount(()=>{
	// 	if (defaultValue !== undefined && value===undefined) value = defaultValue

	// 	if (this.props.defaultValue !== undefined) {
  //     node.value = this.props.defaultValue;
	// 	if (typeof this.props.checked !== 'undefined') {
	// 		node.checked = this.props.checked;
	// 	} else if (this.props.defaultChecked !== undefined) {
	// 		node.checked = this.props.defaultChecked;
	// 	}
	// 	if (this.props.value !== undefined) {
	// 		node.value = this.props.value;
	// 	}
	// })

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

<ons-input value={value} input-id={id} bind:this={node} {...$$restProps} use:events>
	<slot/>
</ons-input>
