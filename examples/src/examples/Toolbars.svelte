<script>
	import { Page, Button, BackButton, ToolbarButton, Toolbar, BottomToolbar } from '$svelte-onsenui';
	var modifier = '';
	function toggleModifier(){
    modifier = modifier === 'material' ? '' : 'material';
  }
</script>

<Page {modifier}>
	<Toolbar slot='toolbar' modifier={modifier} >
		<div class="left"><BackButton {modifier}>Back</BackButton></div>
		<div class="center">Toolbar Example</div>
		<div class="right"><ToolbarButton {modifier}>Settings</ToolbarButton></div>
	</Toolbar>
	<div style='margin: 50px'>
		<p>This is a page!</p>
		{#if modifier}
			<p>{modifier} mode</p>
			{:else}
			<p>default/ios mode</p>
		{/if}
		<p>
			<Button {modifier} on:click={toggleModifier}>Switch modifier</Button>
			<br />
			<br />
			<br />
			<br />
			<br />
			Use &lt;ToolbarButton&gt; in toolbars instead of &lt;Button&gt;
		</p>
	</div>
	<BottomToolbar style='display:flex; justify-content: space-around; flex-wrap: nowrap; line-height:44px;'>
		<div class='left'>
			<ToolbarButton {modifier}>ToolbarButton</ToolbarButton>
		</div>
		<div class='center'>
			Bottom Toolbar content..
		</div>
		<div class='right'>
			<Button {modifier}>Normal Button</Button>
		</div>
	</BottomToolbar>
</Page>
