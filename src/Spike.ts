export class Spike{
	instance: any; //p5 instance
	spawnPos:any; //spawn pos of the spike, p5.vector
	spawnYOffset = -10; //starting y pos of the spike spawn
	spikeSpeed = 5; //not using it anymore
	spikeImgWidth:number; //spike image width
	spikeImgHeight = 8; //spike image height
	spikeMinLength = 100; //spike minimum length possible
	spikeMaxLength: number; //spike maximum length possible

	constructor(instance:any){
		this.instance = instance;
		this.spikeMaxLength = this.instance.width/2;
		this.spawnPos = this.instance.createVector(this.instance.random(0,this.spikeMaxLength),this.spawnYOffset);
		this.spikeImgWidth = this.getLength();
	}

	update(){
		this.spawnPos.y += this.instance.speed;
	}

	show<T>(spikeImg: T){
		this.instance.image(spikeImg,this.spawnPos.x,this.spawnPos.y,this.spikeImgWidth,this.spikeImgHeight);
	}

	private getLength():number{
		return this.instance.random(this.spikeMinLength,this.spikeMaxLength);
	}

	offScreen(){
		return this.spawnPos.y > this.instance.height;
	}

	hit(ballon:any){
		//custom circle object to tight bound the collision
		let cirPos = {
			x: ballon.pos.x + (ballon.balloonImgWidth/2),
			y: ballon.pos.y + (ballon.balloonImgWidth/2),
			d: ballon.balloonImgWidth - 5 // 5 is offset value 
		}
		//collideRectCircle method from p5collide2D library.
		return this.instance.collideRectCircle(this.spawnPos.x,this.spawnPos.y,this.spikeImgWidth,this.spikeImgHeight,cirPos.x,cirPos.y,cirPos.d);
	}


}