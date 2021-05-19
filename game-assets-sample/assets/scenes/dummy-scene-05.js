/*
system.call(
	dummyFpsDebugger(
		{
			x: 10, 
			y: 35
		},
		{
			width: 35,
			height: 35
		},
		'red',
		'dummy fps debugger collider',
		'Dummy FPS Debugger'
	),
	'layer-dummy'
)
for(var i = 1; i < 5; i++){
	system.call(
		new dummyPushable(
			{
				x: 700,
				y: 100 * i
			},
			{
				width: 75,
				height: 75
			},
			'yellow', 
			'dummy pushable collider',
			'Dummy Pushable',
			util.rng(2**31)
		),
		'layer-dummy'
	)
}

system.call(
	new dummyWater(
		{
			x: 300 + 40,
			y: 300 - 125
		},
		{
			width: 2,
			height: 2
		},
		Number.POSITIVE_INFINITY,
		'dummy water',
		'Dummy Water',
	),
	'layer-dummy'
)
system.call(
	new dummyFire(
		{
			x: 300 + 40,
			y: 300 + 175
		},
		{
			width: 2,
			height: 2
		},
		Number.POSITIVE_INFINITY,
		'dummy fire',
		'Dummy Fire',
	),
	'layer-dummy'
)
*/

for(var i = 1; i < 4; i++){
	system.call(
		new dummyPatch(
			{
				x: 200,
				y: 200
			},
			{
				width: 300,
				height: 300
			},
			{
				r: 75,
				g: 75,
				b: 75
			},
			{
				back: false,
				coll: false,
				scale: 100
			},
			'dummy patch ground',
			'Dummy Ground'
		),
		'layer-ground'
	)
}
system.call(
	new dummyPlayer(
		{
			x: 700 + 50,
			y: 300 + 25 / 2
		},
		{
			width: 75,
			height: 75
		},
		'purple',
		'dummy player flamable collider', 
		'Dummy Player',
		util.rng(2**31)
	),
	'layer-dummy'
)
for(var i = 1; i < 3; i++){	
	system.call(
		new dummyPatch(
			{
				x: 500,
				y: 200 * i
			},
			{
				width: 100,
				height: 100
			},
			{
				r: 25,
				g: 25,
				b: 25
			},
			{
				back: true,
				coll: true
			},
			'dummy patch wall',
			'Dummy Wall'
		),
		'layer-wall'
	)
}
for(var i = 1; i < 6; i++){	
	system.call(
		new dummyPatch(
			{
				x: 100 * i,
				y: 100
			},
			{
				width: 100,
				height: 100
			},
			{
				r: 25,
				g: 25,
				b: 25
			},
			{
				back: true,
				coll: true
			},
			'dummy patch wall',
			'Dummy Wall'
		),
		'layer-wall'
	)
}
for(var i = 1; i < 6; i++){	
	system.call(
		new dummyPatch(
			{
				x: 100 * i,
				y: 500
			},
			{
				width: 100,
				height: 100
			},
			{
				r: 25,
				g: 25,
				b: 25
			},
			{
				back: true,
				coll: true
			},
			'dummy patch wall',
			'Dummy Wall'
		),
		'layer-wall'
	)
}
for(var i = 1; i < 6; i++){	
	system.call(
		new dummyPatch(
			{
				x: 100,
				y: 100 * i
			},
			{
				width: 100,
				height: 100
			},
			{
				r: 25,
				g: 25,
				b: 25
			},
			{
				back: true,
				coll: true
			},
			'dummy patch wall',
			'Dummy Wall'
		),
		'layer-wall'
	)
}

