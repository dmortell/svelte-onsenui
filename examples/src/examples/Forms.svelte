<script>
	// import { Navbar, Page, Block, List, Range, ListInput } from 'framework7-svelte';
	import { Page, Icon, List, ListItem, ListHeader, ListTitle, Toolbar, ToolbarButton, BackButton, Button } from '$svelte-onsenui';
	import MyToolbar from './MyToolbar.svelte';
</script>

<Page>
	<MyToolbar title='List' />
  <!-- <Navbar title="Form Storage" backLink="Back" /> -->

  <!-- <Block strong>
	</Block> -->
	<p>Try to fill the form below and then go to any other page.</p>

	<List modifier='inset'>
		<ListHeader slot='header' style="font-size: 15px">Inset List</ListHeader>
		<ListItem slot='footer'>
			<Button modifier="quiet">Cancel</Button>
			<Button modifier="quiet">Submit</Button>
		</ListItem>
	</List>

	<!-- <p>{data.join(' + ')} = {sum}</p> -->



  <List form formStoreData id="demo-form">
    <!-- <ListInput label="Name" name="name" type="text" clearButton placeholder="Your name" />
    <ListInput label="Password" name="password" type="password" clearButton placeholder="Your password" />
    <ListInput label="E-mail" name="email" type="email" clearButton placeholder="Your e-mail" />
    <ListInput label="URL" name="url" type="url" clearButton placeholder="URL" />
    <ListInput label="Phone" name="phone" type="tel" clearButton placeholder="Your phone number" />
    <ListInput label="Gender" type="select" name="gender" placeholder="Please choose...">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </ListInput>
    <ListInput label="Birthday" name="birthday" type="date" value="2014-04-30" placeholder="Please choose..." />
    <ListInput label="Date time" name="date" type="datetime-local" placeholder="Please choose..." />
    <ListInput label="Range" input={false}>
      <span slot="input">
        <Range input={true} name="range" value={50} min={0} max={100} step={1} />
      </span>
    </ListInput>
    <ListInput label="About you" type="textarea" name="bio" resizable placeholder="Bio" /> -->
  </List>
</Page>
