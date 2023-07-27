<script>
  import { fade, slide, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import PollStore from '../store/PollStore';
  import PollItem from './PollItem.svelte';
</script>

<main>
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollItem {poll} />
    </div>
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
