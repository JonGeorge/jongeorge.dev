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
        I can read and write code just as easily as I can create
        and present a slide deck to leadership. Using creative
        problem solving, design thinking, risk management, and
        effective prioritization, I work toward achieving the
        most critical business outcomes.
    </p>

    <div class="field is-grouped mt-6">
        <p class="control">
            <a href="https://github.com/JonGeorge">
                <button class="button is-link">
                <span class="icon">
                    <i class="fa-brands fa-github"></i>
                </span>
                    <span>GitHub</span></button>
            </a>
        </p>

        <p class="control">
            <a href="https://www.linkedin.com/in/jon-georgex/">
                <button class="button is-link">
                <span class="icon">
                    <i class="fa-brands fa-linkedin-in"></i>
                </span>
                    <span>LinkedIn</span>
                </button>
            </a>
        </p>
    </div>
</div>

<!--PROJECTS-->
<div class="content">
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
                <!--<a href={project.uri} class="card-footer-item">Ask a question</a>-->
                <!--<a href={project.uri} class="card-footer-item">See the live site</a>-->
                <a href={project.uri} class="card-footer-item">Read more
                    <span class="icon">
                        <i class="fa-solid fa-angle-right"></i>
                    </span>
                </a>
            </footer>
        </div>
    {/each}

</div>

<style>

</style>