import axios from 'axios'

const getTopAnimes = async callback => {
  const query = `
    query { 
      Page(perPage: 100) {
        media(type: ANIME, popularity_greater: 300000, sort: POPULARITY_DESC) {
          id
          title {
            english,
            userPreferred
          }
          popularity
          coverImage {
            large
          }
        }
      }
    }
  `
  const res = await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  })
  callback(res.data.data.Page.media)
}

const searchAnimes = async (callback, search) => {
  const query = `
    query {
    Page(perPage: 20) {
      media(type: ANIME, sort: POPULARITY_DESC, search: "${search}") {
        id
          title {
          english,
            userPreferred
        }
        popularity
          coverImage {
          large
        }
      }
    }
  }
  `
  const res = await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  })
  callback(res.data.data.Page.media)
}

const getAnimeDetails = async (callback, id) => {
  const query = `
  query {
    Media(id: ${id} ){
      id
      title {
        english,
        userPreferred
      }
      coverImage {
        large
      }
      description
      streamingEpisodes {
        title,
        thumbnail,
        url
      }
    }
  }
  `
  await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  }).then(res => {
    callback(res.data.data.Media)
    console.log(res.data.data.Media)
  })
}

const getAnime = async id => {
  const query = `
  query {
    Media(id: ${id} ){
      id
      title {
        english,
        userPreferred
      }
      coverImage {
        large
      }
      description
    }
  }
  `
  await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  }).then(res => {
    return res.data.data.Media
  })
}

const getRomanceAnime = async callback => {
  const query = `
    query { 
      Page(perPage: 100) {
        media(type: ANIME genre_in: "Romance" genre_not_in: "Action" episodes_greater: 1 sort: POPULARITY_DESC) {
          id
          title {
            english,
            userPreferred
          }
          coverImage {
            large
          }
        }
      }
    }
  `
  const res = await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  })
  callback(res.data.data.Page.media)
}

const getLongAnime = async callback => {
  const query = `
    query { 
      Page(perPage: 100) {
        media(type: ANIME episodes_greater: 100 sort: POPULARITY_DESC) {
          id
          title {
            english,
            userPreferred
          }
          coverImage {
            large
          }
        }
      }
    }
  `
  const res = await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  })
  callback(res.data.data.Page.media)
}

const getNewAnime = async callback => {
  const query = `
    query { 
      Page(perPage: 100) {
        media(type: ANIME startDate_greater: 20220000 episodes_greater: 1 sort: POPULARITY_DESC) {
          id
          title {
            english,
            userPreferred
          }
          coverImage {
            large
          }
        }
      }
    }
  `
  const res = await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  })
  callback(res.data.data.Page.media)
}

const getIsekais = async callback => {
  const query = `
    query { 
      Page(perPage: 100) {
        media(type: ANIME tag: "Isekai" episodes_greater: 1 sort: POPULARITY_DESC) {
          id
          title {
            english,
            userPreferred
          }
          coverImage {
            large
          }
        }
      }
    }
  `
  const res = await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  })
  callback(res.data.data.Page.media)
}

export {
  getTopAnimes,
  searchAnimes,
  getAnimeDetails,
  getRomanceAnime,
  getLongAnime,
  getNewAnime,
  getIsekais,
  getAnime
}
