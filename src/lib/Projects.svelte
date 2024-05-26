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
                </div>
            </div>

            <footer class="card-footer">
                <a href={project.uri} class="card-footer-item">
                    Read more
                    <span class="icon">
                        <i class="fa-solid fa-angle-right"></i>
                    </span>
                </a>
                <!--{#if (project.site)}-->
                <!--    <a href={project.site} class="card-footer-item" target="_blank">-->
                <!--        See the live project-->
                <!--        <span class="icon pl-1" style="padding-bottom: 3px">-->
                <!--            <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i>-->
                <!--        </span>-->
                <!--    </a>-->
                <!--{/if}-->

            </footer>
        </div>
    {/each}
</div>

<style>
    .card-header {
        background-image: linear-gradient(76.35deg, #065443 -4.11%, #422080 94.75%);
        /*background-image: linear-gradient(76.35deg, #0d3525 -4.11%, #441b99 94.75%);*/
        /*background-image: linear-gradient(76.35deg, #683210 -4.11%, #422080 94.75%);*/
        /*background-image: linear-gradient(76.35deg, #904c20 -4.11%, #422080 94.75%);*/
        /*background-image: linear-gradient(76.35deg, #d47030 -66.11%, #422080 109.75%);*/
        /*background-image: linear-gradient(76.35deg, #d47030 15.89%, #422080 89.75%);*/
        /*background-image: linear-gradient(76.35deg, #a3531e 12.89%, #422080 89.75%);*/
    }

    .card-content {
        /*background-color: #fafff5;*/
        background-color: hsl(231.43deg 45.65% 18.04%);
        /*background-color: #131839;*/
        /*background-color: hsl(241.09deg 23.67% 20.22%);*/
        /*background-color: hsl(241.09deg 22.82% 23.24%);*/
    }

    .card-footer-item {
        background-color: hsl(231.43deg 45.65% 18.04%);
        /*background-color: #131839;*/
        /*background-color: hsl(241.09deg 23.67% 20.22%);*/
        /*background-color: hsl(241.09deg 22.82% 23.24%);*/
    }

    .card-footer-item:hover {
        /*background-color: #f3f8ed;*/
        background-color: hsl(231.43deg 45.54% 16.2%);
        /*background-color: hsl(241.09deg 23.67% 23.69%);*/
        /*background-color: hsl(240, 24%, 20%);*/
    }

</style>