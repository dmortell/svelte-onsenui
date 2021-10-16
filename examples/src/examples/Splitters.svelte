<script>
	import { Splitter, SplitterSide, SplitterContent, Page, Toolbar, Button } from '$svelte-onsenui';
import { tick } from 'svelte';
	import MyToolbar from './MyToolbar.svelte';

	 let showLeft = false, showRight = false
	 let openLeft = false,  openRight = false, swipeable = true
	 let isOpenLeft = false

  function handleLeftClose() {
      openLeft = false;
  }
  function handleLeftOpen() {
      openLeft = true;
  }
  function handleRightClose() {
      openRight = false;
  }
  function handleRightOpen() {
      openRight = true;
  }
	function toggle(value){
		tick();
		console.log('toggle to', !value)
		return !value
	}
	function toggleLeft(){
		// showLeft = !isOpenLeft
		showLeft = !showLeft
		if (showLeft) nodeLeft.open()
		else nodeLeft.close()
		console.log('toggle to', {showLeft}, nodeLeft)
	}

	$: console.log({isOpenLeft})

	// $: {
	// 	if (openRight) nodeRight.open()
	// 	else nodeRight.close()
	// }

	let nodeLeft, nodeRight
</script>

<Page>
	<MyToolbar slot='toolbar' title="Splitter" />

	<Splitter>

		{#if 0}

		<ons-splitter-side bind:this={nodeLeft} id="menu" side="left" width="220px" collapse swipeable
		mode="collapse"
		isOpen
		is-open onOpen={handleLeftOpen}>
			<ons-page>
				<ons-list>
					<!-- <ons-list-item onclick="fn.load('home.html')" tappable> -->
					<ons-list-item  tappable>
						Home
					</ons-list-item>
					<ons-list-item  tappable>
						Settings
					</ons-list-item>
					<ons-list-item  tappable>
						About4
					</ons-list-item>
				</ons-list>
			</ons-page>
		</ons-splitter-side>
		{/if}

<!--
    <SplitterSide side="right" width={300}
      collapse={!this.state.showRight}
      isOpen={this.state.openRight}
      onClose={this.handleRightClose.bind(this)}
      onOpen={this.handleRightOpen.bind(this)}
      swipeable={true}>
      <Page> Page Right </Page>
    </SplitterSide>
  </Splitter> -->


		<!-- <SplitterSide side="left" width="200px" collapse={!showLeft} isOpen={openLeft}
			mode='landscape'
			collapse='portrait'
			onClose={handleLeftClose} onOpen={handleLeftOpen} {swipeable}> -->
		<SplitterSide {swipeable} width=201px side=left id='left'
			collapse='landscape'

			bind:isOpen={isOpenLeft}
				bind:node={nodeLeft}
			>
			<Page>
				<Toolbar><div class="center">Menu</div></Toolbar>
				<div style="margin-top:50px;"><Button on:click={() => toggleLeft()}>Close left menu</Button></div>
			</Page>
		</SplitterSide>

		<SplitterContent>
			<Page>
				<p><Button on:click={() => swipeable = !swipeable} >{swipeable ? 'Disable Swipe' : 'Enable Swipeable'}</Button></p>
				<p><Button on:click={() => showLeft = !showLeft}>toggle left menu</Button></p>
				<p><Button on:click={() => showRight = toggle(showRight)} > toggle right menu</Button> </p>
				<p><Button on:click={() => openLeft = true}>Open left menu</Button></p>
				<p><Button on:click={() => openRight = true}>Open right menu</Button></p>
				Try it....
			</Page>
		</SplitterContent>

		<!-- <SplitterSide side="right" width="300px" collapse={!showRight} isOpen={openRight} -->

		<SplitterSide side="right" width="300px" isOpen={openRight}
			mode='collapse'
			collapse='landscape'
			bind:node={nodeRight}
			onClose={handleRightClose} onOpen={handleRightOpen} {swipeable}>
			<Page>
				<Toolbar>
					<div class="center">right menu</div>
				</Toolbar>
				<p style="margin-top:50px;"><Button on:click={() => openRight = false}>Close right menu</Button></p>
			</Page>
		</SplitterSide>

	</Splitter>
</Page>
