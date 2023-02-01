export const articlesService = ()=>{

    return fetch("https://nasko-apex.onrender.com/data/articles").then(data=>data.json())

}

export const articleDetailsService =(token, id)=>{
    return fetch(`https://nasko-apex.onrender.com/data/articles/${id}`,  {
    method: 'GET',
    headers: {
      'content-type': 'applications/json',
      'X-Authorization' : token,
      
    }
  }).then(data=>data.json())
}