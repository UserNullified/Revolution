<script>

	import searchInput from './searchInput';
	import clickOutside from './clickOutside.js';

	import SVGIcon from './SVGIcon.svelte';
	import NavbarItem from './NavbarItem.svelte';
	import TitlebarButton from './TitlebarButton.svelte';

	export let accounts = [];

	export let profileList = [];

	export let filteredProfileList = [];

	export let search = '';
	$: {
		if(search) {
			filteredProfileList = searchInput(profileList, search);
		}
	}

	export let tabs = [];
	$: {
		tabs.forEach(id => {
			document.getElementById(id).style.zIndex = tabs.indexOf(id) + 1;
		})
	}

	function addTab(id) {
		if(tabs.indexOf(id) != -1) {
			tabs.splice(tabs.indexOf(id), 1);	
			tabs.push(id);
			tabs = tabs;
		} else {
			tabs.push(id);
			tabs = tabs;
		}
	}

	function removeTab(id) {
		tabs.splice(tabs.indexOf(id), 1)
	}

	let randomProfileData = {
		extras: ['Super ', 'Awesome ', 'Huge '],
		names: ['Vanilla', 'Forge', 'Fabric'],
		types: ['Vanilla', 'Forge', 'Fabric'],
		versions: ['1.16.5', '1.15.5', '1.14.5'],
		playTimes: ['1m', '1h 24m', '1d 2h']
	}

	function addRandomProfile() {
		let extra = '';
		for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
			extra += randomProfileData.extras[Math.floor(Math.random() * 3)]
		}

		let nameTypeIndex = Math.floor(Math.random() * 3);

		let profile = {
			name: extra + randomProfileData.names[nameTypeIndex],
			type: randomProfileData.types[nameTypeIndex],
			version: randomProfileData.versions[Math.floor(Math.random() * 3)],
			playTime: randomProfileData.playTimes[Math.floor(Math.random() * 3)]
		}

		profileList.push(profile)	
		profileList = profileList;
	}
	
	let x = 0;
	let y = 0;

	function isInViewport(el) {
		let box = el.getBoundingClientRect();
		if(box.bottom > window.innerHeight) {
			return (box.bottom - window.innerHeight) + 5;
		} else {
			return 0;
		}
	}

	function setContextMenuValues(e, id, filtered = false) {
		x = e.clientX;
		y = e.clientY;

		document.querySelector('.context-menu').style.display = 'flex';

		document.querySelector('.context-menu').style.left = `${x}px`;
		document.querySelector('.context-menu').style.top = `${y}px`;

		y -= isInViewport(document.querySelector('.context-menu'));

		document.querySelector('.context-menu').style.top = `${y}px`;

		if(!filtered) {
			document.querySelector('.context-menu-title').textContent = profileList[parseInt(id)].name.length < 64 ? profileList[parseInt(id)].name : profileList[parseInt(id)].name.substr(0, 61) + '...';
		} else {
			document.querySelector('.context-menu-title').textContent = filteredProfileList[parseInt(id)].name.length < 64 ? filteredProfileList[parseInt(id)].name : filteredProfileList[parseInt(id)].name.substr(0, 61) + '...';
		}
	}

	async function hideContextMenu() {
		document.querySelector('.context-menu').style.display = 'none';
	}
</script>

<div class="context-menu" id="context-menu" use:clickOutside on:click_outside={hideContextMenu}>
	<div class="context-menu-title" id="context-menu-title"></div>
	<div class="context-menu-button">
		<div class="context-menu-icon"><SVGIcon type="play"/></div>
		<div class="context-menu-text">Play</div>
	</div>
	<div class="context-menu-button">
		<div class="context-menu-icon"><SVGIcon type="folder"/></div>
		<div class="context-menu-text">Open Folder</div>
	</div>
	<div class="context-menu-button">
		<div class="context-menu-icon"><SVGIcon type="configure"/></div>
		<div class="context-menu-text">Configure</div>
	</div>
	<div class="context-menu-separator"></div>
	<div class="context-menu-button">
		<div class="context-menu-icon"><SVGIcon type="delete"/></div>
		<div class="context-menu-text">Delete</div>
	</div>
</div>

