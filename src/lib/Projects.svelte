<script>
    export let projects;
</script>
<div class="content mt-6">
    {#each projects as project}
        <div class="card mt-6">
            <header class="card-header is-shadowless has-background-success-20">
                <p class="card-header-title has-text-success-100">{project.title}</p>
            </header>

            <div class="card-content">
                {project.description}
                <br/>
                <br/>
                <div class="tag is-warning has-text-weight-semibold">
                    {project.role}
                </div>
            </div>

            <footer class="card-footer">
                <a href={project.uri} class="card-footer-item">
                    Read more
                    <span class="icon">
                        <i class="fa-solid fa-angle-right"></i>
                    </span>
                </a>
                {#if (project.site)}
                    <a href={project.site} class="card-footer-item" target="_blank">
                        See the live project
                        <span class="icon pl-1" style="padding-bottom: 3px">
                            <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                        </span>
                    </a>
                {/if}

            </footer>
        </div>
    {/each}
</div>

<style>
    .card-content {
        background-color: #fafff5;
    }

    .card-footer-item {
        background-color: #fafff5;
    }

    .card-footer-item:hover {
        background-color: #f3f8ed;
    }

</style>