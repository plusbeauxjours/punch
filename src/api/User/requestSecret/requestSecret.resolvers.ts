import { generateSecret } from "../../../utils/generateSecret";
import { sendSecretMail } from "../../../utils/sendMail";
import { prisma } from "../../../../generated/prisma-client/index";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;
      const loginSecret = generateSecret();
      try {
        await sendSecretMail(email, loginSecret);
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        return true;
      } catch {
        return false;
      }
    }
  }
};
