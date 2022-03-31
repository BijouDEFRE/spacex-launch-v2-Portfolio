const axios = require ('axios');

const { DataSource } = require('apollo-datasource');
const DataLoader = require('dataloader');

class LaunchDatasource extends DataSource {

    constructor() {
        super();
    }

    initialize(config) {
        this.context = config.context;
    }

    async findAllLaunches() {
        try {
            const launches = await axios
            .get('https://api.spacexdata.com/v5/launches')
            .then(res => res.data);
            // console.log(launches)
            return launches;

        } catch (error) {
            throw error
        }
    }

    async findLaunch(id) {
        try {
            const launch = await axios
            .get(`https://api.spacexdata.com/v5/launches/${id}`)
            .then(res => res.data);
            // console.log(launch);
            return launch;

        } catch (error) {
            throw error
        }
    }
    // async findLaunch(id) {
    //     try {
    //         const launch = await axios
    //         .get(`https://api.spacexdata.com/v4/launches/${id}`)
    //         .then(res => res.data);
    //         // console.log(launch);
    //         return launch;

    //     } catch (error) {
    //         throw error
    //     }
    // }
};

module.exports = LaunchDatasource;