export const articlesService = ()=>{

    return fetch("http://localhost:3030/data/articles").then(data=>data.json())

}

export const articleDetailsService =(token, id)=>{
    return fetch(`http://localhost:3030/data/articles/${id}`,  {
    method: 'GET',
    headers: {
      'content-type': 'applications/json',
      'X-Authorization' : token,
      
    }
  }).then(data=>data.json())
}