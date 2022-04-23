declare var p5: any;
import { Balloon } from "./Balloon";
import { Spike } from "./Spike";
import {ScoreSystem} from "./ScoreSystem";
import { Util } from "./utils";
import ballon from "../assets/Balloon.png";
import coin from "../assets/Coin.png";
import spike from "../assets/Spike.png";
import sky from "../assets/sky2.png";
import bgMx from "../assets/background.mp3";
import coinMX from "../assets/coin.wav";
import impactMX from "../assets/impact.wav";
import "./styles.css";


const sketch = (p:any) => {

	p.preload = () => {
		p.balloonImg = p.loadImage(ballon);
		p.coinImg = p.loadImage(coin);
		p.spikeImg = p.loadImage(spike);
		p.skyImg = p.loadImage(sky);
		p.backgroundMusic = new Audio(bgMx);
		p.collectCoin = new Audio(coinMX);
		p.impact = new Audio(impactMX);
	}

	p.setup = () => {
		p.cnv = p.createCanvas(420,550);
		Util.clickStop(p, p.cnv);
		// Util.frameCount(p);
		p.sore = 0;
		p.spikes = []; 
		p.coins = [];
		p.backgrounds = [];
		p.play = false;
		p.balloon = new Balloon(p, p.width/2,p.height/2);
		p.scoreSystem = new ScoreSystem(p);
		p.backgroundMusic.volume = 0.2;
		p.collectCoin.volume = 0.3;
		p.impact.volume = 0.4;
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
				p.impact.play();
				p.coins.splice(0,p.coins.length);
				p.scoreSystem.checkHighScore()
				p.scoreSystem.showGameOver();
				p.backgroundMusic.pause();
				p.noLoop();
				console.log("Hit");
			}
		}
		

		for (let index = p.coins.length - 1; index >= 0; index--) {
			p.coins[index].show(p.coinImg);
			p.coins[index].update();	
			if(p.coins[index].offScreen()){
				p.coins.splice(index,1);
			}
			if(p.coins[index].hit(p.balloon)){
				p.collectCoin.play();
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
			if(!p.play){p.backgroundMusic.play();p.play=true;}
		}
		
		if (p.keyIsDown(p.RIGHT_ARROW)) {
			p.balloon.moveRight();
			if(!p.play){p.backgroundMusic.play();p.play=true;}
		}
		
	}

}

const mySketch = new p5(sketch);