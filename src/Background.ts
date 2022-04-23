export class Background{

	instance: any;
	spawnPos: any;
	width: number;
	height: number;
	bgSpeed = 3; //not using it anymore

	constructor(instance:any, posX: number, posY: number){
		this.instance = instance;
		this.spawnPos = instance.createVector(posX,posY);
		this.width = instance.width;
		this.height = instance.height;
	}

	update(){
		this.spawnPos.y += this.instance.speed - 2;
	}

	show(){
		this.instance.image(this.instance.skyImg,this.spawnPos.x,this.spawnPos.y,this.width,this.height);
	}

	offScreen(){
		return this.spawnPos.y > this.instance.height;
	}

}