<script>
    import "../app.css";

    // Components
    import Nav from "$lib/Nav.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<div class="main-content">
    <Nav></Nav>
    <slot></slot>
</div>
<Footer></Footer>

<style>
    .main-content {
        max-width: 960px;
        margin: 0 auto;
        padding: 35px 45px 175px 45px;
        /*padding: 35px 45px 525px 45px;*/
        font-family: Nunito, sans-serif;
        font-weight: lighter;
    }

    @media screen and (min-width: 1024px) {
        .main-content {
            padding: 0 20px;
        }
    }

    @media screen and (min-width: 768px) {
        .main-content {
            /*padding-bottom: 375px;*/
            padding-bottom: 175px;
            padding-top: 35px;
        }
    }

    @supports (font-variation-settings: normal) {
        .main-content {
            font-family: Nunito-variable, sans-serif;
            font-weight: lighter;
        }
    }

    @font-face {
        font-family: 'Nunito-variable';
        font-weight: 300 800;
        src: url("/fonts/Nunito-VariableFont_wght.ttf") format('truetype');
    }

    @font-face {
        font-family: 'Nunito-variable';
        font-weight: 300 800;
        font-style: italic;
        src: url("/fonts/Nunito-Italic-VariableFont_wght.ttf") format('truetype');
    }

    @font-face {
        font-family: 'Nunito';
        font-weight: 800;
        src: url("/fonts/Nunito-Bold.ttf") format('truetype');
    }

    @font-face {
        font-family: 'Nunito';
        font-weight: 800;
        font-style: italic;
        src: url("/fonts/Nunito-BoldItalic.ttf") format('truetype');
    }

    @font-face {
        font-family: 'Nunito';
        font-weight: 400;
        src: url("/fonts/Nunito-Regular.ttf") format('truetype');
    }

    @font-face {
        font-family: 'Nunito';
        font-weight: 400;
        font-style: italic;
        src: url("/fonts/Nunito-Italic.ttf") format('truetype');
    }

    @font-face {
        font-family: 'Nunito';
        font-weight: 300;
        src: url("/fonts/Nunito-Light.ttf") format('truetype');
    }

    @font-face {
        font-family: 'Nunito';
        font-weight: 300;
        font-style: italic;
        src: url("/fonts/Nunito-LightItalic.ttf") format('truetype');
    }
</style>

