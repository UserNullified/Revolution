<script>
	import Emoji from './Emoji.svelte';
	import Logo from './Logo.svelte';
	import TitlebarButton from './TitlebarButton.svelte';

	export let profileList = [];
</script>

<div class="app-mount">
	<div class="titlebar">
		<Logo></Logo>
		<TitlebarButton type="minimize"></TitlebarButton>
		<TitlebarButton type="maximize"></TitlebarButton>
		<TitlebarButton type="close"></TitlebarButton>
	</div>
	<div class="app">
		<div class="navbar"></div>
		{#if profileList.length == 0}
			<div class="sidebar sidebar-empty">
				<div class="no-profile-container">
					<Emoji></Emoji>
					<div class="no-profile-description">Nothing here yet!<br>Add a profile with the button in the top left corner.</div>
				</div>
			</div>
		{:else}
			<div class="sidebar">
				{#each profileList as profile}
					<div class="profile" id="{profile.id}">
						<div class="profile-title">{profile.name.length > 13 ? profile.name.substring(0, 8) + "..." : profile.name}</div>
						<div class="profile-description">
							<div class="profile-time">{profile.playTime}</div>
							<div class="profile-type">{profile.type}</div>
							<div class="profile-version">{profile.version}</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
		<div class="mainbar"></div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap');

	:root {
		--background-color-dark-1: hsl(0, 0%, 11.5%);
		--background-color-dark-2: hsl(0, 0%, 17.5%);
		--background-color-dark-3: hsl(0, 0%, 22.5%);

		--scrollbar-color-thumb: #202225;

		--error: hsl(12, 65%, 54%);
		--warning: rgb(217, 171, 49);
		--success: hsl(80, 60%, 50%);
	}

	* {
		font-family: "Nunito", sans-serif;
		overflow: hidden;
	}

	::-webkit-scrollbar {
    	width: 8px;
	}

	::-webkit-scrollbar-track {
		background: none;
	}

	::-webkit-scrollbar-thumb {
		background: hsl(0, 0%, 12.5%);
	}

	::-webkit-scrollbar-thumb:hover {
		background: hsl(0, 0%, 14.5%);
	}

	.app-mount {
		position: absolute;

		top: 0;
		left: 0;

		width: 100%;
		height: 100%;
	}

	.titlebar {
		width: 100%;
		height: 18px;

		background-color: var(--background-color-dark-1);

		display: flex;
	}

	.app {
		height: calc(100% - 18px);

		flex-grow: 1;

		display: flex;
	}

	.navbar {
		width: 64px;

		flex-grow: 0;

		background-color: var(--background-color-dark-1);
	}

	.sidebar {
		width: 256px;

		flex-grow: 0;

		background-color: var(--background-color-dark-2);

		overflow-y: scroll;
	}

	.profile {
		border-radius: 4px;

		margin: 8px 8px 0px 8px;

		display: flex;
		flex-direction: column;

		color: gray;

		transition: 0.05s ease-in;

		user-select: none;
		cursor: pointer;
	}

	.profile:hover {
		background-color: var(--background-color-dark-3);
		color: white;
	}

	.profile-title {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 64px;

		flex-grow: 1;

		font-size: 32px;
		text-align: center;
	}

	.profile-description {
		margin-bottom: 8px;

		width: 100%;

		flex-grow: 0;

		display: flex;
	}

	.profile-time {
		margin-left: 8px;
		margin-right: auto;
	}

	.profile-version {
		margin-right: 8px;
		margin-left: auto;
	}

	.sidebar-empty {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.no-profile-container {
		width: 256px;
		height: 256px;

		display: flex;
		flex-direction: column;
	}

	.no-profile-description {
		margin: 0px 16px;

		height: 64px;

		flex-grow: 0;

		display: flex;
		justify-content: center;
		align-items: center;

		text-align: center;
		color: #ffffff99;
	}

	.mainbar {
		flex-grow: 1;

		background-color: var(--background-color-dark-3);
	}
</style>