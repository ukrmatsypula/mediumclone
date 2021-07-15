import addToFavoritesApi from '@/api/addToFavorites'

export const mutationTypes = {
  addToFavoriteStart: '[addToFavorites] AddToFavoritesStart',
  addToFavoriteSuccess: '[addToFavorites] AddToFavoritesSuccess',
  addToFavoriteFailure: '[addToFavorites] AddToFavoritesFailure',
}

export const actionTypes = {
  addToFavorites: '[addToFavorites] addToFavorites',
}

const mutations = {
  [mutationTypes.addToFavoriteStart]() {},
  [mutationTypes.addToFavoriteSuccess]() {},
  [mutationTypes.addToFavoriteFailure]() {},
}

const actions = {
  [actionTypes.addToFavorites](context, { slug, isFavorited }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.addToFavoriteStart)
      const promise = isFavorited
        ? addToFavoritesApi.removeFromFavorites(slug)
        : addToFavoritesApi.addToFavorites(slug)

      promise
        .then(article => {
          context.commit(mutationTypes.addToFavoriteSuccess, article)
          resolve(article)
        })
        .catch(() => {
          context.commit(mutationTypes.addToFavoriteFailure)
        })
    })
  },
}

export default {
  mutations,
  actions,
}
