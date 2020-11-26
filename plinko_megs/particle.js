class Particle{
	constructor(x,y){
		var options={
			'restitution':1.0,
			'isStatic':false,
			'friction':0,
			'density':0.4
		}
		this.body=Bodies.circle(x,y,5,options)
		this.radius=5
		this.width=this.radius*2;
		this.height=this.radius*2;
		this.color=color(random(0,255),random(0,255),random(0,255));
		World.add(world,this.body)
	}
	display(){
		var pos=this.body.position
		push()
		fill(this.color)
		translate(pos.x,pos.y)
		//ellipseMode(RADIUS)
		ellipse(0,0,this.width,this.height);
		pop()
	}
}



