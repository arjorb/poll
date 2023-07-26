<script>
  import PollItem from './PollItem.svelte';

  export let polls = [];
</script>

<main>
  {#each polls as poll (poll.id)}
    <PollItem {poll} on:vote />
  {/each}
</main>

<style>
  main {
    margin: 30px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
</style>
