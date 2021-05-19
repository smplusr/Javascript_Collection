/* load scripts in this file (link between engine and assets) */
//special rule script
system.load('script', 'script-asset-rules', '../assets/rules.js', system.dom.head)

// Reference object
system.load('script', 'script-reference-general', '../assets/references/reference-general.js', system.dom.head)
system.load('script', 'script-reference-player', '../assets/references/reference-player.js', system.dom.head)
system.load('script', 'script-reference-particle', '../assets/references/reference-particle.js', system.dom.head)
system.load('script', 'script-reference-buffs', '../assets/references/reference-buffs.js', system.dom.head)

// dummy objects
system.load('script', 'script-object-dummy-wall', '../assets/objects/dummy-wall.js', system.dom.head)
system.load('script', 'script-object-dummy-pushable', '../assets/objects/dummy-pushable.js', system.dom.head)
system.load('script', 'script-object-dummy-player', '../assets/objects/dummy-player.js', system.dom.head)
system.load('script', 'script-object-dummy-move-particle', '../assets/objects/dummy-move-particle.js', system.dom.head)
system.load('script', 'script-object-dummy-fire', '../assets/objects/dummy-fire.js', system.dom.head)
system.load('script', 'script-object-dummy-water', '../assets/objects/dummy-water.js', system.dom.head)	
system.load('script', 'script-object-dummy-cloud-particle', '../assets/objects/dummy-cloud-particle.js', system.dom.head)
system.load('script', 'script-object-dummy-lightning', '../assets/objects/dummy-lightning.js', system.dom.head)

// TESTING
system.load('script', 'script-object-dummy-player-testing', '../assets/objects/dummy-player-testing.js', system.dom.head)
system.load('script', 'script-object-dummy-patch', '../assets/objects/dummy-patch.js', system.dom.head)
system.load('script', 'script-object-dummy-effect-magic-wall', '../assets/objects/dummy-effect-magic-wall.js', system.dom.head)
system.load('script', 'script-object-dummy-debugger-fps', '../assets/objects/dummy-debugger-fps.js', system.dom.head)

//scenes must be called after the objects
util.sleep(100).then(() => {system.load('script', 'script-scene-dummy-scene-05', '../assets/scenes/dummy-scene-05.js', system.dom.head)})
