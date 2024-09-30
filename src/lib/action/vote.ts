// receive a username to fetch api to vote
export const VoteToMember =async (username:string,member_id:number,refresh:()=>void,showToast:(toast:TOAST_REDUX)=>void) => {
  

  const URL = import.meta.env.VITE_SERVER_URL;
  
  try{
    const res = await fetch(`${URL}/event/vote`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            member_id: member_id.toString()
          }),
        })
        
        const data = await res.json()
        if(!data.data){
          // if data is empty, already voted, and invoke toast to show msg
          showToast({msg:"Already voted, can't vote again.",type:"alert-info"})
            throw new Error(data.msg)
        }
        // if success to access, invoke the toast to show msg
        showToast({msg:"Thanks for your vote.",type:"alert-success"})
        // run this func in difined hook ,after successfully vote
        refresh()
        return data.data
 }catch(e){
    throw new Error(`vote failed ${e}`)
 }
   
 
}

