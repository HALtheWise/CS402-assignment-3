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
		}
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height/2), gameOverScreen);
		if(GUI.Button(Rect(Screen.width/2-50, Screen.height/2, 100, 35), "Play Again?")){
			Debug.Log("Playing again");
			Start();
			sub.GetComponent(FishScript).Start();
			gameObject.GetComponent(DifficultyController).Start();
			gameObject.GetComponent(WallGenerator).Start();
		}
		
		GUI.Label(Rect(Screen.width/2-100, Screen.height/2 + 50, 200, 50), "You lasted " + surviveTime + " seconds!");
	}
}