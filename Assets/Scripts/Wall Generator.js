#pragma strict

function Start () {

}

var topWall:GameObject;
var bottomWall:GameObject;

var lastTop:float = 2;
//var lastBottom:float;
var lastOpening:float = 0;
var lastTrend:float = 0.8;
var gapSize:float = 6;

function Update () {
	if(Input.GetKeyDown("a")){
		spawnWalls(3, -3);
	}
	
	if(Input.GetKeyDown("s")){
		planWalls();
	}
}

var maxTrend:float = 1.5;
var boundaryJump:float = 3;
var screenHeight = 8;

function planWalls(){
	
	if (Random.Range(0, 100) > 80){ //Change trend
		lastTrend = Random.Range(-maxTrend, maxTrend);
	}
	if (lastOpening < -screenHeight/2){
		lastTrend = Random.Range(0, maxTrend);
	}
	if (lastOpening > screenHeight/2){
		lastTrend = Random.Range(-maxTrend, 0);
	}
	
	lastOpening += lastTrend;
	lastTop += lastTrend;
	
	if (Random.Range(0, 100) > 75){
		var change:float = Random.Range(-boundaryJump, boundaryJump);
		lastTop += change;
		
		lastTop = constrain(lastTop, lastOpening+gapSize, lastOpening);
	}
	spawnWalls(lastTop, lastTop-gapSize);
}

function spawnWalls(top:float, bottom:float) {
	GameObject.Instantiate(topWall, new Vector3(0,top+5,0), Quaternion.identity);
	GameObject.Instantiate(bottomWall, new Vector3(0,bottom-5,0), Quaternion.identity);
}

function constrain(value:float, max:float, min:float) : float {
	if (value > max){
		return max;
	}
	if (value < min){
		return min;
	}
	return value;
}