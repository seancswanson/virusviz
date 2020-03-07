class Model {
  constructor() {}
}

class View {
  constructor() {
    const mymap = L.map("map", {
      center: [47.6769, -122.206],
      zoom: 10
    });

    const unprojectify = latLng => {
      let unprojectedCoordObj = mymap.unproject(latLng);
      return [unprojectedCoordObj.lng, unprojectedCoordObj.lat];
    };

    //
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 13,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1Ijoic2VhbmNzd2Fuc29uIiwiYSI6ImNrN2k2ZmlvajAwNHMzbHBwaXh0ZWd4OGIifQ.P51hYPO4PBNMfP8ETv7dvA"
      }
    ).addTo(mymap);
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
