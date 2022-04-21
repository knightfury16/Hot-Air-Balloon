export class Coin{
	instance: any ; 
	constructor(instance:any){
		this.instance = instance;
	}

	show<T>(coinImg: T){
		this.instance.image(coinImg,this.instance.width/2,this.instance.height - 300, 18, 18);
	}
}