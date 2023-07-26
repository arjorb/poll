<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import AddNewPollForm from "./components/addNewPollForm.svelte";
  import Tabs from "./components/shared/Tabs.svelte";


  const items =  ['Current Polls', 'Add New Polls'];
  let activeItem = 'Current Polls';
  let  polls = [{question: 'Pyton or JavaScript', answerA: 'JavaScript', answerB: 'Pyton', voteA:10, voteB:10, id: 1}]


  const  handleTabs  = (e) =>{
	activeItem = e.detail
  }

  const handleAddNewPool = (e) =>{
	polls = [e.detail,  ...polls]
	console.log('From App Component:',polls)
  }
</script>

<Header/>
<main>
	<Tabs {items} {activeItem} on:changeTab={handleTabs}/>
	{#if activeItem  === 'Current Polls'}
	<p>This is a page of the Current Pools</p>
	{:else if activeItem === 'Add New Polls'}
	<AddNewPollForm on:add={handleAddNewPool}/>
	{/if}
</main>
<Footer/>
<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>