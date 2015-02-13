#pragma strict

function Start () {

}

function Update () {
	if (transform.position.x < -10 || transform.position.x > 10){
		GameObject.Destroy(GameObject);
	}
}