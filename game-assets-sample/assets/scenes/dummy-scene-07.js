system.call(
	new dummyPlayer(
		{
			x: 100,
			y: 200
		},
		{
			width: 75,
			height: 75
		},
		'purple',
		'dummy player collider flamable',
		'DummyPlayer'
	),
	'layer-dummy'
)
system.call(
	dummyPlayerTesting(
		{
			x: 100,
			y: 400
		},
		{
			width: 75,
			height: 75
		},
		'Orange',
		'dummy player collider flamable',
		'DummyPlayer',
		5,
		5
	),
	'layer-dummy'
)

system.call(
	new dummyPushable(
		{
			x: 200,
			y: 200
		},
		{
			width: 75,
			height: 75
		},
		'yellow',
		'dummy pushable collider flamable',
		'Dummy Pushable',
		util.rng(2**31)
	),
	'layer-dummy'
)

system.call(
	new dummyWall(
		{
			x: 0,
			y: 200
		},
		{
			width: 75,
			height: 75
		},
		'rgba(0, 0, 0, 0)',
		'dummy static',
		'Dummy Wall',
		util.rng(2**31)
	),
	'layer-dummy'
)

system.call(
	new dummyFire(
		{
			x: 375,
			y: 275
		},
		{
			width: 2,
			height: 2
		},
		1000,
		'dummy fire',
		'Dummy Fire'
	),
	'layer-dummy'
)

system.call(
	new dummyWater(
		{
			x: 525,
			y: 200
		},
		{
			width: 2,
			height: 2
		},
		1000,
		'dummy water',
		'Dummy Water'
	), 
	'layer-dummy'
)

for(var i = 0; i < 20; i++){
	util.sleep(i * 1000).then(() => {
		system.call(
			new dummyLightning(
				{
					x: 700,
					y: -250
				},
				{
					width: 0,
					height: 0
				},
				'dummy lightning',
				'Dummy Lightning ' + String(i)
			),
			'layer-dummy'
		)	
	})
}
