<script>
	import { Page, Toolbar, ToolbarButton, BackButton, Button, Input, List, ListItem, Checkbox, Radio, SearchInput } from '$svelte-onsenui';
	import MyToolbar from './MyToolbar.svelte';

	let state = {
      text: '',
			search: '',
      selected: [],
      selected2: 1
  };
	let fruits = ["apple", "grape", "orange"];
	let selectedFruit = "";
	let count = 1

	function changeInputs(){
		state.text   = "text " + count
		state.search = "find " + count
		state.selected2 = count % 3
		state.selected = [count % 3]
		count++
	}

  function handleCheckbox(idx, event) {
    const selected = state.selected;
    if (event.target.checked && selected.indexOf(idx) < 0) {
      selected.push(idx);
    }
    else if(!event.target.checked) {
      selected.splice(selected.indexOf(idx), 1);
    }
    state = {...state, selected: selected};
  }

  function handleRadio(idx, event) {
    if (event.target.checked) {
      state = {...state, selected2: idx};
    }
  }
	function onChange(event){
		const field = event.target.name || 'text';					// if name is not specified, update state.text
		state = {...state, [field]: event.target.value};
	}
</script>

<Page>
	<MyToolbar title='Inputs' />

	<div style='margin: 50px'>

		<p>Please enter text:</p>
			<label for='username1' class='center'>Username:</label>
			<p><Input value={state.text} float on:input={onChange} modifier='material' placeholder='Username (material)' id='username1'/></p>
			<p><Input value={state.text} float on:input={onChange} placeholder='Username (default)' /></p>
			<p><Input readOnly value={state.text} float on:change={onChange} modifier='material' placeholder='Username (read-only)' /></p>
			<p><Input disabled value={state.text} float on:change={onChange} modifier='material' placeholder='Username (disabled)' /></p>
			<p><input value={state.text} on:input={onChange} /></p>
			<p><Input value={state.unspecified} defaultValue='Bob' float on:input={onChange} modifier='material' placeholder='Username (material)' id='username1'/> Default text</p>

			<ListItem tappable>
				<div class='left'>
					<label for='search' class='center'>Find</label>
				</div>
				<div class='center'>
					<p><SearchInput name='search' value={state.search} on:input={onChange} modifier='material' placeholder='Search (material)' id='search' /></p>
				</div>
			</ListItem>
			<p><SearchInput name='search' value={state.search} on:input={onChange} placeholder='Search (default)' /></p>
			<div> Text: {state.text} </div>
			<div> Find: {state.search} </div>
			<Button on:click={changeInputs}>Change reord</Button>

		<h2>Checkboxes</h2>
			{#each [0,1,2] as idx}
				<ListItem tappable>
					<div class='left'>
						<input type='checkbox' on:change={handleCheckbox.bind(this, idx)} checked={state.selected.indexOf(idx) >= 0} />
						<Checkbox input-id={'check'+idx} name={'check'+idx} on:input={handleCheckbox.bind(this, idx)} checked={state.selected.indexOf(idx) >= 0} />
					</div>
					<label for={'check'+idx} class='center'>Option {idx}</label>
				</ListItem>
			{/each}
			<p>Selected: [{state.selected.join(', ')}]</p>

		<!-- <h2>Fruit:</h2>
			{#each fruits as fruit}
			<label class=left>
				<input type=radio bind:group={selectedFruit} value={fruit}>{fruit}<br>
			</label>
			{/each}
			<p>Selected: {selectedFruit}</p> -->

		<h2>Radio buttons</h2>
			{#each [0,1,2] as idx}
				<ListItem tappable>
					<div class='left'>
						<input id={'radio'+idx} type='radio' on:change={handleRadio.bind(this, idx)} checked={idx === state.selected2} />
						<Radio id={'radio'+idx} on:change={handleRadio.bind(this, idx)} checked={idx === state.selected2} />
					</div>
					<label for={'radio'+idx} class='center'>Item {idx}</label>
				</ListItem>
			{/each}
			<p>Selected: {state.selected2}</p>

	</div>

	</Page>
