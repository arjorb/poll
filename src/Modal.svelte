<script>
    export let message = 'I am a Modal'
    export let isPromo  = false;
</script>
<main>
    <div on:click|self class="backdrop">
        <div class="modal" class:promo={isPromo}>{message}</div>
    </div>
</main>
<style>
    .backdrop{
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
    }
    .modal{
        background-color: white;
        width: 500px;
        margin: 50px auto;
        padding: 30px 70px;
        border-radius: 10px;
    }
    .promo{
        background-color: rgb(9, 75, 91);
        color: white;
    }
</style>