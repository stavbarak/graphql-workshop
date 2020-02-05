import cors from 'cors';
import graphqlHttp from 'express-graphql';
import schema from './schema';
import depthLimit from 'graphql-depth-limit'

const app = require("express")();
const PORT = 5000;

app.use(cors());

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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
