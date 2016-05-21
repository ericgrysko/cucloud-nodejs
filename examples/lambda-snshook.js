'use strict';

var CUCloud = require('../index.js'),
    gitHubHookSns = CUCloud.plugins.gitHubHookSns;

// configure our use of CUCloud
CUCloud.config = {
    profileName: 'ssit-sb',
    schemaVersion: 1,
    schemaCreate: false
};

exports.handler = (event, context, callback) => {
    // init allows passing overrides
    return CUCloud.init({}).then((initResults) => {
        return CUCloud.getPluginSettings(gitHubHookSns.pluginName);

    }).then((pluginSettings) => {
        return gitHubHookSns.updateAll(pluginSettings);

    }).then((pluginResults) => {
        callback();
    });

}