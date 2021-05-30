<script>

</script>

<slot/>

<style global>
  @import "@fontsource/fira-sans";
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  :global(body) {
    @apply font-sans antialiased;
    @apply bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300;
    @apply transition-all duration-500;
  }
</style>