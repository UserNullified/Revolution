<script>
import SVGIcon from "./SVGIcon.svelte";

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

<div class="{type == "addProfile" ? "navbar-item navbar-add" : "navbar-item"} id={"navbar-" + type}" on:click>
    {#if type == "addProfile"}
        <SVGIcon {type}/>
    {:else if type == "login"}
        <SVGIcon {type}/>
    {:else if type == "accountManager"}
        <SVGIcon {type}/>
    {:else if type == "extra"}
        <SVGIcon {type}/>
    {:else}
    <!--Wrong Navbar Item Type!-->
    {/if}
</div>