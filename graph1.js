/*
	although ammap has methos like getAreaCenterLatitude and getAreaCenterLongitude,
	they are not suitable in quite a lot of cases as the center of some countries
	is even outside the country itself (like US, because of Alaska and Hawaii)
	That's why wehave the coordinates stored here
*/

var latlong = {};
latlong["AF"] = {"latitude":42.5, "longitude":1.5};


var mapData = [{"code":"AF" , "name":"Afghanistan", "value":32358260, "color":"#eea638"}];




 // build map
AmCharts.ready(function() {
  	AmCharts.theme = AmCharts.themes.dark;
	var map = new AmCharts.AmMap();
	//map.pathToImages="ammap/images/";////////
	map.addTitle("Oceanographic Data", 16, "#000000");
	//window.map.addTitle("source: Gapminder", 11);
	map.areasSettings = {
		unlistedAreasColor: "#000000",
		unlistedAreasAlpha: 0.3      //graph transparency
	};
	map.imagesSettings.balloonText = "<span style='font-size:14px;'><b>[[title]]</b>: [[value]]</span>";
	
	var dataProvider = {
		mapURL: "http://www.intrapc.com/ITMap/ammap/maps/svg/worldRussiaSplitLow.svg",
		//mapURL: "map/map.svg",
		images: []
	}

	// create circle for each country
	//draw circles
	for (var i = 0; i < mapData.length; i++) {
		var dataItem = mapData[i];
		var value = dataItem.value;
		//size of a bubble
		var size = 10; 
		var id = dataItem.code;

		dataProvider.images.push({
			type: "circle",
			width: size,
			height: size,
			color: "#0000ff",
			longitude: latlong[id].longitude,
			latitude: latlong[id].latitude,
			title: dataItem.name,
			value: value
		});
	}	

	map.dataProvider = dataProvider;
    map.export = {
    	enabled: true
    }
	map.projection = "eckert6";
	map.write("chartdiv");
});