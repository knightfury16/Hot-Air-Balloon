import P5 from "p5";


export class Spike {
	p5: P5; //p5 p5
	spawnPos: P5.Vector; //spawn pos of the spike, p5.vector
	spikeImgWidth:number; //spike image width
	spikeMaxLength: number; //spike maximum length possible
	readonly spawnYOffset = -10; //starting y pos of the spike spawn
	readonly spikeImgHeight = 8; //spike image height
	readonly spikeMinLength = 100; //spike minimum length possible

	constructor(p5: P5){
		this.p5 = p5;
		this.spikeMaxLength = this.p5.width/2;
		this.spawnPos = this.p5.createVector(this.p5.random(0,this.spikeMaxLength),this.spawnYOffset);
		this.spikeImgWidth = this.getLength();
	}

	update(){
		this.spawnPos.y += global.speed;
	}

	show(spikeImg: P5.Image){
		this.p5.image(spikeImg,this.spawnPos.x,this.spawnPos.y,this.spikeImgWidth,this.spikeImgHeight);
	}

	private getLength():number{
		return this.p5.random(this.spikeMinLength,this.spikeMaxLength);
	}

}