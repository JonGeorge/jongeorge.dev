<script>
    import awsLogo from "$lib/assets/logo-aws.svg";
    import snLogo from "$lib/assets/logo-sn.avif";

    export let data;
</script>

<h1 class="title block">Hi, I'm Jon!</h1>
<div class="content">
    <p class="block">
        I lead software teams through ideation, planning,
        design, and development.
    </p>
    <p class="block">
        My ability to translate technical solutions into plain language
        for customers builds trust, aligns development with customer needs
        and expectations, and ensures the successful delivery
        of products and services.
    </p>
    <p class="block">
        I am equally adept at reading and writing code as I am at creating
        and presenting slides to leadership. By using creative
        problem solving, design thinking, risk management, and
        effective prioritization, I drive impactful outcomes that align
        with critical business goals.
    </p>

    <p class="block has-text-centered mt-1">
        <img src={snLogo} alt="ServiceNow Logo" width="250">
        <img src={awsLogo} alt="AWS Logo" width="80" class="ml-5">
    </p>

</div>

<!--PROJECTS-->
<div class="content mt-6">
    {#each data.projectSummaries as project}
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