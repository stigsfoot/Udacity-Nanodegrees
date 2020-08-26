# vrnd_p2_homescene_v1

Attempt at [Udacity Virtual Reality Nanodegree P2](https://classroom.udacity.com/nanodegrees/nd017/) | Modern Apartment scene. 
The VR experience walks you through a an apartment scene with an animated Globe and some other suprises.

![Imgur](http://i.imgur.com/cLRMIfZ.jpg)

This project took 2.5 hours to complete, most of the time was trying to figure out an issue with the recticle and triggering the globe on ButtonDown. 

## Getting Started

* Arm yourself with Google Cardboard and a decent phone
* Download the provided APK and run it
* Click to teleport through the apartment

### Technologies Used
* C# fo scripts
* GoogleVR SDK
* Udacity prefabs
* Unity free prefabs


![Imgur](http://i.imgur.com/DWj31Ig.png)

![Imgur](http://i.imgur.com/JwHqqOq.png)


### Current Issues (V1)

My attempt at triggering globe via reticle+PointerDown was malfunctioning. 
I have an:

* Event System script with Gaze Input enabled and prioritized
* My Globe has a `Sphere Collider` enabled and it's own script (included) with an event trigger to call my animate function on Pointer Down `AnimateGlobe.SpinGlobe` on the `Globe` sphere
* `GVReticle` is a child of `Head`

