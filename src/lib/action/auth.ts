import { DeleteJWT, SaveJWT } from "../JWT";
import { AppDispatch } from "../../redux/store";
import { setSession } from "../../redux/feathers/Session_Slice";




// receive 2 params as username and password to run login action with api, auto save jwt , receive a dispacth to push the username to session in redux
export const Login_action = async(username:string,password:string,dispatch:AppDispatch): Promise<{ msg: string } | null>=>{

      // reqire the api to register user
      const URL = import.meta.env.VITE_SERVER_URL;
      try {
        // success to get a token
        const res = await fetch(`${URL}/user/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
        // get the token and storage in local
        const data = await res.json();
        // if response data is null, throw error as not match
        if(!data.data)
            throw new Error("username or password is wrong")
        const jwt = data.data;
        SaveJWT(jwt);
        dispatch(setSession(username))
        //if no error ,return null
        return null
      } catch (e) {
        throw new Error(`login failed: ${e}`);
      }
}

// receive 3 params as username ,password , repeat to run the register action
export const Register_action=async(username:string,password:string,repeat:string):Promise<{msg:string}|null>=>{
    const URL = import.meta.env.VITE_SERVER_URL;
    try{
        const res = await fetch(`${URL}/user/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: username,
              password: password,
              repeat: repeat,
            }),
          });
          const data = await res.json();
          if(!data.data){
            throw new Error(data.msg)
          }
          return null
          
    }catch(e){
      throw new Error(`Register failed: ${e}`)
    }

}

// logout to remove the localstorage jwt and reset session null in redux,receive a dispatch to push username to session in redux
export const Logout_action =(dispatch:AppDispatch,msgToast:(toast:TOAST_REDUX)=>void)=>{
    dispatch(setSession(""));
    msgToast({msg:"Sign out successfully",type:"alert-success"})
    DeleteJWT();
}