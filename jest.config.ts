const { getJestProjects } = require('@nrwl/jest')

module.exports = { projects: [...getJestProjects(), '<rootDir>/apps/coast2coast'] }
