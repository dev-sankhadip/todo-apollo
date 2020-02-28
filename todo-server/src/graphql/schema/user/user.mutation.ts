import jwt from 'jsonwebtoken';

export const Mutation={
    createUser: async(args, request)=>
    {
        console.log(args);
        return{
            code:200
        }
    },
    loginUser: async (parent, args, context, info)=>
    {
        console.log(context);
        console.log(args);
        const token = jwt.sign({ userId: '123', email: '123@gmail.com' }, 'todo', { expiresIn: '1h' });
        console.log(token);
        return{
            code:200
        }
    }
}