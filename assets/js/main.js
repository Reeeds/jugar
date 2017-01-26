$(document).ready(function() {
	init();

});

function init () {
	generateSites();
	$('#sitecontainer > #site2, #sitecontainer >  #site3, #sitecontainer >  #site4').hide();
	currenttab = "#site1";
	// checkUrl();
	navigation();

}

function generateSites() {
    $.each(sites, function(idx, item) {
        $('<div id=' + item.id + '><h1>' + item.title + '</h1><p>' + item.text + '</p></div>').appendTo('#sitecontainer');
    });
};

// function checkUrl() {
// 	if(window.location.hash) {
// 		var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
//
// 		// hash found
// 	} else {
// 		// No hash found
// 	}
//
// }

function navigation() {
	$('a').click(function() {
			var nav_id = $(this).attr('id');
			switch (nav_id) {
					case "site1":
							$('#sitecontainer >' + currenttab).hide();
							$('#sitecontainer > #site1').show();
							currenttab = "#site1";
							break;
					case "site2":
							$('#sitecontainer >' + currenttab).hide();
							$('#sitecontainer > #site2').show();
							currenttab = "#site2";
							break;
					case "site3":
							$('#sitecontainer >' + currenttab).hide();
							$('#sitecontainer > #site3').show();
							currenttab = "#site3";
							break;
					case "site4":
							$('#sitecontainer >' + currenttab).hide();
							$('#sitecontainer > #site4').show();
							currenttab = "#site4";
							break;

			}

	})

}
