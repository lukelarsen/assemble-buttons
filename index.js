var assign  = require('object-assign');
var postcss = require('postcss');

var processors = [
    {
        plugin:    require('postcss-assemble-button-helper'),
        namespace: 'buttonHelper',
        defaults:  {}
    }
];

module.exports = postcss.plugin('assembleButtons', function (opts) {
    opts = assign({}, opts);

    var instance = postcss();

    processors.forEach(function (processor) {
        var namespaceOptions = processor.namespace in opts ? opts[processor.namespace] : opts;
        var processorOptions = {};

        processorOptions = assign({}, processor.defaults, namespaceOptions);

        if (namespaceOptions && !processorOptions.disable) {
            instance.use(processor.plugin(processorOptions));
        }
    });

    return instance;
});