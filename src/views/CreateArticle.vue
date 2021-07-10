<template>
  <div>
    Create Article
    <mcv-article-form
      :initialValues="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
    />
  </div>
</template>

<script>
import McvArticleForm from '@/components/ArticleForm'

export default {
  name: 'McvCreateArticle',
  components: {
    McvArticleForm,
  },
  data: () => ({
    initialValues: {
      title: '',
      description: '',
      body: '',
      tagList: [],
    },
    validationErrors: null,
    isSubmitting: false,
  }),
  methods: {
    onSubmit(data) {
      console.log('onSubmit in create Article', data)
    },
  },
}
</script>
