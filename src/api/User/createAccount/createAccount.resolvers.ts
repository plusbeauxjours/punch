import { prisma } from "../../../../generated/prisma-client/index";
import { Resolvers } from "src/types/resolvers";
import {
  CreateAccountMutationArgs,
  CreateAccountResponse
} from "../../../types/graph";

const resolvers: Resolvers = {
  Mutation: {
    createAccount: async (
      _,
      args: CreateAccountMutationArgs
    ): Promise<CreateAccountResponse> => {
      const { username, email, bio = "" } = args;
      try {
        await prisma.createUser({
          username,
          email,
          bio
        });
        return { ok: true, error: null };
      } catch (error) {
        return { ok: false, error: error.message };
      }
    }
  }
};

export default resolvers;
