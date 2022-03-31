// instantiate a pool outside of your hotpath
const baseURL = 'https://api.spacexdata.com/v4/'
const pool = new Pool(baseURL)

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            spacexAPI: new SpacexAPI(baseURL, pool),
        }
    },
})
