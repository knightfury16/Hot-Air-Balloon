declare var p5: any;
import { Balloon } from "./Balloon";
import { Spike } from "./Spike";
import {ScoreSystem} from "./ScoreSystem";
import { Util } from "./utils";
import ballon from "../assets/Balloon.png";
import coin from "../assets/Coin.png";
import spike from "../assets/Spike.png";
import sky from "../assets/sky2.png";


const sketch = (p:any) => {

	p.preload = () => {
		p.balloonImg = p.loadImage(ballon);
		p.coinImg = p.loadImage(coin);
		p.spikeImg = p.loadImage(spike);
		p.skyImg = p.loadImage(sky);
	}

	p.setup = () => {
		p.cnv = p.createCanvas(400,500);
		Util.clickStop(p, p.cnv);
		p.sore = 0;
		p.spikes = []; 
		p.coins = [];
		p.backgrounds = [];
		p.balloon = new Balloon(p, p.width/2,p.height/2);
		p.scoreSystem = new ScoreSystem(p);
		Util.create_background(p);
		console.log(p);
	}

	p.draw = () => {

		Util.applyBackground(p);
		p.balloon.show(p.balloonImg);
		
		if(p.frameCount % 50 == 0 ){
			p.spikes.push(new Spike(p));
			Util.generate_random_coin(p,5,18);
		}

		
		for (let index = p.spikes.length - 1; index >= 0; index--) {
			p.spikes[index].show(p.spikeImg);
			p.spikes[index].update();	
			if(p.spikes[index].offScreen()){
				p.spikes.splice(index,1);
			}
			if(p.spikes[index].hit(p.balloon)){
				p.coins.splice(0,p.coins.length);
				p.scoreSystem.checkHighScore()
				p.scoreSystem.showGameOver();
				p.noLoop();
			}
		}
		

		for (let index = p.coins.length - 1; index >= 0; index--) {
			p.coins[index].show(p.coinImg);
			p.coins[index].update();	
			if(p.coins[index].offScreen()){
				p.coins.splice(index,1);
			}
			if(p.coins[index].hit(p.balloon)){
				p.scoreSystem.score++;
				p.coins.splice(index,1);
				// p.noLoop();
			}
		}

		p.scoreSystem.show();
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