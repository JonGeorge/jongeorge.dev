<script>
    export let projects;
</script>
<div class="content">
    {#each projects as project}
        <div class="card mt-6 is-shadowless">
            <header class="card-header is-shadowless">
                <p class="card-header-title scroll-point-start">{project.title}</p>
            </header>

            <div class="card-content">
                {project.description}
                <br/>
                <br/>
                <div class="tag is-warning">
                    {project.role}
                </div> <div class="tag is-background-info-15">
                    Timeline: {project.duration}
                </div>
            </div>

            <footer class="card-footer">
                <a href={project.uri} class="card-footer-item">
                    Read more
                    <span class="icon">
                        <i class="fa-solid fa-angle-right"></i>
                    </span>
                </a>

            </footer>
        </div>
    {/each}
</div>

<style>
    .tag {
        font-family: sans-serif;
        font-weight: bold;
    }

    .card-content {
        padding-left: 17px;
        padding-right: 0;
    }

</style>