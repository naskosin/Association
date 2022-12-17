export const articlesService = ()=>{

    return fetch("http://localhost:3030/data/articles").then(data=>data.json())

}