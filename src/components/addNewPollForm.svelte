<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./shared/Button.svelte";


  
    const dispatch = createEventDispatcher();
    const fields = {
        question:'',
        answerA: '',
        answerB: '',
    }
    const errors =  {question:'', answerA: '', answerB: ''}
    let valid=false;

    const handleFields  = ()  => {
        valid = true;
        // Validate the question field
       if(fields.question.trim().length  <= 5){
        valid=false;
        errors.question='Please a question should be at least 5 characters long';
       }else{
        errors.question = '';
       }
   

    // Validate the answerA field
    if(fields.answerA.trim().length  < 1){
        valid=false;
        errors.answerA='Answer A cannot be empty';
       }else{
        errors.answerA = '';
       }

       // Validate the answerB field

       if(fields.answerB.trim().length  < 1){
        valid=false;
        errors.answerB='Answer B cannot be empty';
       }else{
        errors.answerB = '';
       }

       if(valid){
        const  pool = {...fields, voteA:0, voteB:0, id: Math.random()}
        dispatch('add',pool);
       }

    }

</script>
<main>
    <form on:submit|preventDefault={handleFields} action="">
        <div class="form-group">
            <input type="text" placeholder="Question" bind:value={fields.question}>
            <div class="error">{errors.question}</div>
        </div>
        
        <div class="form-group">
            <input type="text" placeholder="Answer A" bind:value={fields.answerA}>
            <div class="error">{errors.answerA}</div>
        </div>
        <div class="form-group">
            <input type="text" placeholder="Answer B"  bind:value={fields.answerB}>
            <div class="error">{errors.answerB}</div>
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
    .error{
        color: red;
        font-size: 11px;
    }
</style>