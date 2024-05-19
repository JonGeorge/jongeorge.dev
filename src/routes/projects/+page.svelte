<script>

    export let data;


</script>

<div class="content">
    <!--{JSON.stringify(data)}-->

    <h1>Projects</h1>

    {#each data.projectSummaries as project}
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">{project.title}</p>
            </header>

            <div class="card-content">
                <div class="content">
                    {project.description}
                    <br/>
                    {project.date}
                </div>
            </div>

            <footer class="card-footer">
<!--                <a href={project.uri} class="card-footer-item">Ask a question</a>-->
<!--                <a href={project.uri} class="card-footer-item">See the live site</a>-->
                <a href={project.uri} class="card-footer-item">Read more</a>
            </footer>
        </div>
    {/each}

</div>

<style>
    h1 {
        margin-bottom: 1.5rem;
    }
</style>