'use strict';

const list = require('list-deps')
  , pkg = require('load-module-pkg')
  , _ = require('lodash')
  ;

module.exports = function listver(opt) {
  let deps = list()
    , record = {}
    ;
  opt = _.isPlainObject(opt) ? opt : {};
  if (opt.includeDev) {
    deps = _.assign({}, deps, list('devDependencies'));
  }
  if (opt.includeMain) {
    record[list('name')] = list('version');
  }
  _.forEach(deps, (ver, name) => {
    const info = pkg(name);
    record[info.name] = info.version;
  });
  if (opt.asArray) {
    return _.map(record, (version, name) => {
      return {
        name,
        version
      };
    });
  }
  return record;
};
