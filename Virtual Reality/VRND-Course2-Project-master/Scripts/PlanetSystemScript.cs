using UnityEngine;
using System.Collections;

public class PlanetSystemScript : MonoBehaviour , IGvrGazeResponder {
	private bool gazedAt;
	
	// Const for our animation speed
	public float ROTATION_SPEED = 60f;

		// Use this for initialization
		void Start () {
			gameObject.AddComponent<Rigidbody> ();
			gameObject.GetComponent<Rigidbody> ().useGravity = false;
			gazedAt = false;
		}
		
		// Update is called once per frame
		void Update () {
			// If the reticle is gazing at our gameObject, spin the globe
			if (gazedAt) {
			// Spin our Planet System
				Vector3 aux = new Vector3 (0, 1, 0);
				gameObject.transform.Rotate (aux * ROTATION_SPEED * Time.deltaTime);
			}
		}

	// Unused, for now!
	public void RotateObject() {
		transform.Rotate(Vector3.up, ROTATION_SPEED * Time.deltaTime);
	}

	#region IGvrGazeResponder implementation

	/// Called when the user is looking on a Globe.
	public void OnGazeEnter() {

		// Set state to true when reticle is dwelling on object.
		gazedAt = true;

		Debug.Log (">> Entered Gaze on " + this.gameObject.name + "!! <<");
	}

	/// Called when the user stops looking on the Globe
	public void OnGazeExit() {
		Debug.Log("Cool. Just left "+ this.gameObject.name + "!!!");
		gazedAt = false;
	}

	/// Called when the viewer's trigger is used, between OnGazeEnter and OnGazeExit.
	public void OnGazeTrigger() {
		Debug.Log("OnGazeTrigger has been TRIGGERED!!!");
	}

	#endregion


}
