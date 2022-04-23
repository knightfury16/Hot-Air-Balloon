export class ScoreSystem{
	instance:any;
	score: number = 0;
	
	constructor(instance:any){
		this.instance = instance;
		if(localStorage.getItem('HighScore') == null){localStorage.setItem('HighScore','0');}
	}

	showGameOver(){
		this.instance.fill(255);
		this.instance.stroke('red');
		this.instance.textSize(32);
		let highScore = `High Score = ${localStorage.getItem('HighScore')}`;
		let curretScore = `Socre = ${this.score}`;
		this.instance.text("Game over",this.instance.width -300 ,this.instance.width/2); //manullay binding the pos,need to make it dynamic
		this.instance.text(highScore,this.instance.width -300 ,this.instance.width/2 + 40); //manullay binding the pos,need to make it dynamic
		this.instance.text(curretScore,this.instance.width -300 ,this.instance.width/2 + 75); //manullay binding the pos,need to make it dynamic
		
	}

	checkHighScore(){
		if(this.score > parseInt(localStorage.getItem('HighScore')!)){
			localStorage.setItem('HighScore',JSON.stringify(this.score));
		}
	}

	show(){
		this.instance.fill(255);
		this.instance.stroke('red');
		this.instance.strokeWeight(1.5);
		this.instance.textSize(20);
		let toShow = `Score ${this.score}`
		this.instance.text(toShow,10,25) //manullay binding the pos,need to make it dynamic
	}
}