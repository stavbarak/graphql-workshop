import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';

import schema from './schema';
import depthLimit from 'graphql-depth-limit'

const PORT = 5000;
const server = express();
const subscriptionsEndpoint = `ws://localhost:${PORT}/subscriptions`;

server.use(cors());

server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema,
}));

const DepthLimitRule = depthLimit(
    3,
    { ignore: [ 'whatever', 'trusted' ] },
    depths => console.log(depths)
  )


app.use(graphqlHttp({
  schema,
  // Pretty Print the JSON response
  pretty: true,
  // Enable GraphiQL dev tool
  graphiql: true,
  validationRules: [
    DepthLimitRule,
  ],

}));



// Making plain HTTP server for Websocket usage
const ws = createServer(server);

ws.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}/graphiql to run queries`);
  console.log(`Open 2 tabs to see subscription in action!`);

  /** GraphQL Websocket definition **/
    // Set up the WebSocket for handling GraphQL subscriptions.
    new SubscriptionServer({
        execute,
        subscribe,
        schema
    }, {
        server: ws,
        path: '/subscriptions',
    });
});
