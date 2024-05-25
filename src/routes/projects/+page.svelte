<script>
    import Projects from "$lib/Projects.svelte";

    export let data;
</script>

<div class="content">
    <h1>Projects</h1>
    <Projects projects={data.projectSummaries}/>
</div>

<style>
    h1 {
        margin-bottom: 1.5rem;
    }
</style>