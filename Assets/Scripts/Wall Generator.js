#pragma strict

function Start () {

}

var topWall:GameObject;
var bottomWall:GameObject;

var lastTop:float;
var lastBottom:float;
var lastOpening:float;
var lastTrend:float;
var openingSize:float;

function Update () {
	if(Input.GetKeyDown("s")){
		spawnWalls(3, -3);
	}
}

function spawnWalls(top:float, bottom:float) {
	GameObject.Instantiate(topWall, new Vector3(0,top,0), Quaternion.identity);
	GameObject.Instantiate(bottomWall, new Vector3(0,bottom,0), Quaternion.identity);
}