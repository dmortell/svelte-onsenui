<script>
import {Button, Page, Icon} from '$lib';
import MyToolbar from './MyToolbar.svelte';


    // this.changeModifier = this.changeModifier.bind(this);
    var state = {
      showMaterial: false,
      btnText: 'Switch to material design',
      modifier: 'defaullt',
    };

  function changeModifier() {
    if (state.showMaterial) {
			state = {
        showMaterial: false,
        btnText: 'Switch to material design',
        modifier: 'defaullt',
      }
      // this.setState({
      //   showMaterial: false,
      //   btnText: 'Switch to material design',
      //   modifier: 'defaullt',
      // });
    } else {
      state = {
        showMaterial: true,
        btnText: 'Switch to default design',
        modifier: 'material'
      };
    }
  }

</script>



<main>
	Icon example
	<Icon icon='ion-navicon' size={48} fixedWidth spin /> ok
</main>

<!-- <Page modifier={this.state.modifier} renderToolbar={() => <MyToolbar modifier={this.state.modifier} title='Icon' />} >
	<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
		<p> </p>
		<Button modifier={this.state.modifier} onClick={this.changeModifier} > {this.state.btnText} </Button>
		<p> modifier: {this.state.modifier} </p>
		<p> Button standard </p>
		<ons-icon
			modifier={this.state.modifier}
			fixed-width='false'
			icon='ion-ios-brush, material:md-edit' size='20px, material:20px' />
		<p> Button standard2</p>
		{[0, 90, 180, 270].map((val) =>

		<Icon
			modifier={this.state.modifier}
			fixedWidth={true}
			rotate={val}
			size={{
				default: 20,
				material: 18
			}}
			icon={{
				default: 'shield',
				material: 'md-edit'
			}}/>
		)}
	</div>
</Page> -->