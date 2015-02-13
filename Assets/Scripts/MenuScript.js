#pragma strict

var logo:Texture;
function OnGUI(){
	GUILayout.BeginVertical();
		GUILayout.Box(logo);
		if (GUILayout.Button("Play Game")){
			Application.LoadLevel("gameScene");
		}
		if (GUILayout.Button("Story")){
			Application.LoadLevel("storyScene");
		}
	GUILayout.EndVertical();
}