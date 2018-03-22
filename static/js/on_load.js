// Put here code required to be present before DOM is loaded (for map generation so far).

function initMap() {
    var infowindow = new google.maps.InfoWindow();

    var map = new google.maps.Map(document.getElementById('chapters__map'), {
        zoom: 2,
        center: {lat: 20., lng: 0.}
    });
    var bounds = new google.maps.LatLngBounds();

    for (i = 0; i < locations.length; i++) {
        var lat = locations[i]["lat"];
        var lng = locations[i]["lng"];
        var desc = '<b>' + locations[i]['title'] + '</b><br/><br/>';
        // desc += 'Starts at: ' + locations[i]['time'] + ' (local time)</br>';
        desc += 'Location:<br/>' + locations[i]['address'] + '</br>';
        // if (locations[i]['sponsor_image'] != '') {
        //     desc += '<br/>With the support of:<br/>';
        //     desc += '<a href="' + locations[i]['sponsor_url'] + '"><img style="width: 120px;" alt="" src="assets/images/sponsors/' + locations[i]['sponsor_image'] + '"/></a><br/>';
        // }
        desc += '<br/><a style="color: #800000;" href="' + locations[i]['URL'] + '">Go to event page</a><br/>';
        var marker = new google.maps.Marker({
            title: locations[i]["title"],
            html: desc,
            position: {
                lat: lat,
                lng: lng
            },
            map: map
        });
        var position = new google.maps.LatLng(lat, lng);
        bounds.extend(position);

        google.maps.event.addListener(
            marker,
            'click',
            function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            }
        );
    }
    map.fitBounds(bounds);
}
