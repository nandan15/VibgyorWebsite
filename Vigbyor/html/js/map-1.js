function initMap() {
  
    var options = {
        zoom: 18, 
        center: { lat: 13.032877, lng: 77.565193 } 
    };
    
    
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    
    var marker = new google.maps.Marker({
        position: { lat: 13.032877, lng: 77.565193 },
        map: map,
        title: "41, SLV Chambers, 2nd Floor, Opp Union Bank, New BEL Road, Bengaluru 560054",
        animation: google.maps.Animation.DROP,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' // Red marker icon
    });
    
   
    var infoWindow = new google.maps.InfoWindow({
        content: '<strong>41, SLV Chambers, 2nd Floor</strong><br>Opp Union Bank, New BEL Road, Bengaluru 560054'
    });
    
   
    marker.addListener('mouseover', function() {
        infoWindow.open(map, marker);
    });
    marker.addListener('mouseout', function() {
        infoWindow.close();
    });
}


function redirectToGoogleMaps() {
    window.open("https://www.google.co.in/maps/dir//Atom+Interiors+-+Top+Interior+Design+Firms+in+Bangalore,+41,SLV+Chambers,2nd+Floor,Opp+Corporation+Bank,+New+BEL+Rd,+AG's+Layout,+Mathikere,+AG's+Layout,+Mathikere,+Bengaluru,+Karnataka+560054/@13.034931,77.567717,15z/data=!4m15!1m6!3m5!1s0x0:0x31751af46eb96d38!2sAtom+Interiors+-+Top+Interior+Design+Firms+in+Bangalore!8m2!3d13.034931!4d77.567717!4m7!1m0!1m5!1m1!1s0x3bae17e74b2e49d7:0x31751af46eb96d38!2m2!1d77.567717!2d13.034931", "_blank");
}


function loadGoogleMaps() {
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDj1hZyEFYDmFEhMxQm5Wqrr5ldG4YZJzY&callback=initMap";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}


loadGoogleMaps();