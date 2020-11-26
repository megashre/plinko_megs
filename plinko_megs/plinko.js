class Plinko{
	constructor(x,y){
		var options={
			'restitution':1.0,
			'isStatic':true,
			'friction':0,
			'density':0.4
		}
		this.body=Bodies.circle(x,y,5,options)
		this.radius=5;
		this.width=this.radius*2;
		this.height=this.radius*2;
		World.add(world,this.body)
	}
	display(){
		var pos=this.body.position
		push()
		fill("white")
		translate(pos.x,pos.y)
		//ellipseMode(RADIUS)
		ellipse(0,0,this.width,this.height);
		pop()
	}
}



