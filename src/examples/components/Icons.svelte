<script>
	import ons from 'onsenui';
	import {Button, Page, Fab, Icon} from '$svelte-onsenui';
	import MyToolbar from './MyToolbar.svelte';

	var modifier = 'default'
	var showMaterial = false
	var btnText = 'Switch to material design'

  function changeModifier() {
    if (showMaterial) {
        showMaterial = false
        btnText = 'Switch to material design'
        modifier = 'default'
      // this.setState({
      //   showMaterial: false,
      //   btnText: 'Switch to material design',
      //   modifier: 'defaullt',
      // });
    } else {
        showMaterial = true
        btnText = 'Switch to default design'
        modifier = 'material'
    }
  }
	const angles = [0, 90, 180, 270]
</script>

<Page {modifier}  >
	<MyToolbar slot='toolbar' {modifier} title='Icon' />
	<!-- <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> -->
	<div style="display:flex; flex-direction:column; align-items:center; justify-content: center;">
		<p> </p>
		<Button {modifier} on:click={changeModifier} > {btnText} </Button>
		<p> modifier: {modifier} </p>
		<p> Button standard </p>
		<Icon {modifier} fixed-width='false' spin icon='shield, material:md-edit' size='20px, material:20px' />

		<h3>Rotate</h3>
		{#each angles as val}
		<Icon {modifier} fixed-width rotate={val}
			size={{ 'default': 20, material: 18 }}
			icon={{ 'default': 'shield', material: 'md-edit' }}/>
		{/each}

    <h3>Spin</h3>
    <Icon size="30" spin icon="md-spinner">nsen</Icon>

		<h3>Material icons</h3>

    <Icon icon="md-face"></Icon>
    <Icon icon="md-home"></Icon>
    <Icon icon="md-zoom-in"></Icon>

    <h3>Font awesome</h3>

    <Icon icon="fa-file"></Icon>
    <Icon icon="fa-cog"></Icon>
    <Icon icon="fa-car"></Icon>

    <h3>Ionicons</h3>

    <Icon icon="ion-ios-menu"></Icon>
    <Icon icon="ion-ios-hammer"></Icon>
    <Icon icon="ion-ios-calendar"></Icon>

    <h3>Colors</h3>
		<Icon style="color: red;" icon="md-face"></Icon>
    <Icon style="color: blue;" icon="md-face"></Icon>
    <Icon style="color: green;" icon="md-face"></Icon>

    <h3>Size</h3>

    <Icon size="10px" icon="md-face"></Icon>
    <Icon size="20px" icon="md-face"></Icon>
    <Icon size="30px" icon="md-face"></Icon>


    <h3>Button</h3>
    <ons-button>
      <Icon icon="md-face"></Icon>
      Button
    </ons-button>

		<Fab ripple on:click={e=>ons.notification.toast('Hi there', {timeout:2000})}>+</Fab>

	</div>
</Page>