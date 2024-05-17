<script>
    import "../app.css";
    import "$lib/Nav.svelte";
    import Nav from "$lib/Nav.svelte";
</script>
<h1>Jon George</h1>
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

