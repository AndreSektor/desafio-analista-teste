const cucumber = require("cypress-cucumber-preprocessor").default; // eslint-disable-line

const fs = require('fs-extra')
const path = require('path')
function getConfigurationByFile (file) {
  const pathToConfigFile = path.resolve(__dirname, '..', 'config', `${file}.json`)

  return fs.readJsonSync(pathToConfigFile);
};

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  
  const file = config.env.configFile || 'develop'
  return getConfigurationByFile(file);
};
