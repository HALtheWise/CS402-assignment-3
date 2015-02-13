#pragma strict

var sub:GameObject;
var wallGenerator:GameObject;
var topWall:GameObject;
var bottomWall:GameObject;

@HideInInspector
var startTime:float;
var difficulty:float = 1;
function Start () {
	startTime = Time.time;
}

function Update () {
	var dt:float = Time.time-startTime;
	difficulty = dt/15 + 1;
	topWall.GetComponent(WallMotion).movementSpeed = 0.05 * difficulty;
	bottomWall.GetComponent(WallMotion).movementSpeed = 0.05 * difficulty;
	wallGenerator.GetComponent(WallGenerator).wallSpawnTime = 1.5 / difficulty;
	
	var accel:float = (2+difficulty) / 3 * 0.05;
	sub.GetComponent(FishScript).upSpeed = accel;
	sub.GetComponent(FishScript).downSpeed = accel*.6;
	
}