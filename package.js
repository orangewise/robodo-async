Package.describe({
  name: 'robodo:async',
  summary: 'Meteor wrapper for npm async',
  version: '0.9.0',
  git: 'https://github.com/orangewise/robodo-async',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.add_files('async.js');
});

