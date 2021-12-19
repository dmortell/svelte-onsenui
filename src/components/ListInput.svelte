<script>
	import {onMount} from 'svelte'
	import {getEventsAction} from './Utils.js';
	const events = getEventsAction();

	//  $: doExpand(expanded)
	//  function doExpand(expanded){
	// 	if (node && expanded !== node.expanded){
	// 		expanded ? node.showExpansion() : node.hideExpansion()
	// 	}
	//  }

	export let id = undefined;
	export let name = undefined;
	export let type = undefined;
	export let label = '';
	export let checked = undefined;
	export var expanded = false;
	export let defaultValue = undefined;

	let node

	$: id = id ?? name
	$: checked = (checked ?? defaultValue) ? 'checked' : null

	// const onChange = (event) => {
	// 	if (props.onChange) return $$props.onChange(event);
	// };

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


<ons-list-item bind:this={node} class:expanded {expanded} {...$$restProps} use:events>
	{#if type=='radio'}
		<label class="left" for={id}>
			<ons-radio {checked} input-id={id} {name} {...$$restProps} use:events />
		</label>
		<label for={id} class="center">
			{label}
			<slot/>
		</label>

	{:else if type=='checkbox'}
		<label class="left" for={id}>
			<ons-checkbox {checked} input-id={id} {name} {...$$restProps} use:events />
		</label>
		<label for={id} class="center">
			{label}
			<slot/>
		</label>

	{:else if type=='textarea'}
		<textarea {id} {name} class="textarea" {...$$restProps} use:events></textarea>
		<!-- <textarea {id} {name} class="textarea textarea--transparent" {...$$restProps} use:events></textarea> -->


	{:else if type=='select'}
		<label class="left" for={id}>{label}</label>
		<select class="select-input" select-id={id} {name} {...$$restProps} use:events>
			<slot/>
		</select>

	{:else if type=='select2'}
		<ons-select select-id={id} {name} {...$$restProps} use:events>
			<slot/>
		</ons-select>

	{:else}

		<ons-input input-id={id} {name} {type} {...$$restProps} use:events/>
	{/if}
</ons-list-item>


<!-- {#if $$slots.left}
<div class="left"><slot name="left"></slot></div>
{/if}
<ons-input input-id={id} {...$$restProps} use:events>
<slot/>
</ons-input>
{#if $$slots.right}
<div class="right"><slot name="right"></slot></div>
{/if} -->



<!-- <ons-list-item {expanded} {expandable} {lockOnDrag} {tappable} {tapBackgroundColor} {modifier} {...$$restProps}>
	<slot/>
</ons-list-item> -->

<!-- svelte:fragment -->

<!-- {#if $$slots.left}
	<div class="nav-left">
		<slot name="left"></slot>
	</div>
{/if} -->

<!-- <div class="list-item {$$props.class ??''}" class:narrow class:link on:click >
	{#if title}<div class="left"><slot name="title">{title}</slot></div>{/if}
	<div class='listitem-left'><slot name='left'></slot></div>
	<div class='listitem-center'>
		<div class='listitem-title'><slot></slot></div>
		<div class='listitem-footer'><slot name='footer'></slot></div>
	</div>
	{#if after}<div class="left"><slot name="after">{after}</slot></div>{/if}
	<div class='listitem-right'><slot name='right'></slot></div>
</div> -->
