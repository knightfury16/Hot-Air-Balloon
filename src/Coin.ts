import P5 from "p5";

export class Coin{
	p5: P5 ; //p5 p5
	spawnPos: P5.Vector; //spawn position of the coin
	readonly size: number; // size of the coin image

	constructor(p5: P5, x: number, y: number, size: number){
		this.p5 = p5;
		this.spawnPos = this.p5.createVector(x,y);
		this.size = size;
	}

	update(){
		this.spawnPos.y += global.speed;
	}

	show(coinImg: P5.Image){
		this.p5.image(coinImg,this.spawnPos.x,this.spawnPos.y, this.size,this.size);
	}

}