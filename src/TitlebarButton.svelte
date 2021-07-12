<script>
import SvgIcon from "./SVGIcon.svelte";

    export let type;
</script>

<style>
    .titlebar-button {
        width: 32px;
        height: 18px;
        color: white;
        cursor: pointer;
        -webkit-app-region: no-drag;
    }

    .titlebar-button:hover {
        background-color: var(--background-color-dark-3);
    }

    .titlebar-button-close:hover {
        background-color: var(--error);
    }
</style>

{#if type == "close"}
    <div class="titlebar-button titlebar-button-close" id="titlebar-close">
        <SvgIcon type="close"/>
    </div>
{:else}
    <div class="titlebar-button" id="{type == "minimize" ? "titlebar-minimize" : "titlebar-maximize"}">
        {#if type == "minimize"}
            <SvgIcon type="minimize"/>
        {:else if type == "maximize"}
            <SvgIcon type="maximize"/>
        {/if}
    </div>
{/if}