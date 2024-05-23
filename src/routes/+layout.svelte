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
        padding: 35px 45px 525px 45px;
    }

    @media screen and (min-width: 1024px)  {
        .main-content {
            padding: 0 20px;
        }
    }

    @media screen and (min-width: 768px)  {
        .main-content {
            padding-bottom: 375px;
            padding-top: 35px;
        }
    }
</style>

