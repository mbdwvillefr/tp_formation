<script>
  const { createApp } = Vue
  import componentsoption from './assets/main.js'

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        name : 'Marguerite',
        
      }
    }
  }).mount('#app')
</script>