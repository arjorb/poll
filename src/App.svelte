<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Tabs from "./components/shared/Tabs.svelte";

  const items =  ['Current Polls', 'Add New Polls'];
  let activeItem = 'Current Polls';


  const  handleTabs  = (e) =>{
	activeItem = e.detail
  }
</script>

<Header/>
<main>
	<Tabs {items} {activeItem} on:changeTab={handleTabs}/>
</main>
<Footer/>
<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>