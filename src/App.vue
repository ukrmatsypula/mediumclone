<template>
  <div>
    <mcv-topbar />
    Hello medium clone

    <router-view />
  </div>
</template>

<script>
import McvTopbar from '@/components/Topbar.vue'

export default {
  name: 'McvApp',
  components: {
    McvTopbar,
  },
}
</script>
