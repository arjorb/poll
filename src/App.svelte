<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Tabs from "./components/shared/Tabs.svelte";

  const items =  ['Current Polls', 'Add New Polls'];
  const ActiveItem = 'Current Polls';

</script>

<Header/>
<main>
	<Tabs {items} {ActiveItem}/>
</main>
<Footer/>
<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>