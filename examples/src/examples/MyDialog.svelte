<script>
import {Dialog, Navigator} from '$svelte-onsenui';
import MyDialogPage1 from './MyDialogPage1.svelte';
import MyDialogPage2 from './MyDialogPage2.svelte';
export let name, description;
export let onCancel, onNameChanged, onDescriptionChanged, isOpen
// let navigator

//   function popPage() {
//     navigator.popPage();
//   }

//   function pushPage() {
// 		console.log('mydialog.pushpage',navigator)
//     navigator.pushPage({component: MyDialogPage2, props: {description, onChange: onDescriptionChanged, popPage}});
//   }

  // function renderPage(route, navigator) {
  //   var comp = route.comp;
  //   var props = route.props;
  //   props.description = this.props.description;
  //   props.name = this.props.name;
  //   return React.createElement(comp, props);
  // }

// props: {name, pushPage, popPage, onNameChanged, onDescriptionChanged}
// <!-- <MyDialogPage1 {name} {onNameChanged} {onDescriptionChanged} {pushPage}/> -->
// <!-- <Navigator animation='slide' bind:this={navigator} -->

</script>

<Dialog onCancel={onCancel} visible={isOpen} animation='default' isCancelable={true}>
	<Navigator animation='slide'
		initialRoute={{
			component: MyDialogPage1,
			props: {name, description, onNameChanged, onDescriptionChanged, onCancel}
		}}
	/>
</Dialog>
