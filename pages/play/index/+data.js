export { data }

import fetch from 'node-fetch'
import countries from '../../../utils/countries';

const getRandomCountry = () => {
  const randomIndex = Math.floor(Math.random() * countries.length)
  return countries[randomIndex]
}

const getRandomGender = () => {
  const randomIndex = Math.floor(Math.random() * 2)
  return randomIndex === 0 ? "Man" : "Woman"
}

const data = async (pageContext) => {

  const country = getRandomCountry()

  const query = `${country.adjective} ${getRandomGender()} photo`
  console.log(query)
  
  const pictures = await fetch('https://api.search.brave.com/res/v1/images/search?' + new URLSearchParams({
    q: query,
    count: 1,
    spellcheck: 0,

  }).toString(), {
    method: 'GET',
    headers: {
      // 'Content-Type': 'application/json',
      // 'Accept-Encoding': 'gzip, deflate, br',
      'X-Subscription-Token': 'BSA9roh4v3E6BrObKT4Gg9j3Z2k89le'
    },
    
  });

  // console.log(pictures)

  const picturesData = await pictures.json()

  // console.log(picturesData)

  // const moviesData = await response.json()

  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.
  // const movies = minimize(moviesData)

  return {
    pics: picturesData.results,
    country: country.name
  }
}

function minimize(movies) {
  return movies.map((movie) => {
    const { title, release_date, id } = movie
    return { title, release_date, id }
  })
}

function sleep(milliseconds) {
  return new Promise((r) => setTimeout(r, milliseconds))
}
