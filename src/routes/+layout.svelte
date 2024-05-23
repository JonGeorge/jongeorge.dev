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
        margin: 35px auto 0 auto;
        padding-left: 45px;
        padding-right: 45px;
        /**/
        padding-bottom: 525px;
    }

    @media screen and (min-width: 1024px)  {
        .main-content {
            padding: 0 20px;
        }
    }

    @media screen and (min-width: 768px)  {
        .main-content {
            padding-bottom: 375px;
        }
    }
</style>

