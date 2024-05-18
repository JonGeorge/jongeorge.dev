<script>
    // import "../app.css";

    // Components
    import Nav from "$lib/Nav.svelte";
</script>
<Nav></Nav>
<slot></slot>

<style>
    h1 {
        font-family: "Outfit", sans-serif;
        font-optical-sizing: auto;
        font-weight: 800;
        font-style: normal;
        font-size: 2.5rem;

        margin: 2rem;
    }
</style>

