// Initialize and add the map
let map;

async function initMap() {
    // The location of Berlin
    const position = { lat: 52.52, lng: 13.4 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        zoom: 12,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    await addMarker1(map);
    await addMarker2(map);
}

initMap();


async function addMarker1(map) {
    const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");

    const marker = new AdvancedMarkerElement({
        map: map,
        position: {lat: 52.52, lng: 13.4},
        title: "Berlin",
    });

    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Kristis Packet Shop</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Kristi Packet Shop</b>, also referred to as <b>24/7 Packet Shop</b></p>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Kristis Packet Shop",
    });

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
        });
    });
}

async function addMarker2(map) {
    const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");

    const marker = new AdvancedMarkerElement({
        map: map,
        position: {lat: 52.60, lng: 13.4},
        title: "Berlin",
    });

    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Apex Packet Shop</h1>' +
        '<div id="bodyContent">' +
        "<p>Demo popover just to test this</p>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Apex Packet Shop",
    });

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
        });
    });
}
