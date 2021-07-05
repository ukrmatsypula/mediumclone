<template>
  <div>
    <mcv-loading v-if="isLoading" />
    <div v-if="error">Something bad happend</div>

    <div class="sidebar" v-if="popularTags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          v-for="popularTag in popularTags"
          :key="popularTag"
          :to="{ name: 'tag', params: { slug: popularTag } }"
          class="tag-default tag-pill"
        >
          {{ popularTag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/popularTags'
import McvLoading from '@/components/Loading'

export default {
  name: 'McvPopularTags',
  computed: {
    ...mapState({
      isLoading: state => state.popularTags.isLoading,
      error: state => state.popularTags.errors,
      popularTags: state => state.popularTags.data,
    }),
  },
  components: {
    McvLoading,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  },
}
</script>
