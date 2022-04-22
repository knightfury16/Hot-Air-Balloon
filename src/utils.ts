import { Coin } from "./Coin";

export class Util{


	static generate_random_coin (instance:any,number_of_coin:number,radius:number) {

		for (let i = 0; i < number_of_coin; i++) {
	
			let temp_r = radius;
			let x: number;
			let y: number;
			let r: number;
			//Creating a temp circle object to check if it overlaps with the existing circle object in the canvas.
			let cir = {
				x: instance.random(radius, instance.width - radius),
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

}