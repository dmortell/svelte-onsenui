<script>
import {Page, Toolbar, Input, Button} from '$svelte-onsenui';
export let description, onChange, onCancel, navigator
</script>

<Page>
	<Toolbar inline>
		<div class='center'>Description</div>
	</Toolbar>
	<br />
	<div style="text-align:center">
		<Input value={description} on:change={onChange} />
		<p>
			<Button modifier='light' on:click={navigator.popPage}>Previous</Button>
			<Button modifier='light' on:click={onCancel}>Close</Button>
		</p>
	</div>
</Page>