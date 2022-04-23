export class Coin{
	instance: any ; //p5 instance
	spawnPos: any; //spawn position of the coin
	size: number; // size of the coin image
	coinSpeed = 5; //not using it anymore, using the instance.speed value to change speed dynamically.

	constructor(instance:any,x:number,y:number, size:number){
		this.instance = instance;
		this.spawnPos = this.instance.createVector(x,y);
		this.size = size;
	}

	update(){
		this.spawnPos.y += this.instance.speed;
	}

	show<T>(coinImg: T){
		this.instance.image(coinImg,this.spawnPos.x,this.spawnPos.y, this.size,this.size);
	}

	offScreen(){
		return this.spawnPos.y > this.instance.height;
	}

	hit(ballon:any){
		// custom circle object to tight bound the collision with the ballon.
		let cirPos = {
			x: ballon.pos.x + (ballon.balloonImgWidth/2),
			y: ballon.pos.y + (ballon.balloonImgWidth/2),
			d: ballon.balloonImgWidth
		}
		//collideRectCircle method from p5collide2D library.
		return this.instance.collideRectCircle(this.spawnPos.x,this.spawnPos.y,this.size,this.size,cirPos.x,cirPos.y,cirPos.d);
	}

}