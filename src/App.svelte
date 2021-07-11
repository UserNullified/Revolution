<script>
	import Emoji from './Emoji.svelte';
	import Logo from './Logo.svelte';
import NavbarItem from './NavbarItem.svelte';
	import TitlebarButton from './TitlebarButton.svelte';

	export let accounts = [];

	export let profileList = [];

	export let filteredProfileList = []

	export let search = '';
	$: {
		if(search.length != 0) {
			let searchFilter = {
				name: '',
				type: '',
				version: ''
			};

			let lowercaseSearch = search.toLowerCase();
			let trimmedSearch = lowercaseSearch.replace(/ /g, '');
			let splitSearch = trimmedSearch.split(';');

			splitSearch.forEach((part) => {
				if(part.startsWith('type:')) {
					searchFilter.type = part.replace('type:', '');
				} else if(part.startsWith('version:')) {
					searchFilter.version = part.replace('version:', '');
				} else if(part.length != 0){
					searchFilter.name = part;
				}
			});

			let candidates = profileList;

			if(searchFilter.name.length != 0) {
				candidates = candidates.filter(profile => {
					if(profile.name.toLowerCase().replace(/ /g, '').indexOf(searchFilter.name) != -1) {
						return profile;
					}
				});
			}


			if(searchFilter.type.length != 0) {
				candidates = candidates.filter(profile => {
					if(profile.type.toLowerCase().replace(/ /g, '').indexOf(searchFilter.type) != -1) {
						return profile;
					}
				})
			}
			
			if(searchFilter.version.length != 0) {
				candidates = candidates.filter(profile => {
					if(profile.version.toLowerCase().replace(/ /g, '').indexOf(searchFilter.version) != -1) {
						return profile;
					}
				})
			}

			filteredProfileList = candidates;
		}

	}
</script>

<div class="app-mount">
	<div class="titlebar">
		<Logo></Logo>
		<TitlebarButton type="minimize"></TitlebarButton>
		<TitlebarButton type="maximize"></TitlebarButton>
		<TitlebarButton type="close"></TitlebarButton>
	</div>

	<div class="app">

		<div class="navbar">
			<NavbarItem type="add"></NavbarItem>
			{#if accounts.length == 0}
				<NavbarItem type="login"></NavbarItem>
			{:else}
				<NavbarItem type="account"></NavbarItem>
			{/if}
			<NavbarItem type="extra"></NavbarItem>
		</div>

		<div class="sidebar-container">
			<div class="searchbar">
				<input type="text" autocomplete="off" placeholder="Search..." bind:value="{search}">
			</div>
			<div class="separator"></div>
			{#if profileList.length == 0}
				<div class="sidebar sidebar-empty">
					<div class="no-profile-container">
						<Emoji></Emoji>
						<div class="no-profile-description">Nothing here yet!<br>Add a profile with the button in the top left corner.</div>
					</div>
				</div>
			{:else if search.length != 0 && filteredProfileList.length != 0}
				<div class="sidebar">
					{#each filteredProfileList as profile}
						<div class="profile" id="{profile.id}">
							<div class="profile-title">{profile.name.length > 14 ? profile.name.substring(0, 8) + "..." : profile.name}</div>
							<div class="profile-description">
								<div class="profile-time">{profile.playTime}</div>
								<div class="profile-type">{profile.type}</div>
								<div class="profile-version">{profile.version}</div>
							</div>
						</div>
					{/each}
				</div>
			{:else if search.length != 0 && filteredProfileList.length == 0}
				<div class="sidebar sidebar-empty">
					<div class="no-profile-container">
						<Emoji></Emoji>
						<div class="no-profile-description">Seems like your search returned nothing!<br>Try searching for something else.</div>
					</div>
				</div>
			{:else}
				<div class="sidebar">
					{#each profileList as profile}
						<div class="profile" id="{profile.id}">
							<div class="profile-title">{profile.name.length > 14 ? profile.name.substring(0, 8) + "..." : profile.name}</div>
							<div class="profile-description">
								<div class="profile-time">{profile.playTime}</div>
								<div class="profile-type">{profile.type}</div>
								<div class="profile-version">{profile.version}</div>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>

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

		display: flex;
		flex-direction: column;
	}

	.sidebar-container {
		width: 256px;

		flex-grow: 0;

		display: flex;
		flex-direction: column;
	}

	.searchbar {
		height: 64px;
		display: flex;
		justify-content: center;
		align-items: center;

		background-color: var(--background-color-dark-2);
	}

	.searchbar input {
		height: 36px;
		width: 90%;
		margin: 0;
		background-color: var(--background-color-dark-1);
		border: none;
		color: white;
		border-radius: 8px;
	}

	.separator {
		width: 100%;
		height: 2px;
		background-color: var(--background-color-dark-1);
	}

	.sidebar {
		flex-grow: 1;

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

		height: 96px;

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