function initMap() {
    var map
    var marker
    var infowindow
    var myLatlng = new google.maps.LatLng(23.8103, 90.4125)
    var myMap = document.getElementById("map")

    map = new google.maps.Map(myMap, {
        zoom: 13,
        center: myLatlng
    })

    marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Selected Mark',
        draggable: true
    })

    infowindow = new google.maps.InfoWindow({
        content: 'Sabuj Vila',
        ariaLabel: "hahaha",
    })

    map.addListener('click', function (event) {
        marker.setPosition(event.latLng.toJSON())
        setLatLngInputs()
        infowindow.open({
            anchor: marker,
            map
        })
    })

    marker.addListener('dragend', function (event) {
        setLatLngInputs()
        infowindow.open({
            anchor: marker,
            map
        })
    })

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map
        })
    })

    function setLatLngInputs() {
        $('#latitude').val(marker.getPosition().lat())
        $('#longitude').val(marker.getPosition().lng())
    }


}