<script>
    export let data;
</script>

<h1 class="title block">Hi, I'm Jon!</h1>
<div class="content">
    <p class="block">
        I lead software teams and customers
        to the successful delivery of their product or service.
    </p>
    <p class="block">
        I am just as comfortable reading and writing code as I am creating
        and presenting slide decks to leadership. By using creative
        problem solving, design thinking, risk management, and
        effective prioritization, I drive impactful outcomes that align
        with critical business goals.
    </p>


</div>

<!--PROJECTS-->
<div class="content mt-6">
    {#each data.projectSummaries as project}
        <div class="card">
            <header class="card-header is-shadowless">
                <p class="card-header-title">{project.title}</p>
            </header>

            <div class="card-content">
                <div class="content">
                    {project.description}
                    <br/>
                    <br/>
                    {project.date}
                </div>
            </div>

            <footer class="card-footer">
                <a href={project.uri} class="card-footer-item">Read more
                    <span class="icon">
                        <i class="fa-solid fa-angle-right"></i>
                    </span>
                </a>
                {#if (project.site)}
                    <a href={project.site} class="card-footer-item" target="_blank">See the live project
                        <span class="icon" style="padding-bottom: 3px">
                            <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                        </span>
                    </a>
                {/if}

            </footer>
        </div>
    {/each}

</div>

<style>

</style>