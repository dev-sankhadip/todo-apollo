import jwt from "jsonwebtoken";
import shortid from "shortid";

import { connection } from "../../../db/connection";

export const Mutation = {
  createUser: async (args, request) => {
    console.log(args);
    return {
      code: 200
    };
  },
  loginUser: async (parent, args, context, info) => {
    const { email, password } = args;
    const sqlLoginQuery =
      "select * from users where email = ? and password = ?";
    connection.query(sqlLoginQuery, [email, password], async (err, result) => {
      if (err) {
        console.log(err);
        return {
          code: 500,
          token: null
        };
      }
      if (result.length > 0) {
        const token = jwt.sign(
          { userId: result[0].username, email: result[0].email },
          "todo",
          {
            expiresIn: "1h"
          }
        );
        return {
          code: 200,
          token
        };
      } else {
        return {
          code: 400,
          token: null
        };
      }
    });
  }
};
