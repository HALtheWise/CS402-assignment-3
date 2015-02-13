#pragma strict

function Start () {
	lastTriggerTime = Time.time;
	destroyWalls();
	lastOpening = 0;
	lastTrend = 0;
	lastTop = 2;
}

var topWall:GameObject;
var bottomWall:GameObject;

@HideInInspector
var lastTop:float;
@HideInInspector
var lastOpening:float;
@HideInInspector
var lastTrend:float;

var gapSize:float = 6;

var wallSpawnTime:float = 1;

@HideInInspector
var lastTriggerTime:float;

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
	walls.Push(GameObject.Instantiate(topWall, new Vector3(10,top+5,0), Quaternion.identity));
	walls.Push(GameObject.Instantiate(bottomWall, new Vector3(10,bottom-5,0), Quaternion.identity));
}

@HideInInspector
var walls:Array = new Array();

function destroyWalls(){
	while(walls.length > 0){
		var obj:GameObject = walls.Pop();
		GameObject.Destroy(obj);
	}
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