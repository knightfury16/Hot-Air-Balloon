export class Coin{
	instance: any ; 
	spawnPos: any;
	size: number;
	coinSpeed = 5;
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
		let cirPos = {
			x: ballon.pos.x + (ballon.balloonImgWidth/2),
			y: ballon.pos.y + (ballon.balloonImgWidth/2),
			d: ballon.balloonImgWidth
		}
		return this.instance.collideRectCircle(this.spawnPos.x,this.spawnPos.y,this.size,this.size,cirPos.x,cirPos.y,cirPos.d);
	}

	static changeSpeed(){
		
	}

}