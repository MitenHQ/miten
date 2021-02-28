import express from 'express';
import helmet from 'helmet';
import expressJwt from 'express-jwt';
import slowDown from 'express-slow-down';
import { getApolloServer } from '../graphql/graphqlServer';
import { apolloContext } from './apolloContext';
import { JWT_ALGORITHM, JWT_SECRET } from '../utils/constants';
import { expressAddUserToRequest } from './expressAddUserToRequest';
import { isProductionEnv } from '../utils/envTools';

const requestSpeedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 30, // allow 30 requests to go at full-speed, then...
  delayMs: 10, // 31th request has a 10ms delay, 32th has a 20ms delay, 33th gets 30ms, etc.
});

export const startExpress = (): void => {
  const app = express();

  if (isProductionEnv()) {
    // Our production server is behind a reverse proxy
    app.enable('trust proxy');
    // slow down the requests from a single ip
    app.use(requestSpeedLimiter);
  }

  // allow frontend to send requests
  if (process.env.ALLOW_ORIGIN || !isProductionEnv()) {
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN || '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
      );
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
  }

  // Extract user id from JWT (Authorization header Bearer) as user in all requests
  app.use(
    expressJwt({
      secret: JWT_SECRET,
      algorithms: [JWT_ALGORITHM],
      credentialsRequired: false, // because we don't want it to throw when the token doesn't exist in the request header (for example the login graphql query)
    }),
  );

  // get user by user id from the db and put it in the express request (req.user)
  app.use(expressAddUserToRequest);

  // some level of http security
  app.use(
    helmet({
      contentSecurityPolicy: isProductionEnv() ? undefined : false,
    }),
  );

  // attach apollo server to express
  getApolloServer(apolloContext).applyMiddleware({ app });

  // start the server
  const port = process.env.PORT || 4040;
  app.listen(port, () => {
    console.log(`The server is up and running on ${port}`);
  });
};
