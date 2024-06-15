import { ApolloServer } from 'apollo-server-express'
import express from 'express';
import { CharacterResolver } from "./resolvers/CharecterResolver";
import { buildSchema } from 'type-graphql';

export async function startServer() {
    const app = express() as any;

    const server = new ApolloServer({
        schema: await buildSchema({
          resolvers: [CharacterResolver],
          validate: false
        }),
        context: ({ req, res }) => ({ req, res })
      });
    
    await server.start();
    server.applyMiddleware({app, path: '/graphql'})

    return app;
}

