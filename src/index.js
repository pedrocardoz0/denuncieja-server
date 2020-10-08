import { GraphQLServer } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import User from './resolvers/User';
import Post from './resolvers/Post';
import { prisma } from '../prisma/generated/prisma-client';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        User,
        Post,
    },
    context: {
        db,
        prisma
    },
});

server.start(() => console.log(`The server is running on port 4000`));