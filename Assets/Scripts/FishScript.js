#pragma strict

function Start () {

}

var upSpeed:float = 0.03;
var downSpeed:float = 0.02;

function Update () {
	if (Input.GetKey("space")){
		//transform.position.y += .03;
		rigidbody.velocity.y += upSpeed;
	} else{
		//transform.position.y -= 0.02;
		rigidbody.velocity.y -= downSpeed;
	}
}