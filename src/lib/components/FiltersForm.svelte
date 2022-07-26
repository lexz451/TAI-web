<script lang="ts">
	import ContactFormBrands from '$lib/assets/images/brands/contact-form-brands.png';
	import IconDoc from '$lib/assets/icons/doc.svg?component';
	import IconVideo from '$lib/assets/icons/video.svg?component';

	let resourceType = 'text';
</script>

<form class="h-100 d-flex flex-column">
	<div class="d-flex flex-column bg-white p-5">
		<div class="d-flex">
			<div class="w-50 d-flex align-center mr-4">
				<IconDoc width="20" />
				<button
					type="button"
					class="selection-btn ml-3"
					class:selected={resourceType == 'text'}
					on:click={() => (resourceType = 'text')}>TEXTO</button
				>
			</div>
			<div class="w-50 d-flex align-center">
				<IconVideo width="24" />
				<button
					class="selection-btn ml-3"
					type="button"
					class:selected={resourceType == 'video'}
					on:click={() => (resourceType = 'video')}>VIDEO</button
				>
			</div>
		</div>
		<div class="d-flex mt-5">
			<div class="filters mr-4">
				<small class="font-bold">FILTERS</small>
				<input class="mt-3 bg-surface" type="text" placeholder="Date" />
				<select name="" id="" class="mt-2 bg-surface">
					<option default>Author</option>
					<option>Author 1</option>
					<option>Author 2</option>
					<option>Author 3</option>
				</select>
			</div>
			<div class="sort">
				<small class="font-bold">SORT BY</small>
				<select name="" id="" class="mt-3 bg-surface">
					<option>Relevance</option>
					<option>Latest</option>
					<option>Oldest</option>
				</select>
			</div>
		</div>
	</div>
	<div class="contact d-flex flex-column bg-surface p-5">
		<small class="text-bold mb-2">CONTACT US</small>
		<input class="form-control" type="text" name="name" placeholder="Name" />
		<input class="form-control" type="email" name="email" placeholder="Email" />
		<div class="message-control">
			<img class="send-btn" src="$lib/assets/icons/send.png" alt="Send" />
			<textarea
				class="form-control"
				name="message"
				id="message-input"
				rows="3"
				placeholder="Message"
			/>
		</div>

		<small class="text-small font-light text-danger mb-4"
			>Thank you! Your message has been submitted. Someone from TAI will be in contact with you
			soon.</small
		>
		<small class="font-bold text-dark mr-auto mt-4">This project was built by</small>
		<img class="mt-4" src={ContactFormBrands} alt="Brand images" />
	</div>
</form>

<style scoped>
	.selection-btn {
		appearance: none;
		border: none;
		outline: none;
		background-color: var(--theme-surface);
		border-radius: 5px;
		padding: 0.65rem 1rem;
		width: 100%;
		cursor: pointer;
		font-weight: 700;
	}

	.selection-btn.selected {
		background-color: var(--theme-orange);
	}

	.message-control {
		position: relative;
	}
	.message-control .send-btn {
		position: absolute;
		bottom: 16px;
		right: 12px;
		cursor: pointer;
		transition: all 0.1s ease;
		image-rendering: optimizeQuality;
	}

	.filters {
		width: 60%;
	}

	.sort {
		width: 40%;
	}

	.contact {
		flex-grow: 1;
	}
</style>
