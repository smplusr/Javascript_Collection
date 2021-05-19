/* root and core modules are declared in index.html */
// main modules
system.load('script', 'script-input', 'modules/input.js', system.dom.head)
system.load('script', 'script-item', 'modules/item.js', system.dom.head)

// scenic asset
system.load('script', 'script-scenic', '../scenic.js', system.dom.head)

// debugging module | need to be loaded after scenic
system.load('script', 'script-debug', 'modules/debug.js', system.dom.head)
