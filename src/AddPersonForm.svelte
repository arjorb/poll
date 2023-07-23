<script>
  import { createEventDispatcher } from "svelte/types/runtime/internal/lifecycle";

    const dispatch  = createEventDispatcher();
    let name;
    let age;

    const handleForm = () =>{
        const person = {
            name,
            age,
            id: Math.random()
        }
        dispatch("addPerson", person);
    }
</script>
<main>
    <form on:submit|preventDefault={handleForm}>
        <input type="text" placeholder="Enter the name" bind:value={name}>
        <input type="number" placeholder="Enter the ages" bind:value={age}>
        <button>Add Person</button>
    </form>
</main>
<style></style>