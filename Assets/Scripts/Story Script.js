#pragma strict

function Start () {

}

function Update () {

}

var story:Texture;
function OnGUI(){
	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), story);
		if(GUI.Button(Rect(Screen.width/2-120, Screen.height*4/5, 100, 35), "Splash in")){
			Debug.Log("Playing again");
			Application.LoadLevel("gameScene");
			
		}
		if(GUI.Button(Rect(Screen.width/2+20, Screen.height*4/5, 100, 35), "Main Title")){
			Debug.Log("Main title");
			Application.LoadLevel("titleScene");
		}
	}