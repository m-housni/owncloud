// path is a library that helps you work with file and directory paths
const path = require('path')

// config is a file that contains the configuration for the tests
const { config } = require('./tests/e2e/config')

// fs is a library that helps you work with the file system
const fs = require('fs')

// Create the report directory if it does not exist
if (!fs.existsSync(config.reportDir)) {
  fs.mkdirSync(path.join(config.reportDir, 'cucumber'), { recursive: true })
}

// This is the configuration for the cucumber tests
module.exports = {
  e2e: `
  --require ./tests/e2e/**/*.ts
  --retry ${config.retry}
  --require-module ts-node/register
  --format @cucumber/pretty-formatter
  --format json:${path.join(config.reportDir, 'cucumber', 'report.json')}
  --format message:${path.join(config.reportDir, 'cucumber', 'report.ndjson')}
  --format html:${path.join(config.reportDir, 'cucumber', 'report.html')}
  --publish-quiet
  --format-options ${JSON.stringify({
    snippetInterface: 'async-await',
    snippetSyntax: './tests/e2e/cucumber/environment/snippets-syntax.js'
  })}
  `
}
