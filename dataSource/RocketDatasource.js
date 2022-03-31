const axios = require ('axios');

const { DataSource } = require('apollo-datasource');
const DataLoader = require('dataloader');

class RocketDatasource extends DataSource {

    constructor() {
        super();
    }

    initialize(config) {
        this.context = config.context;
    }

    async findAllRockets() {
        try {
            const rockets = await axios
            .get('https://api.spacexdata.com/v4/rockets')
            .then(res => res.data);
            // console.table(rockets);
            return rockets;

        } catch (error) {
            throw error
        }
    }

    async findRocket(id) {
        try {
            const rocket = await axios
            .get(`https://api.spacexdata.com/v4/rockets/${id}`)
            .then(res => res.data);
            // console.table(rocket);
            return rocket;

        } catch (error) {
            throw error
        }
    }
};

module.exports = RocketDatasource;