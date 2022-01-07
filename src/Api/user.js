
function delay(duration){
    return new Promise(rej=>{
        setTimeout(()=>{rej()},duration);
    });

}
export async function login(u,password){
   await delay(1000);
  if((u === "admin" && password === "123456") || (u === "user" && password === "123123")){
      const user = {
          u,
          name:'管理员'
      }
      localStorage.setItem('user',JSON.stringify(user));
      return user;
  }
  return null;
}


export async function loginOut(){
    await delay(1000);
    localStorage.removeItem('user');

}
export async function whoAmI(){
    await delay(1000);
    const user = localStorage.getItem('user');
    if(user){
        return JSON.parse(user);
    }
    return null;
}