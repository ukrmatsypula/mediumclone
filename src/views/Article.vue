<template>
  <div>new article</div>
</template>

<script>
import { actionTypes } from '@/store/modules/article'

export default {
  name: 'McvArticle',
  mounted() {
    this.$store.dispatch(actionTypes.getArticle, {
      slug: this.$route.params.slug,
    })
  },
}
</script>
