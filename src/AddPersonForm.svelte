<script>
    let name;
    let age;
    let beltLevel ;
    let skills =  []

    const handleForm = () =>{
        console.log(`The name is ${name} and I'm ${age} years old, I have a ${beltLevel}  belt`, skills, )
    }
</script>
<main>
    <form on:submit|preventDefault={handleForm}>
        <input type="text" placeholder="Enter the name" bind:value={name}>
        <input type="number" placeholder="Enter the ages" bind:value={age}>
        <label for="">Skills</label>
        <input type="checkbox" bind:group={skills} value="fighting"/> fighting <br>
        <input type="checkbox" bind:group={skills} value="sneaking"> sneaking <br>
        <input type="checkbox" bind:group={skills} value="running"> running <br>
        <label for="">Belt</label>
        <select bind:value={beltLevel}>
            <option value="black">black</option>
            <option value="marrow">marrow</option>
            <option value="white">white</option>
            <option value="orange">orange</option>
        </select>
        <button>Add Person</button>
    </form>
</main>
<style></style>