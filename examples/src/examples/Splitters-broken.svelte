<script>
	import { Splitter, SplitterSide, SplitterContent, Page, Toolbar, Button } from '$svelte-onsenui';
	import MyToolbar from './MyToolbar.svelte';

	 let showLeft = false, showRight = false
	 let openLeft = false,  openRight = false, swipeable = true

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
		console.log('toggle to', !value)
		return !value
	}
	function toggleLeft(){
		openLeft = !openLeft
	}
</script>

<Page>
	<MyToolbar slot='toolbar' title="Splitter" />

	<Splitter>

		{#if showLeft}

		<ons-splitter-side id="menu" side="left" width="220px" collapse swipeable>
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
						About
					</ons-list-item>
				</ons-list>
			</ons-page>
		</ons-splitter-side>

		{/if}

		<SplitterSide side="left" width="200px" collapse={!showLeft} isOpen={openLeft}
			onClose={handleLeftClose} onOpen={handleLeftOpen} {swipeable}>
			<Page>
				<Toolbar><div class="center">left menu</div></Toolbar>
			</Page>
			<p><Button on:click={() => openLeft = false}>Close left menu</Button></p>
		</SplitterSide>

		<SplitterContent>
			<Page>
				<p><Button on:click={() => swipeable = !swipeable} >{swipeable ? 'Disable Swipe' : 'Enable Swipeable'}</Button></p>
				<p><Button on:click={toggleLeft}>toggle left menu</Button></p>
				<p><Button on:click={() => showRight = toggle(showRight)} > toggle right menu</Button> </p>
				<p><Button on:click={() => openLeft = true}>Open left menu</Button></p>
				<p><Button on:click={() => openRight = true}>Open right menu</Button></p>
				Try it....1
			</Page>
		</SplitterContent>


<!--
		<SplitterSide side="right" width="300px" collapse={!showRight} isOpen={openRight}
			onClose={handleRightClose} onOpen={handleRightOpen} {swipeable}>
			<Page>
				<Toolbar>
					<div class="center">right menu</div>
				</Toolbar>
				<p style="margin-top:50px;"><Button on:click={() => openRight = toggle(openRight)}>Close right menu</Button></p>
			</Page>
		</SplitterSide> -->

	</Splitter>
</Page>
