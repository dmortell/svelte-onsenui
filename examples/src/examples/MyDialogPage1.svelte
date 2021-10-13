<script>
import {Page, Toolbar, Input, Button} from '$svelte-onsenui';
import MyDialogPage2 from './MyDialogPage2.svelte';
export let name, description, onNameChanged, onDescriptionChanged, navigator

  function nextPage() {
		console.log('mydialog.nextpage',navigator)
    navigator.pushPage({component: MyDialogPage2, props: {description, onChange: onDescriptionChanged}});
  }


</script>

<Page>
	<Toolbar inline>
		<div class='center'>Name</div>
	</Toolbar>
	<br />
	<div style="text-align:center">
		<label for='name'>Name:
		</label>
			<Input id=name value={name} on:change={onNameChanged} />
		<p>
			<Button modifier='light' on:click={nextPage}>Next</Button>
			<!-- <Button modifier='light' on:click={nextPage}>Close</Button> -->
		</p>
	</div>
</Page>
