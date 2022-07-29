<script>
	import FilePond, { registerPlugin, supported } from 'svelte-filepond';
    import FilePondPluginFilePoster from 'filepond-plugin-file-poster';

    registerPlugin(FilePondPluginFilePoster);

	let pond;
	let name = 'filepond';

	function handleInit() {
		console.log('FilePond initialized');
	}

	/**
	 * @param {any} err
	 * @param {any} file
	 */
	function handleAddFile(err, file) {
		console.log('File added', file);
	}
</script>

<FilePond bind:this={pond} {name} oninit={handleInit} onaddfile={handleAddFile} allowMultiple={true}/>

