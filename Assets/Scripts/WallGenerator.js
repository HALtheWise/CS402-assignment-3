#pragma strict

function Start () {
	lastTriggerTime = Time.time;
}

var topWall:GameObject;
var bottomWall:GameObject;

@HideInInspector
var lastTop:float = 2;
@HideInInspector
var lastOpening:float = 0;
@HideInInspector
var lastTrend:float = 0;

var gapSize:float = 6;

var wallSpawnTime:float = 1;

@HideInInspector
var lastTriggerTime:float = 0;

function Update () {
	if(Input.GetKeyDown("a")){
		spawnWalls(3, -3);
	}
	
	if(Input.GetKeyDown("s")){
		planWalls();
	}
	
	if (Time.time - lastTriggerTime >= wallSpawnTime){
		planWalls();
		lastTriggerTime += wallSpawnTime;	
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
	spawnWalls(lastTop + Random.Range(0, 2), lastTop-gapSize - Random.Range(0, 2));
}

function spawnWalls(top:float, bottom:float) {
	GameObject.Instantiate(topWall, new Vector3(10,top+5,0), Quaternion.identity);
	GameObject.Instantiate(bottomWall, new Vector3(10,bottom-5,0), Quaternion.identity);
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