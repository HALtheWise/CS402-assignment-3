﻿#pragma strict

function Start () {

}

var upSpeed:float = 0.03;
var downSpeed:float = 0.02;

function Update () {
	if (Input.GetKey("space")){
		rigidbody.velocity.y += upSpeed;
	} else{
		rigidbody.velocity.y -= downSpeed;
	}
	
	transform.rotation = Quaternion.identity;
	transform.position.z = 0;
	rigidbody.velocity.x = 0;
	
	drawBubbles();
}

var bubbleFrequency:int = 3;
var bubbles:GameObject;
function drawBubbles(){
	if (Time.frameCount % bubbleFrequency == 0){
		GameObject.Instantiate(bubbles, transform.position, transform.rotation);
	}
}