export const Query={
    loginUser: async ({ email, password })=>
    {
        console.log(email);
        console.log(password);
        return{
            code:200
        }
    }
}