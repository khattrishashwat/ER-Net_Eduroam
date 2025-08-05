var map;
AmCharts.ready(function() {
    map = new AmCharts.AmMap();
     map.panEventsEnabled = true;
     map.dragMap = true;
    map.backgroundColor = "none";
    map.backgroundAlpha = 1;

    // map.zoomControl.panControlEnabled = false;
    map.zoomControl.zoomControlEnabled = false;
    map.zoomControl.doubleClickZoomEnabled = true;

    var dataProvider = {
        map: "indiaLow",
        getAreasFromMap: true
    };

    map.dataProvider = dataProvider;

    map.areasSettings = {
        autoZoom: false,
        color: " #E5E5E5",
        colorSolid: " #090979",
        selectedColor: " #090979",
        outlineColor: " #B7B7B7",
        rollOverColor: " #090979",
        rollOverOutlineColor: "#FFFFFF",
        selectable: true
    };

    // Array of colors to cycle through
    var colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF3333", "#33FFF3", "#FFBD33"];
    var colorIndex = 0;

    /* map.addListener('clickMapObject', function(event) {
        console.log('Map object clicked:', event.mapObject.id, event.mapObject.title);

        document.getElementById('popup_grant_map_shi').style.display = 'block';

        // Deselect the area by assigning all of the dataProvider as selected object
        map.selectedObject = map.dataProvider;

        // Toggle showAsSelected
        event.mapObject.showAsSelected = !event.mapObject.showAsSelected;

        // Set a unique color from the array if selected
        if (event.mapObject.showAsSelected) {
            event.mapObject.color = colors[colorIndex];
            console.log('Color set to:', colors[colorIndex]);
            colorIndex = (colorIndex + 1) % colors.length;
        } else {
            // Reset to the default color
            event.mapObject.color = map.areasSettings.color;
            console.log('Resetting to default color');
        }

        // Apply the color changes
        map.returnInitialColor(event.mapObject);

        // Update the classes for the mapDiv
        var mapDiv = document.getElementById('mapDiv');
        mapDiv.classList.remove('col-lg-12');
        mapDiv.classList.add('col-lg-6');

        // Build a list of currently selected states
        var states = [];
        for (var i in map.dataProvider.areas) {
            var area = map.dataProvider.areas[i];
            if (area.showAsSelected) {
                states.push(area.title);
            }
        }
        console.log('Selected states:', states);
    }); */

    map.addListener('clickMapObject', function(event) {
        console.log('Map object clicked:', event.mapObject.id, event.mapObject.title);
    
        document.getElementById('popup_grant_map_shi').style.display = 'block';
        document.getElementById('category_data_new').style.display = 'none';
    
        // Deselect all areas
        for (var i in map.dataProvider.areas) {
            var area = map.dataProvider.areas[i];
            area.showAsSelected = false;
            area.color = map.areasSettings.color;
            map.returnInitialColor(area);
        }
    
        // Toggle showAsSelected for the clicked area
        event.mapObject.showAsSelected = !event.mapObject.showAsSelected;
    
        // Set a unique color from the array if selected
        if (event.mapObject.showAsSelected) {
            event.mapObject.color = colors[colorIndex];
            console.log('Color set to:', colors[colorIndex]);
            colorIndex = (colorIndex + 1) % colors.length;

            // alert(event.mapObject.title);

            var stateText = event.mapObject.title;
            var year = $('#dataYear').val();
            // console.log("year",year);
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            let host = $(location).attr('host');

            let protocol = $(location).attr('protocol');

            if(protocol == "http:"){
                protocol = "http:";
            }else{
                protocol = "https:";
            }

            $.ajax({
                method: "post",
                url: ""+protocol+"//"+host+"/winners_list", // need to create this route
                data: {"state_text":stateText,'year':year},
                success: function(data) {
                    console.log("data",data);  
                    if(data.html == ''){
                        $('#grand_receip_imgdiv').html(data.html)
                    }else{                        
                        $('#grand_receip_imgdiv').html(data.html);       
                    }
                },
                error: function(data_err, statusText, xhr) {
                    console.log("data_err--",data_err); 
                    console.log("statusText--",statusText); 
                    console.log("xhr--",xhr); 
                }
            })
        } else {
            // Reset to the default color
            event.mapObject.color = map.areasSettings.color;
            console.log('Resetting to default color');
        }
    
        // Apply the color changes
        map.returnInitialColor(event.mapObject);
    
        // Update the classes for the mapDiv
        var mapDiv = document.getElementById('mapDiv');
        mapDiv.classList.remove('col-lg-12');
        mapDiv.classList.add('col-lg-6');
    
        // Build a list of currently selected states
        var states = [];
        for (var i in map.dataProvider.areas) {
            var area = map.dataProvider.areas[i];
            if (area.showAsSelected) {
                states.push(area.title);
            }
        }
        // console.log('Selected states:', states);
    });

    map.export = {
        enabled: true
    }

    map.write("chartdiv");

    // Add an event listener for the close button to hide the popup and show the chart again
    document.querySelector('.popupclosebtn').addEventListener('click', function() {
        // Hide the popup div
        document.getElementById('popup_grant_map_shi').style.display = 'none';
        
        // Show the chart div
        document.getElementById('chartdiv').style.display = 'block';

        // Restore the classes for the mapDiv
        var mapDiv = document.getElementById('mapDiv');
        mapDiv.classList.remove('col-lg-6');
        mapDiv.classList.add('col-lg-12');
    });
});
    