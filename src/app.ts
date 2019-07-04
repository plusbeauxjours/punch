import cors from "cors";
import { GraphQLServer, PubSub } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";

class App {
  public app: GraphQLServer;
  public pubSub: any;
  constructor() {
    this.pubSub = new PubSub();
    this.pubSub.ee.setMaxListeners(99);
    this.app = new GraphQLServer({
      schema,
      context: req => {
        const { connection: { context = null } = {} } = req;
        return {
          req: req.request,
          pubSub: this.pubSub,
          context
        };
      }
    });
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(authenticateJwt);
    this.app.express.use(helmet());
  };
}

export default new App().app;
