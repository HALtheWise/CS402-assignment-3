#pragma strict

var gameOver:boolean;
var sub:GameObject;
function Start () {
	gameOver = false;
	surviveTime = 0;
}

var screenWidth:float;

function Update () {
	if (sub.transform.position.x < -screenWidth/2){
		gameOver = true;
	}
}

var gameOverScreen:Texture;
@HideInInspector
var surviveTime:int;

function OnGUI(){
	if(gameOver){
		if (surviveTime == 0){
			surviveTime = Time.time - gameObject.GetComponent(DifficultyController).startTime;
			audio.Play();
		}
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height/2), gameOverScreen);
		if(GUI.Button(Rect(Screen.width/2-120, Screen.height/2, 100, 35), "Play Again?")){
			Debug.Log("Playing again");
			Start();
			sub.GetComponent(FishScript).Start();
			gameObject.GetComponent(DifficultyController).Start();
			gameObject.GetComponent(WallGenerator).Start();
		}
		if(GUI.Button(Rect(Screen.width/2+20, Screen.height/2, 100, 35), "Main Title")){
			Debug.Log("Main title");
			Application.LoadLevel("titleScene");
		}
		
		GUI.Label(Rect(Screen.width/2-100, Screen.height/2 + 50, 200, 50), "You lasted " + surviveTime + " seconds!");
	}
}