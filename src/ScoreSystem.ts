import P5 from "p5";

export class ScoreSystem{
	p5: P5;
	score: number = 0;
	
	constructor(p5: P5){
		this.p5 = p5;
		if(localStorage.getItem('HighScore') == null){localStorage.setItem('HighScore','0');}
	}

	showGameOver(){

		let p5 = this.p5; //for convinience

		p5.fill(255);
		p5.stroke('red');
		p5.textSize(32);
		let highScore = `High Score = ${localStorage.getItem('HighScore')}`;
		let curretScore = `Socre = ${this.score}`;
		p5.text("Game over",p5.width -300 ,p5.width/2); //manullay binding the pos,need to make it dynamic
		p5.text(highScore,p5.width -300 ,p5.width/2 + 40); //manullay binding the pos,need to make it dynamic
		p5.text(curretScore,p5.width -300 ,p5.width/2 + 75); //manullay binding the pos,need to make it dynamic
		
	}

	checkHighScore(){
		if(this.score > parseInt(localStorage.getItem('HighScore')!)){
			localStorage.setItem('HighScore',JSON.stringify(this.score));
		}
	}

	show(){
		this.p5.fill(255);
		this.p5.stroke('red');
		this.p5.strokeWeight(1.5);
		this.p5.textSize(20);
		let toShow = `Score ${this.score}`
		this.p5.text(toShow,10,25) //manullay binding the pos,need to make it dynamic
	}
}