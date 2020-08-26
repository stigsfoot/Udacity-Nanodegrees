using UnityEngine;
using System.Collections;

public class FiguresBehaviour : MonoBehaviour, IGvrGazeResponder { 
	private bool collided;

	void Start () {
		gameObject.AddComponent<Rigidbody> ();
		gameObject.GetComponent<Rigidbody> ().useGravity = false;
		collided = false;
	}

	void Update () {
		// Las frutas giran hasta que sean colisionadas
		if (!collided) {
			Vector3 aux = new Vector3 (0, 1, 0);
			gameObject.transform.Rotate (aux * 50 * Time.deltaTime);		
		}
	}

	Color getRndColor() {
		int rndColor = Random.Range (0, 5);

		switch (rndColor) {
		case 0:
			return Color.white;
		case 1: 
			return Color.red; 
		case 2: 
			return Color.blue;
		case 3: 
			return Color.yellow;
		case 4: 
			return Color.green;
		case 5: 
			return Color.grey;
		default: 
			return Color.clear;
		}
	}

	// Cuando se colisiona con un tipo de objeto, todos los objetos de ese tipo cambian
	// de color aleatoriamente
	void OnCollisionEnter() {
		string collidedFigureTag = gameObject.tag;
		GameObject[] figuresWithSameTag = GameObject.FindGameObjectsWithTag (collidedFigureTag);

		for (int i = 0; i < figuresWithSameTag.Length; i++) {
			figuresWithSameTag [i].GetComponent<Renderer> ().material.color = getRndColor ();
		}

		collided = true;
	}


	#region IGvrGazeResponder implementation

	/// Called when the user is looking on a GameObject with this script,
	/// as long as it is set to an appropriate layer (see GvrGaze).
	public void OnGazeEnter() {
		collided = true;
	}

	/// Called when the user stops looking on the GameObject, after OnGazeEnter
	/// was already called.
	public void OnGazeExit() {
		collided = false;
	}

	/// Called when the viewer's trigger is used, between OnGazeEnter and OnGazeExit.
	public void OnGazeTrigger() {

	}

	#endregion
}
