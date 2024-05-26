<script>
    import awsLogoWhite from "$lib/assets/logo-aws-white.svg";
    import snLogoWhite from "$lib/assets/logo-sn-white.avif";
    import jsLogo from "$lib/assets/logo-js.svg";
    import pythonLogo from "$lib/assets/logo-python.svg";
    import javaLogo from "$lib/assets/logo-java.svg";
    import figmaLogo from "$lib/assets/logo-figma.svg";
    import drawioLogo from "$lib/assets/logo-drawio.svg";
    import visioLogo from "$lib/assets/logo-visio.svg";

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
    <h2 class="title has-text-centered mt-6 is-size-4">Tools</h2>
    <hr class="m-auto">
    <div class="columns mt-5 mb-6 is-column-gap-2">
        <div class="column has-text-centered has-radius-normal mt-4">
            <p class="has-text-grey-lighter mt-4">Builds with</p>
            <div>
                <img src={snLogoWhite} alt="ServiceNow Logo" width="250">
            </div>
            <img src={awsLogoWhite} alt="AWS Logo" width="80" class="ml-5">
        </div>
        <div class="column has-text-centered has-radius-normal mt-4">
            <p class="has-text-grey-lighter mt-4 mb-5">Fluent in</p>
            <div>
                <img src={jsLogo} alt="JavaScript Logo" width="60" class=" ">
                <img src={pythonLogo} alt="Python Logo" width="60" class="ml-5 ">
            </div>
            <div class="pb-4">
                <img src={javaLogo} alt="Java Logo" width="70" class="mt-2 ">
<!--                <img src={pythonLogo} alt="AWS Logo" width="70" class="ml-5 ">-->
            </div>

        </div>
        <div class="column has-text-centered has-radius-normal mt-4">
            <p class="has-text-grey-lighter mt-4">Designs with</p>
            <img src={figmaLogo} alt="Figma Logo" width="40">
            <img src={drawioLogo} alt="Draw.io Logo" width="60" class="ml-5 mt-2">
            <div class="pb-4">
                <img src={visioLogo} alt="Microsoft Visio Logo" width="60"
                     class="mt-4">
            </div>
        </div>
    </div>
</div>

<h2 class="title has-text-centered mt-6 is-size-4 pt-4">Project Highlights</h2>
<hr class="margin-hr">
<Projects projects={data.projectSummaries}/>

<style>
    hr {
        border-top: 1px solid var(--bulma-link);
        width: 10rem;
    }

    .margin-hr {
        margin: 0 auto -15px auto;
    }

    .column {
        background-color: hsl(231.43deg 45.65% 18.04%);
    }
</style>