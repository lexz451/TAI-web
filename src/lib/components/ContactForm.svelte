<script lang="ts">
	import ContactFormBrands from '$lib/assets/images/brands/contact-form-brands.png';
</script>

<form class="contact-form">
	<span class="fw-bold text-dark mr-auto text-underline">About this project</span>
	<p class="text-gray">
		Many struggle to imagine how to bring elements of participation and power-sharing into the
		design of their strategies, both institutionally and programmatically.
	</p>

	<p class="text-gray">
		The Transparency and Accountability Initative (TAI) has built this library to illuminate what is
		(and isn't) a participatory strategy and describe how funders and nonproﬁts have designed and
		executed their participatory strategic processes.
	</p>
	<br />
	<p class="fw-bold">
		If you have any questions or comments, please feel free to write to us at
		<a href="mailto:contact@transparency-initatve.org">contact@transparency-initative.org</a>
		or reach out through this contact form.
	</p>

	<input class="form-control" type="text" name="name" placeholder="Name" />
	<input class="form-control" type="email" name="email" placeholder="Email" />
	<textarea class="form-control" name="message" id="message-input" rows="3" placeholder="Message" />

	<small class="text-sm text-red mb-4"
		>Thank you! Your message has been submitted. Someone from TAI will be in contact with you soon.</small
	>
	<small class="fw-bold mr-auto mt-4">This project was built by</small>
	<img class="mt-4" src={ContactFormBrands} alt="Brand images" />
</form>

<style>
	.contact-form {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		background-color: #f6f6f6;
	}
</style>
