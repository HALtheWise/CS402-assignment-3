#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKey("space")){
		transform.position.y += .03;
	} else{
		transform.position.y -= 0.02;
	}
}