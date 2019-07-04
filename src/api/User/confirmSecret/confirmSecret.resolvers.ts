import { prisma } from "../../../../generated/prisma-client/index";
import { generateToken } from "../../../utils/generateToken";
import { Resolvers } from "../../../types/resolvers";
import {
  ConfirmSecretMutationArgs,
  ConfirmSecretResponse
} from "../../../types/graph";

const resolvers: Resolvers = {
  Mutation: {
    confirmSecret: async (
      _,
      args: ConfirmSecretMutationArgs
    ): Promise<ConfirmSecretResponse> => {
      const { email, secret } = args;
      const user = await prisma.user({ email });

      if (user.loginSecret === secret) {
        const token = generateToken(user.id);
        return {
          ok: true,
          error: null,
          token
        };
      } else {
        return {
          ok: true,
          error: "🚫 Wrong email/secret convination",
          token: null
        };
      }
    }
  }
};

export default resolvers;
