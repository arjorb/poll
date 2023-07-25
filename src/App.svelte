<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import AddNewPollForm from "./components/addNewPollForm.svelte";
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
	{#if activeItem  === 'Current Polls'}
	<p>This is a page of the Current Pools</p>
	{:else if activeItem === 'Add New Polls'}
	<AddNewPollForm/>
	{/if}
</main>
<Footer/>
<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>