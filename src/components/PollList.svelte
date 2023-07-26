<script>
  export let polls = [];
</script>

<main>
  {#each polls as poll}
    <p>{poll.question}</p>
  {/each}
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
