<script>
import {Page, Toolbar, Button, BackButton, AlertDialog, AlertDialogButton} from '$svelte-onsenui';

let isOpen = false

  function handleClick() { setOpen(true) }
  function handleCancel() { setOpen(false) }
	function setOpen(open){
		isOpen = open
		console.log('isopen',isOpen)
	}

</script>

<Page>
	<Toolbar slot='toolbar'>
		<div class="left"><BackButton>Back</BackButton></div>
		<div class="center">Alert dialog</div>
	</Toolbar>

	<!-- <p style={{textAlign: 'center', paddingTop: '10px'}}> -->
	<p style="text-align: center; padding-top: 10px">
		<Button on:click={handleClick}>Show dialog</Button>
	</p>

	<AlertDialog modifier='rowfooter' maskColor='blue' visible={isOpen} animation='default'
		animationOptions={{ duration: .5, delay: 0.1, timing: 'ease-in' }}
		onCancel={handleCancel} isCancelable={false} >
		<div class="alert-dialog-title">Warning!</div>
		<div class="alert-dialog-content">An error has occurred!</div>
		<div class="alert-dialog-footer">
			<AlertDialogButton on:click={handleCancel}>Cancel</AlertDialogButton>
			<AlertDialogButton on:click={handleCancel}>Ok</AlertDialogButton>
		</div>
	</AlertDialog>
</Page>