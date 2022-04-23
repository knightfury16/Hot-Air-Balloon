import { Coin } from "./Coin";
import { Background } from "./Background";

export class Util{

	static clickStop(instance: any, canvas_ref: any)
    {
		let play = true;

        canvas_ref.mouseClicked(() => {
            if(play){instance.noLoop();instance.backgroundMusic.pause();play = false;console.log("Stopped.")}
            else{
                instance.loop();
				instance.backgroundMusic.play();
                play = true;
				console.log("Starting...");
            }
        });

    }

	//Manually pushing three Background object to start the game
	static create_background(instance:any){
		instance.backgrounds.push(new Background(instance,0,0));
		instance.backgrounds.push(new Background(instance,0, -instance.height));
		instance.backgrounds.push(new Background(instance,0, -2*instance.height));
	}

	//Dynamically instantiating Background object 
	static applyBackground(instance: any){
		
		for (let index = instance.backgrounds.length -1; index >= 0; index--) {
			instance.backgrounds[index].show();
			instance.backgrounds[index].update();
			if(instance.backgrounds[index].offScreen()){
				
				//  Delete the offScreen background
				instance.backgrounds.splice(index,1); //Since I know this will always be the 0th index,no need to increase the index.
				
				// Check the last background y pos
				const last = instance.backgrounds.length - 1;
				// new background Y pos
				const newInstYPos = instance.backgrounds[last].spawnPos.y - instance.height;
				
				// Spawn a new background 
				instance.backgrounds.push(new Background(instance,0,newInstYPos));
			}
		}
	}
	// Generate random coin without overlapping
	static generate_random_coin (instance:any,number_of_coin:number,size:number) {

		for (let i = 0; i < number_of_coin; i++) {
	
			let temp_r = size;
			let x: number;
			let y: number;
			let r: number;
			//Creating a temp circle object to check if it overlaps with the existing circle object in the canvas.
			let cir = {
				x: instance.random(size, instance.width - size),
				y: instance.random(-150, 0),
				r: temp_r
			};
	
			let overlap = false;
	
			//Checking with the existing circles objects if it overlaps.
			for (let j = 0; j < instance.coins.length; j++) {
				let other = instance.coins[j];
				if (instance.dist(cir.x, cir.y, other.spawnPos.x, other.spawnPos.y) < other.size + cir.r + 5) {
					i--;
					overlap = true;
					break;
				}
			}
			//If it does not overlap then add the temp circle to the circle objects
			if (!overlap) instance.coins.push(new Coin(instance,cir.x, cir.y, cir.r));
		}
	}

	//Util method to see the framecount
	static frameCount(instance: any)
    {
        instance.div = instance.createDiv("FrameRate = ");
        instance.span = instance.createSpan("60");
        instance.span.parent(instance.div);

        setInterval(() =>{
            let fr = instance.ceil(instance.frameRate());
            instance.span.html(fr);
        }, 1000);
    }

}