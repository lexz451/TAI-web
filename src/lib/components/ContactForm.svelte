<script lang="ts">
	import ContactFormBrands from '$lib/assets/images/brands/contact-form-brands.png';
</script>

<form class="bg-surface h-100 d-flex flex-column p-5">
	<h3 class="font-bold text-dark mr-auto">About this project</h3>
	<p class="text-dark">
		Many struggle to imagine how to bring elements of participation and power-sharing into the
		design of their strategies, both institutionally and programmatically.
	</p>

	<p class="text-dark mb-4">
		The Transparency and Accountability Initative (TAI) has built this library to illuminate what is
		(and isn't) a participatory strategy and describe how funders and nonproﬁts have designed and
		executed their participatory strategic processes.
	</p>
	<br />
	<small class="text-small mb-4">
		If you have any questions or comments, please feel free to write to us at
		<a href="mailto:contact@transparency-initatve.org" class="text-orange"
			>contact@transparency-initative.org</a
		>
		or reach out through this contact form.
	</small>

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
		>Thank you! Your message has been submitted. Someone from TAI will be in contact with you soon.</small
	>
	<small class="font-bold text-dark mr-auto mt-4">This project was built by</small>
	<img class="mt-4" src={ContactFormBrands} alt="Brand images" />
</form>

<style>
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
</style>
