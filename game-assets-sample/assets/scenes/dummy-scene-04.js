system.call(
	new dummyPlayer(
		{
			x: 0,
			y: 0
		},
		{
			width: 75,
			height: 75
		},
		'purple',
		'dummy player collider',
		'Dummy Player',
		util.rng(2**31)
	),
	'layer-dummy'
)
