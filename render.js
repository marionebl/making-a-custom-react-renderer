const {WordRenderer} = require('./word-renderer');

module.exports = render;

function render(element, target, callback) {
    WordRenderer.injectIntoDevTools({
        bundleType: 1,
        version: '1.0.0',
        renderPackageName: 'word-renderer',
        findHostInstanceByFiber: WordRenderer.findHostInstance
    });
}