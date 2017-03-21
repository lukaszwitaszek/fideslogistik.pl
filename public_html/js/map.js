// skrypt obsługujący GoogleMaps wyświetlane w modalu
// w sekcji 'Kontakt'
 
// GoogleMaps API JScript KEY
var apiKey ="AIzaSyBzfl7TCw6mNUXTHQm0l_sgXDZKXBBls6s";
 

	// wskaźnik do warstwy, w której należy wyświetlić mapę
	// var mapModalID="mapa-modal";
	var mapDivID="mapa";
 
	// lokalizacja
	var locationLat="51.7404646";
	var locationLon="19.5324698";
	var locationDesc= "<p> FIDES Spedycja</p>";
 
	// parametry mapy do wyświetlenia
	var myOptions = {
		center: new google.maps.LatLng(locationLat, locationLon),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	
	function loadMap(){
		var map = new google.maps.Map(document.getElementById(mapDivID), myOptions); 
		marker = new google.maps.Marker({ position: new google.maps.LatLng(locationLat, locationLon),map: map  });
		var infowindow = new google.maps.InfoWindow({ content: locationDesc  });
		infowindow.open(map, marker); 
	}


