<script lang="ts">
    let mobileNavIsDisplayed = false;

    function toggleNav() {
        mobileNavIsDisplayed = !mobileNavIsDisplayed;
    }
</script>

<nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <a href="/">Jon George</a>

        <a class="navbar-burger {mobileNavIsDisplayed ? 'is-active' : ''}"
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

    <div id="nav-items" class="navbar-menu {mobileNavIsDisplayed ? 'is-active' : ''}">
        <div class="navbar-end">
            <a on:click={mobileNavIsDisplayed ? toggleNav : ""} href="/" class="navbar-item is-tab">Home</a>
            <a on:click={mobileNavIsDisplayed ? toggleNav : ""} href="/about" class="navbar-item is-tab">About</a>
            <a on:click={mobileNavIsDisplayed ? toggleNav : ""} href="/projects" class="navbar-item is-tab">Projects</a>
            <a on:click={mobileNavIsDisplayed ? toggleNav : ""} href="/contact" class="navbar-item is-tab">Contact</a>
        </div>
    </div>
</nav>

<style>

</style>