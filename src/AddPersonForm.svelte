<script>
    let name;
    let age;

    const handleForm = () =>{
        console.log(`The name is ${name} and I'm ${age} years old`)
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