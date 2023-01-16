


//export async function login (email, password){
//    let res = await fetch("http://localhost:3030/users/login", {
//        method: 'POST',
//        headers: {
//            'content-type': 'applications/json',
//        },
//        body: JSON.stringify({email, password})
//    })
//    user = await res.json();
//    
//    return ;
//}


export async function loginPas(email, password){
    let res = await fetch("http://localhost:3030/users/login", {
        method: 'POST',
        headers: {
            'content-type': 'applications/json',
        },
        body: JSON.stringify({email, password})
    })
    //const result = await res;
    console.log(res)
    const data = await res.json();
    if(res.ok){
      return  data;
    }else{
        throw data.message;
    }
    
    
  

}

export async function register (user, email, password){
    let res = await fetch("http://localhost:3030/users/register", {
        method: 'POST',
        headers: {
            'content-type': 'applications/json',
        },
        body: JSON.stringify({user, email, password})
    })
    let jsonResult = await res.json();
    if (res.ok){
        return jsonResult;
      }else{
        throw jsonResult.message;
      }

}


//export async function login(email, password){
//    let res = await fetch(`${apiUrl}/login`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'applications/json',
//         
//       },
//       body: JSON.stringify({email, password})
//      
//     });
//    
//     return resulter(res)
//   
//   
//   
//   };

function nasko(apiUrl, body){
    if(body){
        if(body.method = 'POST'){
        let res
        }
    }
}