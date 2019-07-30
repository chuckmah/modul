var config = require("./../../jest.config");

config.rootDir = './../../';
config.roots = ["<rootDir>/conf/storybook"];
config.setupFiles = [
    "<rootDir>/tests/polyfills.js"
];

module.exports = config;
