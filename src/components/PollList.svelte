<script>
  export let polls = [];
</script>

<main>
  {#each polls as poll}
    <p>{poll.question}</p>
  {/each}
</main>

<style></style>
