import fetch from 'node-fetch'

loop()
setInterval(loop, 10*60*1000)

async function loop () {
  try {
    var res = await fetchUsers()
  } catch (e) {
    console.err(e)
  }

  try {
    var json = await res.json()
  } catch (e) {
    console.err(e)
  }

  try {
    var users = json.currentVisitors
    if (isNaN(users)) {
      console.err('currentVisitors is not a number')
    }
    console.log(`${Date.now()}, ${users}`)
  } catch (e) {
    console.err(e)
  }
}

async function fetchUsers () {
  const url = 'https://blfa-api.migros.ch/fp/api/center/10/currentuser'
  const headers = {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:106.0) Gecko/20100101 Firefox/106.0',
      'Content-type': 'application/json',
      'Origin': 'https://www.fitnesspark.ch',
      'Referer': 'https://www.fitnesspark.ch/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'Pragma': 'no-cache',
      'Cache-Control': 'no-cache',
      'TE': 'trailers'
  }
  return fetch(url, { headers })
}
