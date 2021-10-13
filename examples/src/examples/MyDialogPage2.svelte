<script>
import {Page, Toolbar, Input, Button} from '$svelte-onsenui';
export let description, onChange, navigator
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
		</p>
	</div>
</Page>