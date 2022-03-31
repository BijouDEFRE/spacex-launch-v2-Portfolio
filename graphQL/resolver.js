module.exports = {

    Query: {

        launches(_, __, context) {
            return context.dataSources.launches.findAllLaunches();
        },

        launch(_, args, context) {
            return context.dataSources.launches.findLaunch(args.id);
        },

        rockets(_, __, context) {
            return context.dataSources.rockets.findAllRockets();
        },

        rocket(_, args, context) {
            return context.dataSources.rockets.findRocket(args.id);
        },
    }
};