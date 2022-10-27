function initMap() {
    var map
    var marker
    var infowindow
    var myLatlng = new google.maps.LatLng(23.8103, 90.4125)
    // var geocoder = new google.maps.Geocoder()
    // var infowindow = new google.maps.InfoWindow()
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
        content: 'Hi, what do you want here?',
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

    // google.maps.event.addListener(marker, 'dragend', function () {
    //     geocoder.geocode({ 'latLng': marker.getPosition() }, function (results, status) {
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             if (results[0]) {
    //                 var address_components = results[0].address_components
    //                 var components = {}
    //                 jQuery.each(address_components, function (k, v1) { jQuery.each(v1.types, function (k2, v2) { components[v2] = v1.long_name }) })
    //                 var city
    //                 var postal_code
    //                 var state
    //                 var country
    //                 if (components.locality) {
    //                     city = components.locality
    //                 }
    //                 if (!city) {
    //                     city = components.administrative_area_level_1
    //                 }
    //                 if (components.postal_code) {
    //                     postal_code = components.postal_code
    //                 }
    //                 if (components.administrative_area_level_1) {
    //                     state = components.administrative_area_level_1
    //                 }
    //                 if (components.country) {
    //                     country = components.country
    //                 }

    //                 $.ajax({
    //                     url: 'url',
    //                     data: { state: state, country: country },
    //                     type: 'POST',
    //                     success: function (data) {
    //                         $('#input-country').val(data['country'])
    //                         $('#input-zone').val(data['zone'])
    //                     }
    //                 })
    //                 $('#input-city').val(city)
    //                 $('#input-postcode').val(postal_code)
    //                 $('#latitude').val(marker.getPosition().lat())
    //                 $('#longitude').val(marker.getPosition().lng())
    //                 infowindow.setContent(results[0].formatted_address)
    //                 infowindow.open(map, marker)
    //             }
    //         }
    //     })
    // })
}

