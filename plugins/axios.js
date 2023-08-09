export default ({ $axios,redirect , $config: { baseUrlIam, secretToken } ,error: nuxtError}) => {

  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*'
      }
    }
  })
  // Set baseURL to something different
  api.setBaseURL(process.env.API_URL)

  $axios.defaults.headers.Authorization = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCR0QmwvNG44RC5wSDc0dkdyNFJRUkNPdDlZVWswdkUudVJ4Q2RlNVBYRUNsVFNyc1BOVC5tMiJ9LCJpYXQiOjE2ODU2ODE1NTYsImV4cCI6MTY4NTc2Nzk1Nn0.ZKf2Gnpxw6Uood9uaHokvc1Lh-V7FvM9aA40vmJSO1k';

  // $axios.onRequest(config => {
  //   console.log('Making request to ' + config.url)
  // })

  $axios.onResponse(res => {
    console.log(res);
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
     return
    }
  })
}
