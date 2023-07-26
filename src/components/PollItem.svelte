<script>
  import { createEventDispatcher } from 'svelte';
  import Card from './shared/Card.svelte';

  export let poll;
  $: totalVotes = poll.voteA + poll.voteB;

  const dispatch = createEventDispatcher();
  const handleVote = (option, id) => {
    dispatch('vote', { option, id });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={() => handleVote('a', poll.id)}>
      <div class="percent percent-a" />
      <span>{poll.answerA} ({poll.voteA})</span>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={() => handleVote('b', poll.id)}>
      <div class="percent percent-b" />
      <span>{poll.answerB} ({poll.voteB})</span>
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
</style>
