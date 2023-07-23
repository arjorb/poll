<script>
	import Modal from "./Modal.svelte";
	let name =  "John";
	let newColor = '';
	let showModal = false;

	let people = [{name:'John',age:11, id:1},{name:'Aldo',age:1, id:2},{name:'Aline',age:2, id:3},{name:'Nkaka',age:1}]

	const  handleName = ()  =>{
		name = "Arjo"
	}

	const handleColor  = (e) =>{
		newColor = e.target.value
	}

	const handleDelete = (id) =>{
		people = people.filter(person => person.id !== id);
	}

	const handlePromo = () => {
		showModal = !showModal
	}
</script>

<main>
	{#if showModal}
	<Modal message='This is a promotion that we are offfering' isPromo={true} on:click={handlePromo}/>
	{/if}
	<h1 style="color:{newColor}">Hello {name}!</h1>
	<button on:click|once={handlePromo}>Promotion is Here</button>
	<p>{newColor}</p>
	<input type="text" bind:value={newColor}>

	{#each people as person }
		<h1 style="color:{newColor}">{person.name}</h1>
		{#if person.age > 10}
		<p>Allowed to drink Juice</p>
		{/if}
		<h1 style="color:{newColor}">{person.age}</h1>
		<button on:click={()=>handleDelete(person.id)}>Delete</button>
		{:else}
		<p>There is no any person today</p>
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