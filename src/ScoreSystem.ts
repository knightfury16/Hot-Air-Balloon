export class ScoreSystem{
	instance:any;
	score: number = 0;
	
	constructor(instance:any){
		this.instance = instance;
	}

	showGameOver(){
		this.instance.fill(255);
		this.instance.textSize(32);
		let highScore = `High Score = ${localStorage.getItem('HighScore')}`;
		let curretScore = `Socre = ${this.score}`;
		this.instance.text("Game over",this.instance.width -300 ,this.instance.width/2);
		this.instance.text(highScore,this.instance.width -300 ,this.instance.width/2 + 40);
		this.instance.text(curretScore,this.instance.width -300 ,this.instance.width/2 + 75);
		
	}

	show(){
		this.instance.fill(255);
		this.instance.textSize(20);
		let toShow = `Score ${this.score}`
		this.instance.text(toShow,10,25)
	}
}