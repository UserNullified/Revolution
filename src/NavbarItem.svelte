<script>
    export let type;
</script>

<style>
    .navbar-item {
        height: 64px;
        width: 64px;
        cursor: pointer;
    }

    .navbar-add {
        margin-bottom: auto;
    }
</style>

<div class="{type == "add" ? "navbar-item navbar-add" : "navbar-item"}">
    {#if type == "add"}
        <svg class="svg-inline--fa fa-plus fa-w-14" aria-hidden="true" data-icon="plus" data-prefix="fas" focusable="false" role="img" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="m45.714 28.571h-10.286v-10.286c0-1.2622-1.0236-2.2857-2.2857-2.2857h-2.2857c-1.2622 0-2.2857 1.0236-2.2857 2.2857v10.286h-10.286c-1.2622 0-2.2857 1.0236-2.2857 2.2857v2.2857c0 1.2622 1.0236 2.2857 2.2857 2.2857h10.286v10.286c0 1.2622 1.0236 2.2857 2.2857 2.2857h2.2857c1.2622 0 2.2857-1.0236 2.2857-2.2857v-10.286h10.286c1.2622 0 2.2857-1.0236 2.2857-2.2857v-2.2857c0-1.2622-1.0236-2.2857-2.2857-2.2857z" fill="#fff" stroke-width=".071429"/>
        </svg>
    {:else if type == "login"}
        <svg class="svg-inline--fa fa-sign-in-alt fa-w-16" aria-hidden="true" data-icon="sign-in-alt" data-prefix="fas" focusable="false" role="img" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="m42 43.749h-5.25c-0.4125 0-0.75-0.3375-0.75-0.75v-2.5c0-0.4125 0.3375-0.75 0.75-0.75h5.25c1.1062 0 2-0.89375 2-2v-12c0-1.1062-0.89375-2-2-2h-5.25c-0.4125 0-0.75-0.3375-0.75-0.75v-2.5c0-0.4125 0.3375-0.75 0.75-0.75h5.25c3.3125 0 6 2.6875 6 6v12c0 3.3125-2.6875 6-6 6zm-2.9375-12.562-10.5-10.5c-0.9375-0.9375-2.5625-0.28125-2.5625 1.0625v6h-8.5c-0.83125 0-1.5 0.66875-1.5 1.5v6c0 0.83125 0.66875 1.5 1.5 1.5h8.5v6c0 1.3438 1.625 2 2.5625 1.0625l10.5-10.5c0.58125-0.5875 0.58125-1.5375 0-2.125z" fill="#fff" stroke-width=".0625"/>
        </svg>
    {:else if type == "account"}
        <svg class="svg-inline--fa fa-user fa-w-14" aria-hidden="true" data-icon="user" data-prefix="fas" focusable="false" role="img" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="m32 32c4.5037 0 8.1538-3.6501 8.1538-8.1538s-3.6501-8.1538-8.1538-8.1538-8.1538 3.6501-8.1538 8.1538 3.6501 8.1538 8.1538 8.1538zm5.7077 2.0385h-1.0638c-1.4142 0.64976-2.9876 1.0192-4.6439 1.0192s-3.2233-0.36947-4.6439-1.0192h-1.0638c-4.7267 0-8.5615 3.8349-8.5615 8.5615v2.65c0 1.6881 1.3696 3.0577 3.0577 3.0577h22.423c1.6881 0 3.0577-1.3696 3.0577-3.0577v-2.65c0-4.7267-3.8349-8.5615-8.5615-8.5615z" fill="#fff" stroke-width=".063702"/>
        </svg>
    {:else if type == "extra"}
        <svg class="svg-inline--fa fa-ellipsis-h fa-w-16" aria-hidden="true" data-icon="ellipsis-h" data-prefix="fas" focusable="false" role="img" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="m35.983 32c0 2.2015-1.7811 3.9826-3.9826 3.9826s-3.9826-1.7811-3.9826-3.9826 1.7811-3.9826 3.9826-3.9826 3.9826 1.7811 3.9826 3.9826zm5.7527-3.9826c-2.2015 0-3.9826 1.7811-3.9826 3.9826s1.7811 3.9826 3.9826 3.9826c2.2015 0 3.9826-1.7811 3.9826-3.9826s-1.7811-3.9826-3.9826-3.9826zm-19.471 0c-2.2015 0-3.9826 1.7811-3.9826 3.9826s1.7811 3.9826 3.9826 3.9826c2.2015 0 3.9826-1.7811 3.9826-3.9826s-1.7811-3.9826-3.9826-3.9826z" fill="#fff" stroke-width=".055314"/>
        </svg>
    {:else}
    <!--Wrong Navbar Item Type!-->
    {/if}
</div>