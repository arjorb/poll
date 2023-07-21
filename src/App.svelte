<script>
let name =  "John";
let newColor = '';
const  handleName = ()  =>{
	name = "Arjo"
}

const handleColor  = (e) =>{
	newColor = e.target.value
}
</script>


<main>
	<h1 style={"color:"+newColor}>Hello {name}!</h1>
	<p>{newColor}</p>
	<input type="text" on:input={(e)=>handleColor(e)}  value={newColor}>
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