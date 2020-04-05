import jwt from "jsonwebtoken";
import shortid from "shortid";
import { promisify } from "util";

import { connection, query } from "../../../db/connection";

export const Mutation = {
  createUser: async (parent, args, context, info) => {
    const uid = shortid.generate();
    const { username, email, password } = args.UserInput;
    query(`insert into users values('${uid}', '${username}', '${email}', '${password}')`)
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err)
    })
    return {
      code: 200,
    };
  },
  loginUser: async (parent, args, context, info) => {
    if (context.user != null) {
      console.log(args);
      const token = jwt.sign(
        { userId: "123", email: "123@gmail.com" },
        "todo",
        { expiresIn: "1h" }
      );
      console.log(token);
      return {
        code: 200,
      };
    } else {
      return {
        code: "401",
      };
    }
  },
};
