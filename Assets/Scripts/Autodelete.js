#pragma strict

function Start () {

}

function Update () {
	if (transform.position.x < -20 || transform.position.x > 20){
		GameObject.Destroy(gameObject);
	}
}