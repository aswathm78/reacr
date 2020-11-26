const TOKEN_KEY = 'jwt';

export const login = () => {
localStorage.setItem(TOKEN_KEY, 'maalem@mf');
}

export const logout = () => {
localStorage.removeItem(TOKEN_KEY);
localStorage.clear()
var token = window.sessionStorage.getItem('iord_id_token')
sessionStorage.clear()
window.sessionStorage.setItem('iord_id_token',token)
}

export const isLogin = () => {
if (localStorage.getItem(TOKEN_KEY)) {
return true;
}

return false;
}