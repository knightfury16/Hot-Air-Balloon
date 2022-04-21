declare var p5: any;
import { Balloon } from "./Balloon";
import { Coin } from "./Coin";
import { Spike } from "./Spike";

const sketch = (p:any) => {

	p.preload = () => {
		p.balloonImg = p.loadImage('./assets/Balloon.png');
		p.coinImg = p.loadImage('./assets/Coin.png');
	}

	p.setup = () => {
		let cnv = p.createCanvas(400,500);
		p.balloon = new Balloon(p, p.width/2,p.height/2);
		p.coin = new Coin(p);
	}

	p.draw = () => {
		p.background(51);
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