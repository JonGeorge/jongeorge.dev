<script lang="ts">
    import awsLogoWhite from "$lib/assets/logo-aws-white.svg";
    import snLogoWhite from "$lib/assets/logo-sn-white.avif";
    import jsLogo from "$lib/assets/logo-js.svg";
    import pythonLogo from "$lib/assets/logo-python.svg";
    import javaLogo from "$lib/assets/logo-java.svg";
    import figmaLogo from "$lib/assets/logo-figma.svg";
    import drawioLogo from "$lib/assets/logo-drawio.svg";
    import visioLogo from "$lib/assets/logo-visio.svg";

    import Projects from "$lib/Projects.svelte";
    import {onDestroy, onMount} from "svelte";

    export let data;
    let htmlElement: HTMLElement;
    onMount(() => {
        htmlElement = document.documentElement;
        htmlElement.style.scrollSnapType = "y mandatory";
    });


    onDestroy(() => {
        if (htmlElement && htmlElement.style)
            htmlElement.style.scrollSnapType = "";
    });
</script>

<div class="section is-align-content-center landing-padding">
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
    </div>
    <a href="#tools">
        <div class="icon ">
            <i class="has-text-link fa-solid fa-chevron-down"></i>
        </div>
    </a>
</div>

<div class="section is-align-content-center landing-padding" id="tools">
    <h2 class="title has-text-centered mt-6 is-size-4 mobile-scroll-point-start">Tools</h2>
    <hr class="m-auto">
    <div class="columns mt-5 mb-6 is-column-gap-2">
        <div class="column has-text-centered has-radius-normal mt-4 desktop-scroll-point-center">
            <p class="mt-4 mobile-scroll-point-start">Builds with</p>
            <div>
                <img src={snLogoWhite} alt="ServiceNow Logo" width="250">
            </div>
            <img src={awsLogoWhite} alt="AWS Logo" width="80" class="ml-5">
        </div>
        <div class="column has-text-centered has-radius-normal mt-4">
            <p class="mt-4 mb-5 mobile-scroll-point-start">Fluent in</p>
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
            <p class="mt-4 mb-4 mobile-scroll-point-start">Designs with</p>
            <img src={figmaLogo} alt="Figma Logo" width="40">
            <img src={drawioLogo} alt="Draw.io Logo" width="60" class="ml-5 mt-2">
            <div class="pb-4">
                <img src={visioLogo} alt="Microsoft Visio Logo" width="60"
                     class="mt-4">
            </div>
        </div>
    </div>
    <a href="#projects">
        <div class="icon">
            <i class="has-text-link fa-solid fa-chevron-down"></i>
        </div>
    </a>
</div>

<div class="section is-align-content-center" id="projects">
    <h2 class="title has-text-centered mt-6 is-size-4 pt-4 scroll-point-start">Project Highlights</h2>
    <hr class="margin-hr">
    <Projects projects={data.projectSummaries}/>
</div>


<style>

    .section {
        min-height: 100vh;

    }


    .landing-padding {
        padding-bottom: 20rem;
    }

    @media screen and (max-width: 768px) {
        .landing-padding {
            padding: 0 0 20rem 0;
        }

    }

    .icon {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5vh;
        animation: updown 3s ease infinite;
    }

    @keyframes updown {
        0% {
            transform: translateY(0%);
        }

        70% {
            transform: translateY(100%);
        }

        100% {
            transform: translateY(0%);
        }
    }

    hr {
        border-top: 1px solid var(--bulma-link);
        width: 10rem;
    }

    .margin-hr {
        margin: 0 auto -15px auto;
    }

    .title {

    }
</style>