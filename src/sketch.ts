import P5 from "p5";
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
import {Audio} from "./types";
import { Coin } from "./Coin";
import { Background } from "./Background";
import "./styles.css";

global.speed = 5; //making the speed variable global


export const sketch = (p5: P5) => {

	let balloonImg: P5.Image;
	let coinImg: P5.Image;
	let spikeImg: P5.Image;
	let skyImg: P5.Image;
	let backgroundMusic: Audio;
	let collectCoin: Audio;
	let impact: Audio;

	let spikes: Spike[] = []; //Array to hold the spikes object
	let coins: Coin[] = []; //Array to hold the coins object
	let backgrounds: Background[] = []; //Array to hold the background images object
	let play = false; // Boolean to figure out if player started to play yet, then play the background music.
	let balloon: Balloon //Instance of the ballon object
	let scoreSystem: ScoreSystem; //Instance of the scoresystem object

	//preloading assets
	p5.preload = () => {
		balloonImg = p5.loadImage(ballon);
		coinImg = p5.loadImage(coin);
		spikeImg = p5.loadImage(spike);
		skyImg = p5.loadImage(sky);
		backgroundMusic = new Audio(bgMx);
		collectCoin = new Audio(coinMX);
		impact = new Audio(impactMX);
	}

	p5.setup = () => {
		let cnv = p5.createCanvas(420,550);
		Util.clickStop(p5, cnv, backgroundMusic); //util method to stop the game on canvas click.
		balloon = new Balloon(p5, p5.width/2,p5.height/2); //Instance of the ballon object
		scoreSystem = new ScoreSystem(p5); //Instance of the scoresystem object
		backgroundMusic!.volume = 0.2; //Background music play volume
		collectCoin!.volume = 0.3; //Coin collecting music play volume
		impact!.volume = 0.4; //Spike impact music play volume
		Util.create_background(p5,backgrounds);// Util function to create the background objects manually to start off the game.
	}

	p5.draw = () => {

		Util.applyBackground(p5, backgrounds, skyImg); //util function to move and instantiate the background dynamically, giving a parallax effect.
		balloon.show(balloonImg); //method to show the balloon image
		
		//Generate spikes and coins after every 50 frames
		if(p5.frameCount % 50 == 0 ){
			spikes.push(new Spike(p5));
			Util.generate_random_coin(p5,coins);
		}
		//change the speed of the game every 400 frames rougly 10 seconds
		if(p5.frameCount % 400 == 0){
			global.speed += 0.5;
		}

		if(Util.renderSpawnObjectAndCheckCollision(spikes,spikeImg,balloon,impact,scoreSystem)){
			coins.splice(0,coins.length);
			backgroundMusic!.pause();
			p5.noLoop();
		};
		
		Util.renderSpawnObjectAndCheckCollision(coins,coinImg,balloon,collectCoin,scoreSystem);
		
		scoreSystem.show(); //method to show the score
		playerControl(); //function for player control
	}
	
	let playerControl = () => {
		if (p5.keyIsDown(p5.LEFT_ARROW)) {
			balloon.moveLeft();
			if(!play){backgroundMusic!.play();play=true;}
		}
		
		if (p5.keyIsDown(p5.RIGHT_ARROW)) {
			balloon.moveRight();
			if(!play){backgroundMusic!.play();play=true;}
		}
		
	}

}