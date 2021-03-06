'use strict';

const path = require('path');
const tryRequire = require('try-require');
const pkg = tryRequire(path.join(__dirname, '../package')) || tryRequire(path.join(__dirname, '../../package'));
const semver = require('semver');

const version = pkg.engines.node;
if (!semver.satisfies(process.version, version)) {
  throw new Error(`\x1b[31m@alicloud/fun required node version ${version} not satisfied with current version ${process.version}.\x1b[0m\n`);
}
