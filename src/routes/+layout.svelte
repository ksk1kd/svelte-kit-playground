<script>
let { children } = $props()
</script>

<main class="container">
  {@render children()}
</main>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>