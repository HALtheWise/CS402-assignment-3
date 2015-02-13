#pragma strict

function Start () {
	
}

var movementSpeed:float = 0.02;
var isBackground:boolean = false;

function Update () {
	var mvmtspd:float = movementSpeed;
	if (isBackground) mvmtspd /= 2;
	transform.position.x -= mvmtspd;
}