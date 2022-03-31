const axios = require ('axios');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    // All properties have name and type
    fields: () => ({
        
        id: { type: GraphQLString },
        launchpad: { type: GraphQLString },
        flight_number: { type: GraphQLInt },
        name: { type: GraphQLString },
        date_utc: { type: GraphQLString },
        date_local: { type: GraphQLString },
        success: { type: GraphQLBoolean },
        details: { type: GraphQLString },
        rocket: { type: GraphQLString },
        failures: { type: FailuresType },
        links: { type: LinksType }
    })
});

// Links Type
const LinksType = new GraphQLObjectType({
    name: 'Links',
    fields: () => ({

        presskit: { type: GraphQLString },
        webcast: { type: GraphQLString },
        article: { type: GraphQLString },
        wikipedia: { type: GraphQLString },
        patch: { type: PatchsType }
    })
});

// Patchs Type
const PatchsType = new GraphQLObjectType({
    name: 'Patch',
    fields: () => ({

        small: { type: GraphQLString },
        large: { type: GraphQLString }
    })
});

// Failures Type
const FailuresType = new GraphQLObjectType({
    name: 'Failures',
    fields: () => ({

        time: { type: GraphQLInt },
        altitude: { type: GraphQLInt },
        reason: { type: GraphQLString }
    })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({

        id: { type: GraphQLString },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        active: { type: GraphQLString },
        stages: { type: GraphQLString },
        boosters: { type: GraphQLString },
        cost_per_launch: { type: GraphQLString },
        success_rate_pct: { type: GraphQLString },
        first_flight: { type: GraphQLString },
        country: { type: GraphQLString },
        company: { type: GraphQLString },
        wikipedia: { type: GraphQLString },
        description: { type: GraphQLString },
        flickr_images: { type: new GraphQLList(GraphQLString) }
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'This is Rootquery',
    fields: () => ({
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(_parent, _args) {
                return axios
                .get('https://api.spacexdata.com/v5/launches')
                .then(res => res.data);
            }
        },
        launch: {
            type: LaunchType,
            args: {
                id: { type: GraphQLString },
            },
            resolve(_parent, args) {
                return axios
                .get(`https://api.spacexdata.com/v5/launches/${args.id}`)
                .then(res => res.data);
            }
        },
        links: {
            type: LinksType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(_parent, args) {
                return axios
                .get(`https://api.spacexdata.com/v5/launches/${args.id}`)
                .then(res => res.data);
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve(_parent, _args) {
                return axios
                .get('https://api.spacexdata.com/v4/rockets')
                .then(res => res.data);
            }
        },
        rocket: {
            type: RocketType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(_parent, args) {
                return axios
                .get(`https://api.spacexdata.com/v4/rockets/${args.id}`)
                .then(res => res.data);
            }
        },
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});