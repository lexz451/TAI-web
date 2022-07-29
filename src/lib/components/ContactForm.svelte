<script lang="ts">
	import { field, form } from 'svelte-forms';
	import { required, email } from 'svelte-forms/validators';
	import ContactFormBrands from '$lib/assets/images/brands/contact-form-brands.png';
	//import { sendContactMessage as send } from '$lib/data/api';

	import SendGreenIcon from '$lib/assets/icons/send-green.png';
	import SendDangerIcon from '$lib/assets/icons/send-danger.png';

	const nameField = field<string>('name', '', [required()]);
	const emailField = field<string>('email', '', [required(), email()]);
	const messageField = field<string>('message', '', [required()]);

	const contactForm = form(nameField, emailField, messageField);

	let messageSent = false;

	/**
	 * Send contact message to api
	 * @param name
	 * @param email
	 * @param message
	 */
	const send = async (name: string, email: string, message: string) => {
		const API_URL = import.meta.env.VITE_API_URL;
		const res = await fetch(`${API_URL}/api/contact-messages/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			mode: 'cors',
			body: JSON.stringify({ data: { name, email, message } })
		});
		return await res.json();
	};

	const sendContactMessage = async () => {
		console.log('--- Sending message ---');
		await contactForm.validate();
		if ($contactForm.valid) {
			try {
				const { data } = await send($nameField.value, $emailField.value, $messageField.value);
				console.log(data);
				messageSent = true;
			} catch (e) {
				console.log('--- Error ---');
				console.error(e);
			}
		}
	};
</script>

<!-- svelte-ignore component-name-lowercase -->
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
		<a href="mailto:contact@transparency-initative.org" class="text-orange"
			>contact@transparency-initative.org</a
		>
		or reach out through this contact form.
	</small>

	<input
		class="form-control"
		bind:value={$nameField.value}
		type="text"
		name="name"
		placeholder="Name"
		class:invalid={$nameField.invalid}
	/>

	<input
		class="form-control"
		bind:value={$emailField.value}
		type="email"
		name="email"
		placeholder="Email"
		class:invalid={$emailField.invalid}
	/>

	<div class="message-control">
		<img
			class="send-btn"
			on:click={sendContactMessage}
			src={$messageField.invalid ? SendDangerIcon : SendGreenIcon}
			alt="Send"
		/>
		<textarea
			bind:value={$messageField.value}
			class:invalid={$messageField.invalid}
			class="form-control"
			name="message"
			id="message-input"
			rows="3"
			placeholder="Message"
		/>
	</div>

	{#each $contactForm.errors as e}
		<small class="text-small font-light text-danger mb-2">
			{#if e == 'name.required'}
				- Name is required
			{/if}
			{#if e == 'email.required'}
				- Email is required
			{/if}
			{#if e == 'email.not_an_email'}
				- Email is not a valid email address
			{/if}
			{#if e == 'message.required'}
				- Message is required
			{/if}
		</small>
	{/each}

	{#if messageSent}
		<small class="text-small font-bold text-orange mb-4"
			>Thank you! Your message has been submitted. Someone from TAI will be in contact with you
			soon.</small
		>
	{/if}

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
