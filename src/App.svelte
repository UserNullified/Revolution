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
		--background-color-dark-1: hsl(0, 0%, 11%);
		--background-color-dark-2: hsl(0, 0%, 12.5%);
		--background-color-dark-3: hsl(0, 0%, 17.5%);
		--background-color-dark-4: hsl(0, 0%, 22.5%);
		--background-color-dark-5: hsl(0, 0%, 25%);

		--error: hsl(12, 65%, 54%);
		--warning: rgb(217, 171, 49);
		--success: hsl(80, 60%, 50%);
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
		background-color: var(--background-color-dark-1);
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
		background-color: var(--background-color-dark-1);
		width: 64px;
		height: 100%;
		display: flex;
	}

	.navbar-item {
		width: 64px;
		height: 64px;
	}

	.sidebar-container {
		background-color: var(--background-color-dark-2);
		width: 256px;
		height: 100%;
	}

	.mainbar {
		background-color: var(--background-color-dark-3);
		flex-grow: 1;
		height: 100%;
	}
</style>