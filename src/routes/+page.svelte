<script>
    import awsLogo from "$lib/assets/logo-aws.svg";
    import snLogo from "$lib/assets/logo-sn.avif";
    import Projects from "$lib/Projects.svelte";

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

<Projects projects={data.projectSummaries}/>