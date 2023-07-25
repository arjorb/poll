<script>
    export let items  =  [];
    export let ActiveItem;
</script>
<main>
    {#each items as item }
        <ul>
            <li>
                <div class:active={item === ActiveItem}> {item}</div>
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
    .active{
        color: orange;
        text-decoration: underline;
    }
</style>