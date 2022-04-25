import P5 from "p5";
import { Coin } from "./Coin";
import { Spike } from "./Spike";
import { CollisionSystem } from "./CollisionSystem";

enum Direction{LEFT,RIGHT};

export class Balloon extends CollisionSystem{
	
	pos: P5.Vector; //pos value of the balloon
	p5: P5; // p5 
	readonly balloonImgWidth = 50; //Balloon image width
	readonly balloonImgHeight = 80; //Balloon image height
	readonly balloonSpeed = 8; // Balloon speed
	readonly balloonLerpValue = 0.7; // Balloon movement lerp value
	readonly Direction = Direction; // Balloon direction of movement

	constructor(p5: P5, x:number, y:number){
		super(p5);
		this.p5 = p5;
		this.pos = this.p5.createVector(x - (this.balloonImgWidth/2) ,y);
	}

	moveRight(){
		if(!this.checkConstrain(this.pos.x,Direction.RIGHT))this.pos.x = this.p5.lerp(this.pos.x,this.pos.x + this.balloonSpeed, this.balloonLerpValue);
	}

	moveLeft(){
		if(!this.checkConstrain(this.pos.x,Direction.LEFT))this.pos.x = this.p5.lerp(this.pos.x,this.pos.x - this.balloonSpeed, this.balloonLerpValue);
	}

	show(balloonImg: P5.Image){
		this.p5.image(balloonImg,this.pos.x,this.pos.y,this.balloonImgWidth,this.balloonImgHeight);
	}

	private checkConstrain(posValue:number, direction: Direction){
		if(direction === Direction.RIGHT && posValue + this.balloonSpeed > this.p5.width - this.balloonImgWidth)return true;
		else if(direction === Direction.LEFT && posValue - this.balloonSpeed < 0)return true;
		else return false;
	}


	hit<T>(object: T){
		let offsetValue = 5;
		if(object instanceof Coin){offsetValue = 0;}
		let cirPos = {
			x: this.pos.x + (this.balloonImgWidth/2),
			y: this.pos.y + (this.balloonImgWidth/2),
			d: this.balloonImgWidth - offsetValue // 5 is offset value,that is how tight.
		}
		if(object instanceof Spike){
			return this.collideRectCircle(object.spawnPos.x,object.spawnPos.y,object.spikeImgWidth,object.spikeImgHeight,cirPos.x,cirPos.y,cirPos.d);
		}
		if(object instanceof Coin){
			return this.collideRectCircle(object.spawnPos.x,object.spawnPos.y,object.size,object.size,cirPos.x,cirPos.y,cirPos.d);
		}
	}

}