#pragma strict

function Start () {
	
	transform.position.x = 0;
	transform.position.y = -1;
	transform.position.z = 0;
}

var upSpeed:float = 0.03;
var downSpeed:float = 0.02;
var mercy:float = 0.01;

function Update () {
	if (Input.GetKey("space")){
		rigidbody.velocity.y += upSpeed;
	} else{
		rigidbody.velocity.y -= downSpeed;
	}
	
	transform.rotation = Quaternion.identity;
	transform.position.z = 0;
	rigidbody.velocity.x = 0;
	rigidbody.position.x += mercy;
	
	if (transform.position.x > 1){
		transform.position.x = 1;
	}
	
	drawBubbles();
}

var bubbleFrequency:int = 3;
var bubbles:GameObject;
function drawBubbles(){
	if (Time.frameCount % bubbleFrequency == 0){
		GameObject.Instantiate(bubbles, transform.position, transform.rotation);
	}
}