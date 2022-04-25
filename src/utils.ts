import P5 from "p5";
import {Audio, SpawnableObject} from "./types";
import { Coin } from "./Coin";
import { Background } from "./Background";
import { CollisionSystem } from "./CollisionSystem";
import { Balloon } from "./Balloon";
import { Spike } from "./Spike";
import { ScoreSystem } from "./ScoreSystem";

export class Util{

	static clickStop(p5: P5, canvas_ref: P5.Renderer, backgroundMusic: Audio)
    {
		let play = true;

        canvas_ref.mouseClicked(() => {
            if(play){p5.noLoop();backgroundMusic!.pause();play = false;console.log("Stopped.")}
            else{
                p5.loop();
				backgroundMusic!.play();
                play = true;
				console.log("Starting...");
            }
        });

    }

	//Manually pushing three Background object to start the game
	static create_background(p5: P5, backgrounds: Background[]){
		backgrounds.push(new Background(p5,0,0));
		backgrounds.push(new Background(p5,0, -p5.height));
		backgrounds.push(new Background(p5,0, -2*p5.height));
	}

	//Dynamically instantiating Background object 
	static applyBackground(p5: P5, backgrounds: Background[], skyImg: P5.Image){
		
		for (let index = backgrounds.length -1; index >= 0; index--) {
			backgrounds[index].show(skyImg);
			backgrounds[index].update();
			if(backgrounds[index].offScreen()){
				
				//  Delete the offScreen background
				backgrounds.splice(index,1); //Since I know this will always be the 0th index,no need to increase the index.
				
				// Check the last background y pos
				const last = backgrounds.length - 1;
				// new background Y pos
				const newInstYPos = backgrounds[last].spawnPos.y - p5.height;
				
				// Spawn a new background 
				backgrounds.push(new Background(p5,0,newInstYPos));
			}
		}
	}
	// Generate random coin without overlapping
	static generate_random_coin (p5: P5,coins: Coin[],number_of_coin:number = 5,size:number = 18) {

		for (let i = 0; i < number_of_coin; i++) {
	
			let temp_r = size;
			let x: number;
			let y: number;
			let r: number;
			//Creating a temp circle object to check if it overlaps with the existing circle object in the canvas.
			let cir = {
				x: p5.random(size, p5.width - size),
				y: p5.random(-150, 0),
				r: temp_r
			};
	
			let overlap = false;
	
			//Checking with the existing circles objects if it overlaps.
			for (let j = 0; j < coins.length; j++) {
				let other = coins[j];
				if (p5.dist(cir.x, cir.y, other.spawnPos.x, other.spawnPos.y) < other.size + cir.r + 5) {
					i--;
					overlap = true;
					break;
				}
			}
			//If it does not overlap then add the temp circle to the circle objects
			if (!overlap)coins.push(new Coin(p5,cir.x, cir.y, cir.r));
		}
	}

	static renderSpawnObjectAndCheckCollision<T extends SpawnableObject>(objects: T[], objectImg: P5.Image,balloon:Balloon, sound: Audio, scoreSystem: ScoreSystem){
		for (let index = objects.length - 1; index >= 0; index--) {
			
			objects[index].show(objectImg);
			objects[index].update();	
			
			//if offscreen delete the object
			if(CollisionSystem.offScreen(objects[index])){
				objects.splice(index,1);	
			}
			
			if(balloon.hit(objects[index])){
				if(objects[index] instanceof Spike){
					sound!.play();
					scoreSystem.checkHighScore()
					scoreSystem.showGameOver();
					return true;
				}
				if(objects[index] instanceof Coin){
					sound!.play();
					scoreSystem.score++;
					objects.splice(index,1);
				}
			}
		}
	}


	//Util method to see the framecount
	static frameCount(p5: any)
    {
        p5.div = p5.createDiv("FrameRate = ");
        p5.span = p5.createSpan("60");
        p5.span.parent(p5.div);

        setInterval(() =>{
            let fr = p5.ceil(p5.frameRate());
            p5.span.html(fr);
        }, 1000);
    }

}