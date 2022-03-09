export const login = async (username, password) => {
    await new Promise(t => setTimeout(t, 1000));
    if(username === "admin" && password === "password"){
        return true;
    } else{
        return false;
    }
}