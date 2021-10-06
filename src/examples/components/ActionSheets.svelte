<script>
import {Page, Toolbar, Button, BackButton, ActionSheet, ActionSheetButton} from '$svelte-onsenui';

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
	<div class="left">
		<BackButton>Back</BackButton>
	</div>
	<div class="center">
		Action sheet
	</div>
</Toolbar>

<!-- <p style={{textAlign: 'center', paddingTop: '10px'}}> -->
<p style="text-align: center; padding-top: 10px">
	<Button on:click={handleClick}>Show dialog</Button>
</p>

<!-- onDeviceBackButton -->
<!-- modifier="material modifier2" -->
<!-- <ActionSheet maskColor='blue' isOpen={this.state.isOpen} animation='default' -->
<ActionSheet mask-color='rgba(0, 0, 0, 0.2)' visible={isOpen} animation='default'
	animationOptions={{ duration: 0.6, delay: 0.1, timing: 'ease-in' }}
	onCancel={handleCancel}
	on:postshow={e=>setOpen(true)}
	on:posthide={e=>setOpen(false)}
	cancelable
	title='Description'
>
	<ActionSheetButton on:click={handleCancel}>Label1</ActionSheetButton>
	<ActionSheetButton on:click={handleCancel}>Label2</ActionSheetButton>
	<ActionSheetButton on:click={handleCancel} modifier={'destructive'}>Label3</ActionSheetButton>
	<ActionSheetButton on:click={handleCancel} icon={'md-close'}>Cancel</ActionSheetButton>
</ActionSheet>
</Page>

<!-- ons.openActionSheet({
  title: 'My Action Sheet',
  cancelable: true,
  buttons: ['Label 0', 'Label 1', 'Label 2']
}); -->