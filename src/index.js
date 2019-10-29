import { GraphQLServer } from "graphql-yoga";

// String, Boolean, Int, Float, ID
const posts = [
    {
        id: 123,
        title: "hello",
        body: "hello123",
        author: "francis"
    },
    {
        id: 456,
        title: "hell2o",
        body: "hello123",
        author: "asdf"
    },
    {
        id: 789,
        title: "hell3o",
        body: "hello123",
        author: "treb"
    },
    {
        id: 1235,
        title: "hello5",
        body: "hello12323",
        author: "hgsew"
    }
];

const typeDefs = `
    type Query {
        posts(filter: String): [Post!]!
    }
    type Post {
        id: Int!
        title: String!
        body: String!
        author: String!
    }
`;

const resolvers = {
    Query: {
        posts(_, args) {
            if (args.filter) {
                return posts.filter(post => post.title.includes(args.filter));
            }
            return posts;
        }
    }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start();
