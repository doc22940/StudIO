const git = require('isomorphic-git');
const fs = require('fs');
git.plugins.set('fs', fs)
