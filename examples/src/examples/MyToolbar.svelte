<script>
import {Toolbar, BackButton} from '$svelte-onsenui';
export let modifier=undefined, title=''
</script>

<Toolbar {modifier}>
	<div class="left"><BackButton {modifier}>Back</BackButton></div>
	<div class="center">{title}</div>
</Toolbar>