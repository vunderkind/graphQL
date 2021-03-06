let {graphql, buildSchema} = require('graphql');

let schema = buildSchema(`
    type Query {
        hello: String
    }
    `);

let root = {
    hello: () => {
        return 'Mogwai does GraphQL!';
    },
};

graphql(schema, '{hello}', root).then((response)=> {
    console.log(response);
})