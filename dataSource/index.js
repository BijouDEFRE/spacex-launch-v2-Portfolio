const LaunchDataSource = require('./LaunchDataSource');
const RocketDataSource = require('./RocketDataSource');

module.exports = {
    launches: new LaunchDataSource(),
    rockets: new RocketDataSource()
};