<div class="app-mount">
	
	<div class="titlebar">
		<div class="logo">
			<SVGIcon type="logo"/>
		</div>
		<TitlebarButton type="minimize"></TitlebarButton>
		<TitlebarButton type="maximize"></TitlebarButton>
		<TitlebarButton type="close"></TitlebarButton>
	</div>

	<div class="app">

		<div class="navbar">
			<!--on:click={() => {addTab('profileMaker')}}-->
			<NavbarItem type="addProfile" on:click={addRandomProfile}></NavbarItem>
			{#if accounts.length == 0}
				<NavbarItem type="login" on:click={() => {addTab('accountManager')}}></NavbarItem>
			{:else}
				<NavbarItem type="accountManager" on:click={() => {addTab('accountManager')}}></NavbarItem>
			{/if}
			<NavbarItem type="extra"></NavbarItem>
		</div>

		<div class="sidebar-container">

			<div class="searchbar">
				<input type="text" autocomplete="off" placeholder="Search..." spellcheck="false" bind:value="{search}">
			</div>

			<div class="separator"></div>

			{#if profileList.length == 0}

				<div class="sidebar sidebar-empty">
					<div class="no-profile-container">
						<SVGIcon type="no-profile-emoji"/>
						<div class="no-profile-description">Nothing here yet!<br>Add a profile with the button in the top left corner.</div>
					</div>
				</div>

			{:else if search.length != 0 && filteredProfileList.length != 0}

				<div class="sidebar">
					{#each filteredProfileList as profile}
						<div class="profile" id="{filteredProfileList.indexOf(profile)}" tabindex="0" on:contextmenu|preventDefault={(e) => { setContextMenuValues(e, filteredProfileList.indexOf(profile), true)}} on:click={() => {addTab('profileSettings')}}>
							<div class="profile-title">{profile.name.length > 12 ? profile.name.substr(0, 9) + "..." : profile.name}</div>
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
						<SVGIcon type="no-profile-emoji"/>
						<div class="no-profile-description">Seems like your search returned nothing!<br>Try searching for something else.</div>
					</div>
				</div>

			{:else}

				<div class="sidebar">
					{#each profileList as profile}
						<div class="profile" id="{profileList.indexOf(profile)}" tabindex="0" on:contextmenu|preventDefault={(e) => { setContextMenuValues(e, profileList.indexOf(profile))}}>
							<div class="profile-title">{profile.name.length > 12 ? profile.name.substr(0, 9) + "..." : profile.name}</div>
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

		<div class="mainbar mainbar-flex">
			<div class="initial" id="initial">
				<SVGIcon type="initial"/>
			</div>

			<div class="profile-maker" id="profileMaker"></div>
			<div class="accountManager" id="accountManager"></div>
			<div class="settings" id="settings"></div>
			<div class="profileSettings" id="profileSettings"></div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap');

	:root {
		--background-color-dark-1: #1d1d1d;
		--background-color-dark-2: #222222;
		--background-color-dark-3: #2d2d2d;
		--background-color-dark-4: #393939;
		--background-color-dark-5: hsl(0, 0%, 19%);

		--scrollbar-color-thumb: #202225;

		--error: #d65c3d;
		--warning: #d9ac30;
		--success: #99cc33;
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
		background: var(--background-color-dark-1);
	}

	::-webkit-scrollbar-thumb:hover {
		background: var(--background-color-dark-2);
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

		-webkit-app-region: drag;
	}

	.logo {
        height: 18px;
        width: 64px;
        margin-right: auto;
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

		background-color: var(--background-color-dark-3);
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

	.searchbar input:focus {
        outline: none !important;
        border: 2px solid aqua;
        border-radius: 8px;
    }

	.separator {
		width: 100%;
		height: 2px;
		background-color: var(--background-color-dark-1);
	}

	.sidebar {
		height: calc(100% - 66px);

		flex-grow: 1;

		background-color: var(--background-color-dark-3);

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

	.profile:last-child {
		margin-bottom: 8px;
	}

	.profile:hover {
		background-color: var(--background-color-dark-4);
		color: white;
	}

	.profile:focus {
		outline: none !important;
        border: 2px solid aqua;
        border-radius: 8px;
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

	.profile-description > div {
		text-align: center;
		width: 73px;
	}

	.profile-time {
		margin-left: 8px;
		margin-right: auto;
	}

	.profile-version {
		margin-right: 8px;
		margin-left: auto;
	}

	.context-menu {
		position: absolute;
		display: none;
		flex-direction: column;
		z-index: 1000;
		background-color: var(--background-color-dark-2);
		border-radius: 8px;
		box-shadow: black 0px 0px 15px
	}

	.context-menu-title {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 64px;
		font-size: 28px;
		padding: 0px 16px;	
		background-color: var(--background-color-dark-1);
		color: white;
		border-radius: 8px 8px 0px 0px;
	}

	.context-menu-button {
		height: 48px;
		min-width: 128px;
		background-color: var(--background-color-dark-2);
		color: white;
		cursor: pointer;
		display: flex;
		align-items: center;
		font-size: 18px;
	}

	.context-menu-button > div {
		margin-left: 8px;
	}

	.context-menu-text {
		margin-right: 20px;
	}

	.context-menu-button:hover {
		background-color: var(--background-color-dark-5);
	}

	.context-menu-button:last-child {
		border-radius: 0px 0px 8px 8px;
	}

	.context-menu-icon {
		width: 48px;
		height: 48px;
	}

	.context-menu-separator {
		background-color: var(--background-color-dark-1);
		height: 2px;
		flex-grow: 0;
		margin: 4px 0px
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
		position: relative; 

		flex-grow: 1;

		background-color: var(--background-color-dark-4);
	}

	.mainbar > div {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.initial {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 0 !important;
	}

	.profile-maker {
		background-color: var(--background-color-dark-3);
	}
</style>