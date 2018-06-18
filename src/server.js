import cors from 'cors';
import graphqlHttp from 'express-graphql';
import schema from './schema';

const app = require("express")();
const PORT = 5000;

app.use(cors());

app.use(graphqlHttp({
  schema,
  // Pretty Print the JSON response
  pretty: true,
  // Enable GraphiQL dev tool
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
