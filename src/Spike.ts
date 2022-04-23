export class Spike{
	instance: any;
	spawnPos:any;
	spawnYOffset = -10;
	spikeSpeed = 5;
	spikeImgWidth:number;
	spikeImgHeight = 8;
	spikeMinLength = 100;
	spikeMaxLength: number;

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
		let cirPos = {
			x: ballon.pos.x + (ballon.balloonImgWidth/2),
			y: ballon.pos.y + (ballon.balloonImgWidth/2),
			d: ballon.balloonImgWidth - 5 // 5 is offset value 
		}
		return this.instance.collideRectCircle(this.spawnPos.x,this.spawnPos.y,this.spikeImgWidth,this.spikeImgHeight,cirPos.x,cirPos.y,cirPos.d);
	}


}