'use strict';

exports.ok = function(values, res) {
  var data = {
      'modules': values
  };
  res.json(data);
  res.end();
};