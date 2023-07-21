<script>
let name =  "John";
let newColor = '';

const people = [{name:'John',age:11},{name:'Aldo',age:1},{name:'Aline',age:2},{name:'Nkaka',age:1}]

const  handleName = ()  =>{
	name = "Arjo"
}

const handleColor  = (e) =>{
	newColor = e.target.value
}
</script>


<main>
	<h1 style="color:{newColor}">Hello {name}!</h1>
	<p>{newColor}</p>
	<input type="text" bind:value={newColor}>

	{#each people as person }
		<h1>{person.name}</h1>
		<h1>{person.age}</h1>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>