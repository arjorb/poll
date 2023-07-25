<script>
  import Button from "./shared/Button.svelte";

    
    const fields = {
        question:'',
        answerA: '',
        answerB: '',
    }

    const handleFields  = ()  => {
        console.log(fields)
    }
</script>
<main>
    <form on:submit|preventDefault={handleFields} action="">
        <div class="form-group">
            <input type="text" placeholder="Question" bind:value={fields.question}>
        </div>
        <div class="form-group">
            <input type="text" placeholder="Answer A" bind:value={fields.answerA}>
        </div>
        <div class="form-group">
            <input type="text" placeholder="Answer B"  bind:value={fields.answerB}>
        </div>
        <Button>Submit</Button>
    </form>
</main>
<style>
    form{
        width: 500px;
        margin: 0 auto;
    }
    .form-group{
        margin: 10px 0;
    }
    .form-group input{
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>