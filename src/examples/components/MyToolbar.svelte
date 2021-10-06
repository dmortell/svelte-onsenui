<script>
import {Toolbar, BackButton} from '$svelte-onsenui';
export let modifier, title
</script>

<Toolbar modifier={modifier} >
	<div class="left"><BackButton {modifier}>Back</BackButton></div>
	<div class="center">{title}</div>
</Toolbar>