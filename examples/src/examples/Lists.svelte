<script>
	import { Page, Icon, List, ListItem, ListHeader, ListTitle, Toolbar, ToolbarButton, BackButton, Button } from '$svelte-onsenui';
	import MyToolbar from './MyToolbar.svelte';

	let data = [1, 2, 3, 4, 5, 6];
	$: sum = data.reduce((t, n) => t + n, 0);

  function reverseData() {
    data = data.reverse()
  }

  function remove(idx) {
		console.log('remove')
    data.splice(idx, 1);
    data = data;
  }

  function add() {
		console.log('add')
    data.push(data.length+1);
    data = data;
		// data = [...data, data.length + 1]
  }
</script>

<Page>
	<MyToolbar title='List' slot=toolbar/>

	<!-- <List dataSource={this.state.data}></List> -->
	<ListTitle>List Title</ListTitle>
	<List modifier='inset'>
		<!-- <ListItem slot='header' lockOnDrag style='background: #cddfe4' tappable tap-background-color='lightblue'> HEADER </ListItem> -->
		<!-- <ListHeader style={{fontSize: 15}} className="testClass"> Header Text </ListHeader> -->
		<ListHeader slot='header' style="font-size: 15px">Inset List</ListHeader>
		{#each data as row, idx}
			<ListItem left={idx+1} modifier={idx === data.length - 1 ? 'longdivider' : null}>
				Item {row}
				<div slot='left'>{idx+1}</div>
				<div slot='right'>
					<Button modifier="quiet" on:click={() => remove(idx)}>Remove <Icon icon='trash'/></Button>
				</div>
			</ListItem>
		{/each}
		<ListItem slot='footer'>
			<Button modifier="quiet" on:click={reverseData}>Reverse</Button>
			<Button modifier="quiet" on:click={add}>Add more</Button>
		</ListItem>
		<ListItem link >
			<p>Total: {data.join(' + ')} = {sum}</p>
		</ListItem>
	</List>


	<ListTitle>Expandable List Items</ListTitle>
	<List>
		<ListItem link modifier='chevron'>
			List item with chevron
		</ListItem>
		<ListItem expandable expanded>
			Tap to expand
			<div class="expandable-content">I have been expanded!</div>
		</ListItem>
		<ListItem expandable tappable>
			Tap to expand (tappable).
			<div class="expandable-content">I have also been expanded!</div>
		</ListItem>
		<ListItem expandable>
			Expandable with custom icon
			<div class="right"><Icon icon='pencil'/></div>
			<div class="expandable-content">How do you like the icon?</div>
		</ListItem>
	</List>

</Page>
