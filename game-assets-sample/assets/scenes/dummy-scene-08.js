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


for(var i = 6; i < 10; i++){
	for(var j = 0; j < 4; j++){
		system.call(
			new dummyPatch(
				{
					x: 100 * j,
					y: 100 * i
				},
				{
					width: 100,
					height: 100
				},
				{
					r: 000,
					g: 200,
					b: 000
				},
				{
					back: true,
					coll: true
				},
				'dummy patch',
				'Dummy Patch' + String(i),
				util.rng(2**31)
			),	 
			'dummy-layer-ground'
		)
	}
}

for(var i = 0; i < 4; i++){
	for(var j = 6; j < 10; j++){
		system.call(
			new dummyPatch(
				{
					x: 100 * j,
					y: 100 * i
				},
				{
					width: 100,
					height: 100
				},
				{
					r: 200,
					g: 000,
					b: 000
				},
				{
					back: false,
					coll: false
				},
				'dummy patch',
				'Dummy Patch' + String(i),
				util.rng(2**31)
			),	 
			'dummy-layer-ground'
		)
	}
}

for(var i = 0; i < 4; i++){
	for(var j = 0; j < 4; j++){
		system.call(
			new dummyEffectMagicWall(
				{
					x: 100 * j,
					y: 100 * i
				},
				{
					width: 100,
					height: 100
				},
				{
					r: 123,
					g: 456,
					b: 789
				},
				'dummy patch',
				'Dummy Patch' + String(i),
				util.rng(2**31)
			),	 
			'dummy-layer-ground'
		)
	}
}
