<script>
	import { Card as Block, Page, Icon, List, ListInput, ListItem, ListHeader, ListTitle, Radio, Toolbar, ToolbarButton, BackButton, Button } from '$svelte-onsenui';
	import MyToolbar from './MyToolbar.svelte';

	var data = {
		gender:'female',
		cars:['bmw'],
	}
	var search = ''

	function onSearch(ev){
		search = ev.target.value; 		// search for value
		search = ''
	}
	function onEdit(ev){
		const {name, value, checked, type} = ev.target;
		if (!name) return console.error("ListInput missing 'name' attribute")
		if (Array.isArray(data[name])){
			const idx = data[name].indexOf(value)
			if ( checked && idx< 0) data[name].push(value)
			if (!checked && idx>=0) data[name].splice(idx, 1)
		}
		else data[name] = value
		data = data
	}
</script>

<Page>
	<MyToolbar title='Forms' slot=toolbar />

  <Block strong>
		<p>Lorem <Radio name="demo-radio-inline" value="inline-1"/> ipsum dolor sit amet, elit. Alias aut eius  eligendi <Radio name="demo-radio-inline" value="inline-2" checked /> ad delectus impedit tempore nemo!</p>
		<pre>{JSON.stringify(data)} </pre>
	</Block>

	<List form formStoreData modifier='inset'>
		<ListHeader slot='header' style="font-size: 15px">Form List</ListHeader>

		<ListInput type=text     on:change={onSearch} name="search" placeholder="Search" float outline />
		<ListInput type=text     on:change={onEdit} value={data.name} name="name" placeholder="Your name" float outline />
		<ListInput type=password on:input={onEdit}  value={data.password} name="password" placeholder="Your password" float />

		<ListInput type=select   on:change={onEdit} value={data.gender} label="Gender" name="gender" placeholder="Please choose...">
				<option value="na">Not specified</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
		</ListInput>

		<ListItem>Favorite Color :</ListItem>
		<ListInput type=radio on:change={onEdit}	name=color id=color-1 value=Red  checked={data.color=='Red'}>Red</ListInput>
		<ListInput type=radio on:change={onEdit}	name=color id=color-2 value=Blue checked={data.color=='Blue'}>Blue</ListInput>

		<ListItem>Favorite Cars:</ListItem>
		<ListInput type=checkbox on:change={onEdit}  name=cars id=cars-1 value=bmw    label='BMW'       checked={data.cars.includes('bmw')}></ListInput>
		<ListInput type=checkbox on:input={onEdit}   name=cars id=cars-2 value=volvo  label='Volvo 327' checked={data.cars.includes('volvo')}></ListInput>
		<ListInput type=checkbox on:change={onEdit}  name=cars id=cars-3 value=toyota label='Toyota'    checked={data.cars.includes('toyota')}></ListInput>
		<ListInput type=checkbox on:change={onEdit}  name=cars id=cars-4 value=nissan label='Nissan'    checked={data.cars.includes('nissan')}></ListInput>

    <ListInput label="Birthday" name="birthday" type="date" value="2014-04-30" placeholder="Please choose..." />
    <ListInput label="Date time" name="date" type="datetime-local" placeholder="Please choose..." />
    <ListInput label="E-mail" name="email" type="email" clearButton placeholder="Your e-mail" />
    <ListInput label="URL" name="url" type="url" clearButton placeholder="URL" />
    <ListInput label="Phone" name="phone" type="tel" clearButton placeholder="Your phone number" />
    <ListInput label="About you" type="textarea" name="bio" resizable placeholder="Bio" />

		<ListItem slot='footer'>
			<Button modifier="quiet">Cancel</Button>
			<Button modifier="quiet">Submit</Button>
		</ListItem>
	</List>

		<!-- <ListInput type=select2   on:change={onEdit} value={data.gender} label="Gender" name="gender" placeholder="Please choose...">
			<option value="na">Not specified</option>
			<option value="male">Male</option>
			<option value="female">Female</option>
		</ListInput> -->

		<!-- https://framework7.io/svelte/radio#examples -->
		<!-- <ListItem checkbox checked name="demo-media-checkbox"
			title="Facebook"
			after="17:14"
			subtitle="New messages from John Doe"
			text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
		/> -->

	<!--
	<List form formStoreData id="demo-form">
    <ListInput label="Gender" type="select" name="gender" placeholder="Please choose...">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </ListInput>
    <ListInput label="Range" input={false}>
      <span slot="input">
        <Range input={true} name="range" value={50} min={0} max={100} step={1} />
      </span>
    </ListInput>
  </List>
	-->
</Page>
