import P5 from "p5";

export class Background{

	p5: P5;
	spawnPos: P5.Vector;
	width: number;
	height: number;

	constructor(p5:P5, posX: number, posY: number){
		this.p5 = p5;
		this.spawnPos = p5.createVector(posX,posY);
		this.width = p5.width;
		this.height = p5.height;
	}

	update(){
		this.spawnPos.y += global.speed - 2;
	}

	show(skyImg:P5.Image){
		this.p5.image(skyImg,this.spawnPos.x,this.spawnPos.y,this.width,this.height);
	}

	offScreen(){
		return this.spawnPos.y > this.p5.height;
	}

}