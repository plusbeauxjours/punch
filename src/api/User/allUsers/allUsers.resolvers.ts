import { prisma } from "../../../../generated/prisma-client/index";

export default {
  Query: {
    allUsers: () => prisma.users()
  }
};
