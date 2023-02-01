export const commentService = ()=>{

    return fetch("https://nasko-apex.onrender.com/data/comments").then(data=>data.json())

}


export async function editOneComment(token, text, id){
    let res = await fetch(`https://nasko-apex.onrender.com/data/comments/${id}`, {
       method: 'PUT',
       headers: {
         'content-type': 'applications/json',
         'X-Authorization' : token,
         
       },
       body: JSON.stringify(text)
     });
     let result = await res.json();
     
     return result;
    };

    
export async function createComment(token, text){
    let res = await fetch(`https://nasko-apex.onrender.com/data/comments`, {
       method: 'POST',
       headers: {
         'content-type': 'applications/json',
         'X-Authorization' : token,
         
       },
       body: JSON.stringify(text)
     });
     let result = await res.json();
     return result;
    };



  