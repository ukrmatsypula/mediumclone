<template>
  <div>
    Pagination
  </div>
</template>

<script>
export default {
  name: 'McvPagination',
  props: {
    total: {
      type: Number,
      requred: true,
    },
    limit: {
      type: Number,
      requred: true,
    },
    currentPage: {
      type: Number,
      requred: true,
    },
    url: {
      type: String,
      requred: true,
    },
  },
  computed: {},
}
</script>
