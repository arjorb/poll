<script>
  import Footer from './components/Footer.svelte';
  import Header from './components/Header.svelte';
  import PollList from './components/PollList.svelte';
  import AddNewPollForm from './components/addNewPollForm.svelte';
  import Tabs from './components/shared/Tabs.svelte';

  const items = ['Current Polls', 'Add New Polls'];
  let activeItem = 'Current Polls';
  let polls = [
    {
      question: 'Pyton or JavaScript',
      answerA: 'JavaScript',
      answerB: 'Pyton',
      voteA: 10,
      voteB: 15,
      id: 1,
    },
  ];

  const handleTabs = e => {
    activeItem = e.detail;
  };

  const handleAddNewPool = e => {
    polls = [e.detail, ...polls];
    console.log('From App Component:', polls);
    activeItem = 'Current Polls';
  };

  const handleVote = e => {
    const { option, id } = e.detail;
    const newVotes = [...polls];
    const selectedPoll = newVotes.find(poll => poll.id == id);
    if (option === 'a') {
      selectedPoll.voteA++;
    }
    if (option === 'b') {
      selectedPoll.voteB++;
    }
    polls = newVotes;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:changeTab={handleTabs} />
  {#if activeItem === 'Current Polls'}
    <PollList {polls} on:vote={handleVote} />
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
