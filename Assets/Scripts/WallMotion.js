#pragma strict

function Start () {
	
}

var movementSpeed:float = 0.02;

function Update () {
	transform.position.x -= movementSpeed;
}