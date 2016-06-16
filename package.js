Package.describe({
    name: 'universe:buckets-blaze-helpers',
    version: '1.0.1',
    // Brief, one-line summary of the package.
    summary: 'Sets of helpers that improves work with buckets in blaze templates',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/vazco/universe-buckets-blaze-helpers',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.2.4');
    api.use(['ecmascript', 'universe:buckets@1.0.2', 'templating', 'reactive-var']);
    api.mainModule('index.js');
});
