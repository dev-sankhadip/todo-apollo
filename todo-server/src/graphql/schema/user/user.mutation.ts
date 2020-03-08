import jwt from "jsonwebtoken";
import shortid from "shortid";

export const Mutation = {
  createUser: async (args, request) => {
    console.log(args);
    return {
      code: 200
    };
  },
  loginUser: async (parent, args, context, info) => {
    const { email, password } = args;
    console.log(args);
  }
};
