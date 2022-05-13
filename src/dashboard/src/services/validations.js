export const validateLogin = (username, password) => {

    if(username === ''){
        return 'Please fill the username field';
    }

    if(password === ''){
        return 'Please fill the password field';
    }
    
    return null;
}