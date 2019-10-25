import { GraphQLServer } from "graphql-yoga";

// String, Boolean, Int, Float, ID

const data = [
    {
        title: "wtf",
        body: "Yooo"
    },
    {
        title: "hiii",
        body: "hellooo"
    }
];

//Type definitions (schema)
const typeDefs = `
    type Query{
        posts(query: String): [Post!]!
        post: Post
    } 
    type Post{
        title: String!
        body: String!
    }
`;

//Resolvers
const resolvers = {
    Query: {
        posts(parent, args, ctx, info) {
            if (args.query) {
                return data.filter(post =>
                    post.body.toLowerCase().includes(args.query)
                );
            }
            return data;
        },
        post() {
            return {
                title: "gg",
                body: "wtf"
            };
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log("The server is up");
});
