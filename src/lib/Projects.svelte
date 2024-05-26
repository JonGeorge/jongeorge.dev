<script>
    export let projects;
</script>
<div class="content">
    {#each projects as project}
        <div class="card mt-6 is-shadowless">
            <header class="card-header is-shadowless">
                <p class="card-header-title has-text-success-100">{project.title}</p>
            </header>

            <div class="card-content">
                {project.description}
                <br/>
                <br/>
                <div class="tag is-warning has-text-weight-semibold">
                    {project.role}
                </div> <div class="tag is-background-info-15 has-text-weight-semibold">
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
    .card-header {
        background-image: linear-gradient(76.35deg, #065443 -4.11%, #422080 94.75%);
    }

    .card-content {
        background-color: hsl(231.43deg 45.65% 18.04%);
    }

    .card-footer-item {
        background-color: hsl(231.43deg 45.65% 18.04%);
    }

    .card-footer-item:hover {
        background-color: hsl(231.43deg 45.54% 16.2%);
    }

</style>