<script>

</script>

<div class="main-container">
	<div class="titlebar"></div>
	<div class="app-container">
		<div class="navbar"></div>
		<div class="sidebar-container">
			<div class="sidebar"></div>
		</div>
		<div class="mainbar"></div>
	</div>
</div>

<style>
	:root {
		--background-dark-1: hsl(0, 0%, 10%);
		--background-dark-2: hsl(0, 0%, 15%);
		--background-dark-3: hsl(0, 0%, 20%);
	}
	
	.main-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.titlebar {
		background-color: var(--background-dark-1);
		width: 100%;
		height: 16px;
	}

	.app-container {
		flex-grow: 1;
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.navbar {
		background-color: var(--background-dark-1);
		width: 64px;
		height: 100%;
	}

	.sidebar-container {
		background-color: var(--background-dark-2);
		width: 256px;
		height: 100%;
	}

	.mainbar {
		background-color: var(--background-dark-3);
		flex-grow: 1;
		height: 100%;
	}
</style>