const ghPages = require('gh-pages')

ghPages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/shockw4ver/shockw4ver.github.io'
})