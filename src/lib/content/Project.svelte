<script>
    export let html;
    export let attributes;
</script>
<h1 class="is-size-3-mobile is-size-2-tablet">{attributes.title}</h1>
<h1 class="is-size-5-mobile is-size-3-tablet">{attributes.for}</h1>
<hr>
<br/>
<div class="content">
    {@html html}
</div>

<style>
    hr {
        border-top: 1px solid var(--bulma-link);
        width: 10rem;
    }
</style>