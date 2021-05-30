<script>
  import { theme } from '../routes/store'
  const toggleTheme = () => {
    $theme = $theme === 'dark' ? 'light' : 'dark'
    document.querySelector('html').classList.toggle('dark')
  }
</script>

<button on:click={toggleTheme}
        class="border-2 border-gray-500 rounded-md py-1 px-2">
  Toggle Theme
</button>