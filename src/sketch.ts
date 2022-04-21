declare var p5: any;
// declare var p5.collide2d: any;
import { Balloon } from "./Balloon";
import { Coin } from "./Coin";
import { Spike } from "./Spike";
import {ScoreSystem} from "./ScoreSystem"

// console.log(collide2d);
let score = 0;
localStorage.setItem("HighScore", '0');

const sketch = (p:any) => {

	p.preload = () => {
		p.balloonImg = p.loadImage('./assets/Balloon.png');
		p.coinImg = p.loadImage('./assets/Coin.png');
		p.spikeImg = p.loadImage('./assets/Spike.png');
	}

	p.setup = () => {
		let cnv = p.createCanvas(400,500);
		p.sore = 0;
		p.spikes = [];
		p.coins = [];
		p.balloon = new Balloon(p, p.width/2,p.height/2);
		p.scoreSystem = new ScoreSystem(p);
	}

	p.draw = () => {
		p.background(51);


		if(p.frameCount % 50 == 0 ){
			p.spikes.push(new Spike(p));
		}

		if(p.frameCount % 50 == 0){
			p.generate_random_coin(5, 18);
			// console.log(p.coins.length);
		}

		for (let index = p.spikes.length - 1; index >= 0; index--) {
			p.spikes[index].show(p.spikeImg);
			p.spikes[index].update();	
			if(p.spikes[index].offScreen()){
				p.spikes.splice(index,1);
			}
			if(p.spikes[index].hit(p.balloon)){
				// console.log("Game over");
				if(p.scoreSystem.score > parseInt(localStorage.getItem('HighScore')!))
				{
					localStorage.setItem('HighScore',JSON.stringify(p.scoreSystem.score));
				}
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
				// console.log(p.scoreSystem.score);
				// p.noLoop();
			}
		}
		

		p.balloon.show(p.balloonImg);
		p.scoreSystem.show();
		p.playerControl();
	}

	p.generate_random_coin = (number_of_coin:number,radius:number) => {

		for (let i = 0; i < number_of_coin; i++) {
	
			let temp_r = radius;
			let x: number;
			let y: number;
			let r: number;
			//Creating a temp circle object to check if it overlaps with the existing circle object in the canvas.
			let cir = {
				x: p.random(radius, p.width - radius),
				y: p.random(-150, 0),
				r: temp_r
			};
	
			let overlap = false;
	
			//Checking with the existing circles objects if it overlaps.
			for (let j = 0; j < p.coins.length; j++) {
				let other = p.coins[j];
				if (p.dist(cir.x, cir.y, other.spawnPos.x, other.spawnPos.y) < other.size + cir.r + 5) {
					i--;
					overlap = true;
					break;
				}
			}
			//If it does not overlap then add the temp circle to the circle objects
			if (!overlap) p.coins.push(new Coin(p,cir.x, cir.y, cir.r));
		}
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