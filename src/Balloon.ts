enum Direction{LEFT,RIGHT};

export class Balloon{
	
	pos: any; //pos value of the balloon
	instance: any; // p5 instance
	readonly balloonImgWidth = 50; //Balloon image width
	readonly balloonImgHeight = 80; //Balloon image height
	readonly balloonSpeed = 7; // Balloon speed
	readonly balloonLerpValue = 0.7; // Balloon movement lerp value
	readonly Direction = Direction; // Balloon direction of movement

	constructor(instance: any, x:number, y:number){
		this.instance = instance;
		this.pos = this.instance.createVector(x - (this.balloonImgWidth/2) ,y);
	}

	moveRight(){
		if(!this.checkConstrain(this.pos.x,Direction.RIGHT))this.pos.x = this.instance.lerp(this.pos.x,this.pos.x + this.balloonSpeed, this.balloonLerpValue);
	}

	moveLeft(){
		if(!this.checkConstrain(this.pos.x,Direction.LEFT))this.pos.x = this.instance.lerp(this.pos.x,this.pos.x - this.balloonSpeed, this.balloonLerpValue);
	}

	show<T>(balloonImg: T){
		this.instance.noFill();
		this.instance.strokeWeight(4);
		this.instance.image(balloonImg,this.pos.x,this.pos.y,this.balloonImgWidth,this.balloonImgHeight);
	}

	private checkConstrain(posValue:number, direction: Direction){
		if(direction === Direction.RIGHT && posValue + this.balloonSpeed > this.instance.width - this.balloonImgWidth)return true;
		else if(direction === Direction.LEFT && posValue - this.balloonSpeed < 0)return true;
		else return false;
	}

}