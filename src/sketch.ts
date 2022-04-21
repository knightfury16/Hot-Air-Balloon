declare var p5: any;
// declare var p5.collide2d: any;
import { Balloon } from "./Balloon";
import { Coin } from "./Coin";
import { Spike } from "./Spike";

// console.log(collide2d);

const sketch = (p:any) => {

	p.preload = () => {
		p.balloonImg = p.loadImage('./assets/Balloon.png');
		p.coinImg = p.loadImage('./assets/Coin.png');
		p.spikeImg = p.loadImage('./assets/Spike.png');
	}

	p.setup = () => {
		let cnv = p.createCanvas(400,500);
		p.spikes = [];
		p.balloon = new Balloon(p, p.width/2,p.height/2);
		p.coin = new Coin(p);
	}

	p.draw = () => {
		p.background(51);

		if(p.frameCount % 50 == 0 ){
			p.spikes.push(new Spike(p));
		}

		for (let index = p.spikes.length - 1; index >= 0; index--) {
			p.spikes[index].show(p.spikeImg);
			p.spikes[index].update();	
			if(p.spikes[index].offScreen()){
				p.spikes.splice(index,1);
			}
			if(p.spikes[index].hit(p.balloon)){
				console.log("Game over");
				p.noLoop();
			}
		}

		p.balloon.show(p.balloonImg);
		p.coin.show(p.coinImg);
		p.playerControl();
	}

	
	
	p.playerControl = () => {
		if (p.keyIsDown(p.LEFT_ARROW)) {
			p.balloon.moveLeft();
		}
		
		if (p.keyIsDown(p.RIGHT_ARROW)) {
			p.balloon.moveRight();
		}
		
	}
}

const mySketch = new p5(sketch);