import P5 from "p5";
import { SpawnableObject } from "./types";

export class CollisionSystem {

	constructor(public p5: P5){}

	static offScreen<T extends SpawnableObject>(object: T){
		return object.spawnPos.y > object.p5.height;
	}

	protected collideRectCircle(rx: number, ry: number, rw: number, rh: number, cx: number, cy: number, diameter: number) {
		//2d
		// temporary variables to set edges for testing
		let testX = cx;
		let testY = cy;

		// which edge is closest?
		if (cx < rx){testX = rx} // left edge
		else if (cx > rx+rw){ testX = rx+rw  }   // right edge

		if (cy < ry){testY = ry} // top edge
		else if (cy > ry+rh){ testY = ry+rh }   // bottom edge
		
		// // get distance from closest edges
		var distance = this.p5.dist(cx,cy,testX,testY)
		// if the distance is less than the radius, collision!
		if (distance <= diameter/2) {
			return true;
		}
		return false;
	};
}