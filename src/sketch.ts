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

	//preloading assets
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
		
		Util.clickStop(p, p.cnv); //util method to stop the game on canvas click.
		// Util.frameCount(p); //util method to see the framerate.

		// Declaring the p instance variable, sort of like global variable since im passing this instance everywhere.
		p.spikes = []; //Array to hold the spikes object
		p.coins = []; //Array to hold the coins object
		p.backgrounds = []; //Array to hold the background images object
		p.play = false; // Boolean to figure out if player started to play yet, then play the background music.
		p.speed = 5; // speed variable to change the speed of the spikes, coins and background dynamically.
		p.balloon = new Balloon(p, p.width/2,p.height/2); //Instance of the ballon object
		p.scoreSystem = new ScoreSystem(p); //Instance of the scoresystem object
		p.backgroundMusic.volume = 0.2; //Background music play volume
		p.collectCoin.volume = 0.3; //Coin collecting music play volume
		p.impact.volume = 0.4; //Spike impact music play volume
		Util.create_background(p);// Util function to create the background objects manually to start off the game.
	}

	p.draw = () => {

		Util.applyBackground(p); //util function to move and instantiate the background dynamically, giving a parallax effect.
		p.balloon.show(p.balloonImg); //method to show the balloon image
		
		//Generate spikes and coins after every 50 frames
		if(p.frameCount % 50 == 0 ){
			p.spikes.push(new Spike(p));
			Util.generate_random_coin(p,5,18);
		}

		//change the speed of the game every 400 frames rougly 10 seconds
		if(p.frameCount % 400 == 0){
			p.speed += 0.5;
		}

		//render the spikes and check collision with the balloon
		// traversing from the back because we are using splice method to delete the object from the array
		for (let index = p.spikes.length - 1; index >= 0; index--) {
			p.spikes[index].show(p.spikeImg);
			p.spikes[index].update();	
			
			//if offscreen delete the spike
			if(p.spikes[index].offScreen()){
				p.spikes.splice(index,1);
			}

			//if balloon collide with any spike
			if(p.spikes[index].hit(p.balloon)){
				p.impact.play();
				p.coins.splice(0,p.coins.length);
				p.scoreSystem.checkHighScore()
				p.scoreSystem.showGameOver();
				p.backgroundMusic.pause();
				p.noLoop();
				// console.log("Hit");
			}
		}
		
		//render the coins and check for collision with the balloon
		// traversing from the back because we are using splice method to delete the object from the array
		for (let index = p.coins.length - 1; index >= 0; index--) {
			p.coins[index].show(p.coinImg);
			p.coins[index].update();	

			//if offscreen delete the spike
			if(p.coins[index].offScreen()){
				p.coins.splice(index,1);
			}
			//if ballon collide with any coin.
			if(p.coins[index].hit(p.balloon)){
				p.collectCoin.play();
				p.scoreSystem.score++;
				p.coins.splice(index,1);
			}
		}
		
		p.scoreSystem.show(); //method to show the score
		p.playerControl(); //function for player control

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