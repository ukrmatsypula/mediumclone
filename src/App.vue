<template>
  <div>
    <mcv-topbar />
    Hello medium clone

    <router-view />
  </div>
</template>

<script>
import McvTopbar from '@/components/Topbar.vue'
import { actionTypes } from '@/store/modules/auth'

export default {
  name: 'McvApp',
  components: {
    McvTopbar,
  },
  methods: {},
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  },
}
</script>
