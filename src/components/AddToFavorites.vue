<template>
  <div>Add to favorites</div>
</template>

<script>
export default {
  name: 'McvAddToFavorites',
  props: {
    isFavorited: {
      type: Boolean,
      required: true,
    },
    articleSlug: {
      type: String,
      required: true,
    },
    favoritesCount: {
      type: Number,
      required: true,
    },
  },
}
</script>
