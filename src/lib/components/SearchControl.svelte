<div class="search-control">
	<input type="search" placeholder="Keywords" />
	<div class="search-control-filters">
		<img src="$lib/assets/icons/filters.png" alt="" />
	</div>
	<div class="search-control-menu" />
</div>

<style lang="scss">
	.search-control {
		width: 100%;
		display: block;
		background-color: rgba(#e79e6a, 0.4);
		border-radius: 5px;
		position: relative;
		input {
			appearance: none;
			border: none;
			font-weight: 300;
			background-color: transparent;
			outline: none;
			padding: 0.65rem 1rem;
			font-style: italic;
			font-size: 14px;
			font-family: 'Lato', sans-serif;
			width: 100%;
			margin: 0;
			line-height: 1;
		}
		.search-control-filters {
			position: absolute;
			width: 24px;
			height: 24px;
			right: 10px;
			top: calc(100% - 31px);
			border-radius: 5px;
			cursor: pointer;
		}
	}
</style>
