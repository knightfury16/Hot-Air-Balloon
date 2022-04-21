export class Coin{
	instance: any ; 
	spawnPos: any;
	size: number;
	coinSpeed = 4;
	constructor(instance:any,x:number,y:number, size:number){
		this.instance = instance;
		this.spawnPos = this.instance.createVector(x,y);
		this.size = size;
	}

	update(){
		this.spawnPos.y += this.coinSpeed;
	}

	show<T>(coinImg: T){
		this.instance.image(coinImg,this.spawnPos.x,this.spawnPos.y, this.size,this.size);
	}

	offScreen(){
		return this.spawnPos.y > this.instance.height;
	}

	hit(ballon:any){
		return this.instance.collideRectRect(this.spawnPos.x,this.spawnPos.y,this.size,this.size,ballon.pos.x,ballon.pos.y,ballon.balloonImgWidth,ballon.balloonImgHeight);
	}

	
}