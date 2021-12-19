<script>
	import {Page, Button, Card, Icon, Modal, Toolbar, ToolbarButton} from '$svelte-onsenui';
	import MyToolbar from './MyToolbar.svelte';
	import MyDialog from './MyDialog.svelte';
	import ons from 'onsenui';

	let state = { dialogOpen: false, name: 'bob', description: 'the builder' };
	let showModal = false

  function hide() { state = {...state, dialogOpen: false}; }
  function onNameChanged(value) { state = {...state, name: value}; }
  function onDescriptionChanged(value) { state = {...state, description: value}; }
  function showAlert() {
		state = {...state, dialogOpen: true}
		console.log('s',state)
	}
  function showAlert2() { ons.notification.alert({message: 'You pressed "ok"'}); }
</script>


<!-- <Modal isOpen={state.showModal} animation='fade' onPostShow={() => console.log('modal shown')} onPostHide={() => console.log('modal hidden')} > -->

<Modal bind:isOpen={showModal} animation='fade'>
	<Page style="background-color:blue;">
		<Toolbar>
			<div class="center">This is a modal page</div>
			<div class="right">
			<ToolbarButton on:click={() => showModal = false}>
				<Icon icon='close' size='24px, material:20px' />
			</ToolbarButton>
			</div>
		</Toolbar>

		<br/>
		<br/>
		<p>I'm a modal page...</p>
	</Page>
</Modal>



<Page>
	<MyToolbar title='Dialog' slot='toolbar'/>
	<div style='text-align: center'>
		<h1>Page Content</h1>
		<Button on:click={showAlert} modifier='outline'> Show Dialog </Button>
		<Button on:click={showAlert2}> Onsen Alert </Button>
		<Card>
			<div>Name : {state.name} </div>
			<div>Description: {state.description} </div>
		</Card>

		<Button on:click={() => {
			showModal = true
			console.log('clicked open modal',showModal)
		}}>
			Open Modal Page
		</Button>
		<section style="padding:15px;">
			Section one
		</section>

	</div>

	<MyDialog onCancel={hide} name={state.name} description={state.description}
		onNameChanged={onNameChanged}
		onDescriptionChanged={onDescriptionChanged}
		isOpen={state.dialogOpen}
	/>


</Page>
