


// pass a name and JWT to storage in local
export const SaveJWT = (data:string) => {
    const tokenName = import.meta.env.VITE_TOKEN_NAME;
  localStorage.setItem(tokenName,data)
}

// pass a name to return the JWT based on this name
export const GetJWT =()=>{
    const tokenName = import.meta.env.VITE_TOKEN_NAME;
    const token = localStorage.getItem(tokenName)
    return token
}

// pass a name to delete the JWT based on this name
export const DeleteJWT =()=>{
    const tokenName = import.meta.env.VITE_TOKEN_NAME;
    localStorage.removeItem(tokenName)
}

// use token name to get token and access server to verify jwt, if success, will storage info in redux , if failed, return error
export const VerifyJWT=async()=>{
    
    const token = GetJWT()
    if (!token){
        return new Error(`can't find the ${name} token`)
    } 

    const URL = import.meta.env.VITE_SERVER_URL;
    try{
        const res = await fetch(`${URL}/user/verify`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}`}} )
      
          const data = await res.json();
          const username = data.data
          return username
    }catch(e){
       return new Error(`Fetch failed: ${e}`);
    }

}