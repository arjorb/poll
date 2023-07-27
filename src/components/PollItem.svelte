<script>
  import PollStore from '../store/PollStore';
  import Button from './shared/Button.svelte';
  import Card from './shared/Card.svelte';

  export let poll;

  $: totalVotes = poll.voteA + poll.voteB;
  $: percentA = Math.floor((100 / totalVotes) * poll.voteA) || 0;
  $: percentB = Math.floor((100 / totalVotes) * poll.voteB) || 0;

  const handleVote = (option, id) => {
    PollStore.update(currentPolls => {
      const newVotes = [...currentPolls];
      const selectedPoll = newVotes.find(poll => poll.id == id);
      if (option === 'a') {
        selectedPoll.voteA++;
      }
      if (option === 'b') {
        selectedPoll.voteB++;
      }
      return newVotes;
    });
  };

  const handleDelete = id => {
    PollStore.update(currentPolls => {
      const newPolls = currentPolls.filter(poll => poll.id !== id);
      return newPolls;
    });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={() => handleVote('a', poll.id)}>
      <div class="percent percent-a" style="width: {percentA}%;" />
      <span>{poll.answerA} ({poll.voteA})</span>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={() => handleVote('b', poll.id)}>
      <div class="percent percent-b" style="width: {percentB}%;" />
      <span>{poll.answerB} ({poll.voteB})</span>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => handleDelete(poll.id)} class="delete">
      <Button>Delete</Button>
    </div>
  </div>
</Card>

<style>
  h3 {
    color: #555;
    margin: 0 auto;
  }
  p {
    margin-top: 6;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background-color: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    border-left: 4px solid rgb(245, 0, 0);
    background-color: rgba(217, 27, 66, 0.2);
  }
  .percent-b {
    border-left: 4px solid rgb(0, 190, 108);
    background-color: rgba(69, 196, 150, 0.2);
  }
</style>
