system.call(
	new dummyPlayer(
		{
			x: 500,
			y: 500
		},
		{
			width: 75,
			height: 75
		},
		'purple',
		'dummy player collider flamable',
		'Dummy Player'
	),
	'layer-dummy'
)
system.call(
	new dummyFpsDebugger(
		{
			x: 0,
			y: 75
		},
		{
			width: 75,
			height: 75
		},
		'red',
		'dummy debugger',
		'Dummy FPS Debugger'
	),
	'layer-dummy'
)
system.call(
	new dummyPatch(
		{
			x: 100,
			y: 200 
		},
		{
			width: 25,
			height: 150
		},
		{
			r: 50,
			g: 25,
			b: 0
		},
		{
			back: true,
			coll: true
		},
		'dummy patch static flamable tree chunk',
		'Dummy Tree Chunk',
		util.rng(2**31)
	),	 
	'dummy-layer-ground'
)

system.call(
	new dummyPatch(
		{
			x: 100 - 100 / 4,
			y: 100
		},
		{
			width: 100,
			height: 100
		},
		{
			r: 0,
			g: 250,
			b: 0
		},
		{
			back: false,
			coll: false
		},
		'dummy patch flamable tree leaves',
		'Dummy Tree Leaves',
		util.rng(2**31)
	),	 
	'dummy-layer-ground'
)
