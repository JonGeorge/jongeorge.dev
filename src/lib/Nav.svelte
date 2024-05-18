<script lang="ts">
    let isActive = false;

    function toggleNav() {
        isActive = !isActive;
    }
</script>

<nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <a href="/">Jon George</a>

        <a class="navbar-burger {isActive ? 'is-active' : ''}"
           on:click={toggleNav}
           href="#0"
           role="button"
           aria-label="menu"
           aria-expanded="false"
           data-target="navbar-items">

            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>

        </a>
    </div>

    <div id="nav-items" class="navbar-menu {isActive ? 'is-active' : ''}">
        <div class="navbar-end">
            <a href="/" class="navbar-item is-tab">Home</a>
            <a href="/about" class="navbar-item is-tab">About</a>
            <a href="/projects" class="navbar-item is-tab">Projects</a>
            <a href="/contact" class="navbar-item is-tab">Contact</a>
        </div>
    </div>
</nav>

<style>

</style>