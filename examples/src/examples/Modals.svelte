<script>
	import {Page, Button, Card, Icon, Modal, Toolbar, ToolbarButton} from '$svelte-onsenui';
	import MyToolbar from './MyToolbar.svelte';
	let showModal = false
</script>

<!-- <Modal isOpen={state.showModal} animation='fade' onPostShow={() => console.log('modal shown')} onPostHide={() => console.log('modal hidden')} > -->


	<Page>
		<MyToolbar title='Modal' slot='toolbar'/>
		<div style='text-align: center'>
			<h1>Page Content</h1>
			<section style="padding:15px;">
				<Button on:click={() => {showModal = true}}>Open Modal Page</Button>
			</section>
		</div>
	</Page>

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
			<section style="padding:15px;">
				<p>I'm a modal page...</p>
			</section>
		</Page>
	</Modal>
