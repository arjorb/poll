<script>
  import PollItem from './PollItem.svelte';

  export let polls = [];
</script>

<main>
  {#each polls as poll (poll.id)}
    <PollItem {poll} />
  {/each}
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
