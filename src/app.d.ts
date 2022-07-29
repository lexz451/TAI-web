/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare module 'svelte-image';

declare module 'svelte-collapsible';

declare module 'svelte-progress-bar';

declare module 'svelte-filepond';

declare module '*.svg' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

declare module '*.svg?component' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

declare module '*.svg?src' {
	const content: string;
	export default content;
}

declare module '*.svg?url' {
	const content: string;
	export default content;
}

declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
