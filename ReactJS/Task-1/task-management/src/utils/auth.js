export const isAuthenticated = () => {
    return JSON.parse(localStorage.getItem('user')) ? true : false;
}