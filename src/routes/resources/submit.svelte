<script lang="ts">
	import FileDragNDrop from '$lib/components/FileDragNDrop.svelte';
	import { field } from 'svelte-forms';

	const title = field<string>('title', '', []);
	const date = field<string>('date', '', []);
	const publisher = field<string>('publisher', '', []);
	const info = field<string>('info', '', []);
	const name = field<string>('name', '', []);
	const email = field<string>('email', '', []);
</script>

<div class="resource-submit-page page">
	<div class="content">
		<div class="content-left">
			<h1 class="text-h1 text-orange">Submit a resource</h1>
			<p>
				We’ve built this mini-library of case studies and resources as a ﬁrst step toward creating a
				publically available and easily discoverable repository of knowledge for the wider social
				sector.
			</p>
			<p>
				This is a place where anyone can add any resource - a website, article, recording, report,
				etc. - that will help others understand how to create a participatory strategic process
			</p>
			<form class="resource-form" novalidate>
				<div class="input-group">
					<label for="title">Title of the work</label>
					<input id="title" class="mt-1" type="text" placeholder="Title" />
				</div>
				<div class="input-group mt-3">
					<label for="title">Publication date</label>
					<input id="title" class="mt-1" type="text" placeholder="Date" />
				</div>
				<div class="input-group mt-3">
					<label for="title">Publisher name</label>
					<input id="title" class="mt-1" type="text" placeholder="Publisher" />
				</div>
				<div class="input-group mt-3">
					<label for="title">Additional Information</label>
					<textarea id="title" class="mt-1" rows="6" type="text" placeholder="Information" />
				</div>
				<div class="input-group mt-3">
					<label for="title">Your name</label>
					<input id="title" class="mt-1" type="text" placeholder="Name" />
				</div>
				<div class="input-group mt-3">
					<label for="title">Your email address</label>
					<input id="title" class="mt-1" type="text" placeholder="Name" />
				</div>
			</form>
		</div>
		<div class="content-right">
			<div class="drag-n-drop">
				<FileDragNDrop />
			</div>
			<button class="btn btn-blue mt-auto mb-2">Submit</button>
		</div>
	</div>
</div>

<style scoped>
	.resource-submit-page {
		padding: 3rem;
		min-height: 100vh;
	}
	.resource-submit-page .content {
		margin-top: 6rem;
		display: flex;
	}

	.resource-submit-page .content .content-left {
		width: 60%;
		margin-right: 4rem;
	}

	.resource-submit-page .content .content-right {
		width: 40%;
		display: flex;
		flex-direction: column;
	}

	.resource-submit-page .content .content-right .btn-blue {
		background-color: #14182d;
		color: var(--theme-green);
		max-width: 150px;
	}

	.resource-submit-page .content .content-right .drag-n-drop {
		max-width: 350px;
	}

	.resource-submit-page .content .content-left .resource-form {
		margin-top: 2rem;
	}
</style>
