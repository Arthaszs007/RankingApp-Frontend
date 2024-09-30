type MEMBER_INFO ={
    id:number,
    name:string,
    img_url:string,
    bio:string,
    votes:number,

}

type TOAST_REDUX = {
    msg:string,
    type:string,
}

type TOAST_ERROR_TYPR ={
    warn:"alert-info",
    success:"alert-success",
}