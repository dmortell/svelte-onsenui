<script>
	import { Page, Button, Icon, Popover, Toolbar, BackButton } from '$svelte-onsenui';
	import MyToolbar from './MyToolbar.svelte';

	let isOpen = false;
	let target;
	let state = {}

	function setState(settings){
		let target = settings.target ? document.getElementById(settings.target) : null;
		// let isOpen = !state.isOpen
		state = {...state, ...settings, target};
		console.log(state)
	}
  function showClick(target) {
    console.log('target: ' + target);
		// target = document.getElementById(target);
    setState({isOpen: true, target: target});
  }
  function getTarget() {
    return state.target;
  }
  function cancel() {
    console.log('cancel');
    isOpen = false;
  }
</script>

<Page>
	<!-- <MyToolbar title='List' /> -->

	<Toolbar slot='toolbar'>
		<div class="left"><BackButton>Back</BackButton></div>
		<div class="center">Alert dialog</div>
	</Toolbar>

	<p style="text-align: center; padding-top: 10px">
		<!-- <Button on:click={showClick}>Show dialog</Button> -->
		<Button id=button1 on:click={() => setState({target: 'button1', isOpen: true}) } >Button</Button>
	</p>

	<!-- <ListTitle>List Title</ListTitle> -->


	<div style="text-align:center">
		<br />
		<br />
		<Button id='button2' on:click={() => showClick('button2')}>Click me!</Button>
	</div>

	<p><Button fill raised popoverOpen=".popover-menu">Open popover on me</Button></p>

	<!-- <Link popoverOpen=".popover-menu">Open Popover</Link> -->

</Page>

<Popover isOpen={state.isOpen} cancelable onCancel={() => setState({isOpen: false})} getTarget={() => state.target} >
	<div style="text-align: center; opacity: 0.5">
		<p>This is a popover!</p>
		<p><small>Click the background to remove the popover.</small></p>
	</div>
</Popover>

<!-- <Popover class="popover-menu">
	<div style="text-align: center; opacity: 0.5">
		<p>This is another popover!</p>
		<p><small>Click the background to remove the popover.</small></p>
	</div>
</Popover> -->

<!-- <Page>
	<MyToolbar title='Popover' />
	<div class='toolbar'>
		<div class='left'>
			<span ref='navigation' on:click={() => showClick(refs.navigation)} class='toolbar-button--outline toolbar__line-height'>
				<Icon icon='menu' style="font-size:32px; vertical-align: -6px" />
			</span>
		</div>

		<div class='center'>Popover demo!</div>

		<div class='right'>
			<span ref='topRight' onClick={() => showClick(refs.topRight)} class='toolbar-button--outline toolbar__line-height'>Button</span>
		</div>
	</div>

	<div style={{textAlign: 'center'}}>
		<br />
		<br />
		<Button ref='button' onClick={() => showClick(refs.button)}>Click me!</Button>
	</div>

	<div class='tabbar'>
		<label onClick={() => showClick(refs.stop)} class='tabbar__item'>
			<input type='radio' name='tabbar-b' defaultChecked='checked' />
			<button ref='stop' class='tabbar__button'>
				<i class='tabbar__icon ion-ios-square'></i>
			</button>
		</label>

		<label onClick={() => showClick(refs.record)} class='tabbar__item'>
			<input type='radio' name='tabbar-b' />
			<button ref='record' class='tabbar__button'>
				<i class='tabbar__icon ion-ios-microphone'></i>
			</button>
		</label>

		<label onClick={() => showClick(refs.star)} class='tabbar__item'>
			<input type='radio' name='tabbar-b' />
			<button ref='star' class='tabbar__button'>
				<i class='tabbar__icon ion-ios-star'></i>
			</button>
		</label>

		<label onClick={() => showClick(refs.cloud)} class='tabbar__item'>
			<input type='radio' name='tabbar-b' />
			<button ref='cloud' class='tabbar__button'>
				<i class='tabbar__icon ion-ios-cloud-outline'></i>
			</button>
		</label>

		<label onClick={() => showClick(refs.pie)} class='tabbar__item'>
			<input type='radio' name='tabbar-b' />
			<button ref='pie' class='tabbar__button'>
				<i class='tabbar__icon ion-ios-pie'></i>
			</button>
		</label>
	</div>

	<Popover isOpen={state.isOpen} onCancel={cancel} getTarget={getTarget} direction='up down' cancelable>
		<div style="text-align: center; opacity: 0.5">
			<p>This is a popover!</p>
			<p><small>Click the background to remove the popover.</small></p>
		</div>
	</Popover>

</Page> -->
