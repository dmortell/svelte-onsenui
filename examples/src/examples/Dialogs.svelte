<script>
	import {Page, Button} from '$svelte-onsenui';
	import MyToolbar from './MyToolbar.svelte';
	import MyDialog from './MyDialog.svelte';
	import ons from 'onsenui';

	let state = { dialogOpen: false, name: 'bob', description: 'the builder' };

  function hide() { state = {...state, dialogOpen: false}; }
  function onNameChanged(value) { state = {...state, name: value}; }
  function onDescriptionChanged(value) { state = {...state, description: value}; }
  function showAlert() {
		state = {...state, dialogOpen: true}
		console.log('s',state)
	}
  function showAlert2() { ons.notification.alert({message: 'You pressed "ok"'}); }
</script>

<Page>
	<MyToolbar title='Dialog' slot='toolbar'/>
	<div style='text-align: center'>
		<h1>Page Content</h1>
		<Button on:click={showAlert}> Show Dialog </Button>
		<Button on:click={showAlert2}> Onsen Alert </Button>
		<hr/>
		<div>Name : {state.name} </div>
		<div>Description: {state.description} </div>
	</div>
	<MyDialog onCancel={hide} name={state.name} description={state.description}
		onNameChanged={onNameChanged}
		onDescriptionChanged={onDescriptionChanged}
		isOpen={state.dialogOpen}
	/>
</Page>
