// next.config.js
const withSass = require('@zeit/next-sass')

module.exports = withSass({
    webpack: config => {
    // Fix npm packages that depend on `fs` module
        config.node = { fs: 'empty' }

    // Add base directory to modules, to allow imports like `import 'components/nav'`
        config.resolve.modules = ['.', './node_modules']

        return config
    }
})
