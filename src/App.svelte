<script>
  import Footer from './components/Footer.svelte';
  import Header from './components/Header.svelte';
  import PollList from './components/PollList.svelte';
  import AddNewPollForm from './components/addNewPollForm.svelte';
  import Tabs from './components/shared/Tabs.svelte';

  const items = ['Current Polls', 'Add New Polls'];
  let activeItem = 'Current Polls';

  const handleTabs = e => {
    activeItem = e.detail;
  };

  const handleAddNewPool = e => {
    activeItem = 'Current Polls';
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:changeTab={handleTabs} />
  {#if activeItem === 'Current Polls'}
    <PollList />
  {:else if activeItem === 'Add New Polls'}
    <AddNewPollForm on:add={handleAddNewPool} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
