<script>
  import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()
    export let items  =  [];
    export let activeItem;
</script>
<main>
    {#each items as item }
        <ul>
            <li>
                <div class:active={item === activeItem} on:click={()=>dispatch('changeTab', item)}> {item}</div>
            </li>
        </ul>
    {/each}
</main>
<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul{
        list-style: none
    }
    li{
           font-size: 20px;
           cursor: pointer;
        }
    .active{
        color: orange;
        text-decoration: underline;
    }
</style>