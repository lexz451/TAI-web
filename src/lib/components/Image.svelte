<script lang="ts">

    const API_URL = import.meta.env.VITE_API_URL;

    export let image: any;
    export let classes: string;
    export let width: any;
</script>

<img class={classes} width={width} src={`${API_URL}${image?.url}`} alt={image?.alternativeText || image?.name} type={image?.ext}>