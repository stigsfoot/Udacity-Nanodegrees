/*
Author = "Noble Ackerson"
 */

// Biography dataset

var bio = {

    "name": "Noble Ackerson",
    "role": "Senior Product Expert",

    "contacts": {
        "mobile": "703-942-9326",
        "email": "noble.ackerson(at)gmail",
        "github" : "@stigsfoot",
        "twitter": "@nobleackerson",
        "location": "Washington, D.C."
    },

    "welcomeMessage": "--",
    "skills": ["AngularJS", "Python", "JS", "Teamwork", "Creativity", "Winning"],
    "biopic": "images/a0.png"
};


// Education dataset
var education = {
    "schools": [{
        "name": "Lynchburg College",
        "location": "Lynchburg, Virginia",
        "degree": "B.S.",
        "majors": ["Computer Science"],
        "dates": "2002",
        "url": "http://www.lynchburg.edu"
    }],

    "onlineCourses": [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
    	"title": "Learn and Understand AngularJS",
        "school": "Udemy",
        "dates": "2014",
        "url": "http://www.udemy.com"
    }, {
    	"title": "PolymerFire Project",
        "school": "Thinkster.io",
        "dates": "2015",
        "url": "http://www.thinkster.io"
    }]
};

// Work dataset
var work = {

    "jobs": [{
        "employer": "LynxFit",
        "title": "Product Owner",
        "location": "Alexandria, Virginia",
        "dates": "2012-Present",
        "description": "Created the worlds first virtual coach on Google Glass as an" +
            " official partner for a hands free, sensor and voice powered workout experience."
    }, {
        "employer": "APX Labs",
        "title": "Director",
        "location": "Herndon, Virginia",
        "dates": "2014-2016",
        "description": "Founded the channel partner developer initiative enabling" +
            "over 25 fortune 500 systems integrator developers with the" +
            " tools to build and deploy wearable apps in the enterprise."
    }, {
        "employer": "Campshare",
        "title": "Founder",
        "location": "Richmond, Virginia",
        "dates": "2014-2016",
        "description": "Built CampShare, the first organization to organization marketplace " +
        				"that connects beginning and exiting political campaigns with a place" +
        				" to buy and sell their campaign equipment, access discounts from " +
        				"vendors, service providers, in order to to bootstrap or liquidate your campaign.."
    }]
};


// Projects dataset
var projects = {

    "projects": [{
        "title": "Pivot for IoT",
        "dates": "2016",
        "description": "Enables gym owners to create workouts and challenges for physical" +
            " web enabled beacons. With Pivot Beacons, gym members get workout" +
            " ideas when in proximity to a Pivot Beacons enabled machine.",
        "images": ["http://placehold.it/250x150","http://placehold.it/250x150"]
    }, {
        "title": "Pivot for Android",
        "dates": "2016",
        "description": "Connects fitness experts with user who depend on wearable devices to" +
            " get fit. Fitness experts create/distribute workouts, coach users who" +
            " need guidance on-demand, and analyse performance metrics.",
        "images": ["http://placehold.it/250x150","http://placehold.it/250x150"]
    }]
};



/* Content to HTML */

bio.display = function() {
	// Name
	var name = bio.name;
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	// Title
	var role = bio.role;
	var formattedRole = HTMLheaderRole.replace("%data%", role);

	$("#header").prepend(formattedName, formattedRole);
	// How to reach me
	var mobile = bio.contacts.mobile;
	var formattedMobile = HTMLmobile.replace("%data%", mobile);
	$("#topContacts").append(formattedMobile);

	var email = bio.contacts.email;
	var formattedEmail = HTMLemail.replace("%data%", email);
	$("#topContacts").append(formattedEmail);
	

	// Where I am
	var headerLocation = bio.contacts.location;
	var formattedLocation = HTMLlocation.replace("%data%", headerLocation);
	$("#topContacts").append(formattedLocation);

	// Photo
	var bioPic = bio.biopic;
	var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
	$("#header").prepend(formattedBioPic);

	var welcomeMessage = bio.welcomeMessage;
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
	$("#header").append(formattedWelcomeMessage); 


	var github = bio.contacts.github;
	var formattedGithub = HTMLemail.replace("%data%", github);
	$("#footerContacts").prepend(formattedMobile);
    $("#footerContacts").append(formattedEmail, formattedGithub, formattedLocation);

    var skills = bio.skills;
    if (skills.length > 0 ) {
	  $( "#header" ).append( HTMLskillsStart );
	  
	  for (var i = 0; i < skills.length; i ++ ) {   
	    var formattedSkill = HTMLskills.replace("%data%", skills[i]);
	    $("#skills").append(formattedSkill);
	  }
	}

};
bio.display();


/* Jobs logic */
var jobs = work.jobs;

work.display = function() {
	for (var i = 0; i < jobs.length; i++) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs[i].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", jobs[i].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", jobs[i].description);
        $(".work-entry:last").append(formattedDescription);

    }
};
work.display();


/* Projects logic */
var projectList = projects.projects;

projects.display = function() {

    for (var i = 0; i < projectList.length; i++) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projectList[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projectList[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projectList[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projectList[i].images.length > 0) {
            for (var image = 0; image < projectList[i].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projectList[i].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
            
        }
    }
};
projects.display();

/* Education logic */
var schoolList = education.schools;
education.display = function() {
	for (var i = 0; i < schoolList.length; i++) {
		// School section
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", schoolList[i].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schoolList[i].degree);
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", schoolList[i].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schoolList[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schoolList[i].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	// Online classes
	$("#education").append(HTMLonlineClasses);
	var courses = education.onlineCourses;

	for (var i = 0; i < courses.length; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", courses[i].title);
		$(".education-entry:last").append(formattedOnlineTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", courses[i].school);
		$(".education-entry:last").append(formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", courses[i].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", courses[i].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}   
};
education.display();


//International Icon at the bottom
$("#main").append(internationalizeButton);
//Google Maps section
$("#mapDiv").append(googleMap);



/****** Additional exercises ******/

$(document).click(function(loc) {
    // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});



function inName(nameString) {
    var nameArray = nameString.split(" ");
    var lastName = nameArray[1].toUpperCase();
    var firstName = nameArray[0].toLowerCase();

    firstName = firstName[0].toUpperCase() + firstName.slice(1);

    return firstName + " " + lastName;

}