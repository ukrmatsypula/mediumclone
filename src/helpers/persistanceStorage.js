export const getItem = key => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    console.log('Error getting data from localStorage', e)
    return null
  }
}

export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.log('Error saving data in localStorage', e)
  }
}

export const range = (start, end) => {
  return [...Array(end).keys()].map(el => el + start)
}
