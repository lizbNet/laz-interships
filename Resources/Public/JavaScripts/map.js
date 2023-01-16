
  $( document ).ready(function() {
function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 52.229676, lng: 21.012229},
            zoomControl: true,

            zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.DEFAULT,
            },

            disableDoubleClickZoom: false,
            mapTypeControl: false,
            scaleControl: true,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: false,
            overviewMapControlOptions: {
            opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#193341"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2c5a71"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#29768a"
            },
            {
                "lightness": -37
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#406d80"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#406d80"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#3e606f"
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.84
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "weight": 0.6
            },
            {
                "color": "#1a3541"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2c5a71"
            }
        ]
    }
],
        });
        
       
    
    var infoWin = new google.maps.InfoWindow();
        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
        var marker = new google.maps.Marker({
            icon: 'img/ico/pin.png',
            map: map,
            position: new google.maps.LatLng(location[0], location[1])
        });
        
        var content = '<div class="iw-container">' +
                    '<div class="iw-content">' +
                    
                    
                     
                      '<h6>'+location[2]+'</h6>' +
                      '<p>'+location[3]+'</p>' +
                      '<div class="text-right">' +
                      '<img src="'+location[4]+'" alt="">' +
                      
                      '</div>' +
                    '</div>' +
                  '</div>'; 
        
        
        
            
            google.maps.event.addListener(marker, 'click', function(evt) {
                $('#map').css('width','100%');
                $('#tab-map').removeClass('tab-active');  
                if($(window).width() > 992){
                $('#tab-map.tab-active').css('right','-50%').css('opacity','0').css('visibility','hidden');
                     } else {
                $('#tab-map.tab-active').css('display','none');
                $('#tab-map.tab-active').css('right','-50%').css('opacity','0').css('visibility','hidden').css('height','0px');
                $('#tab-map.tab-active .tab-map-text').css('height','0px');
                        }
                
                smoothZoom(map, 7, map.getZoom(), true);
                
//                if($(window).width() > 992){
//                $('#map').css('width','50%');
//                } else {
//                $('#map').css('width','100%');  
//                }
              
              google.maps.event.trigger(map, "resize");
              map.setCenter(marker.getPosition());
              
              if($(window).width() > 992){
              infoWin.setContent(content);
              infoWin.open(map, marker);
                }
              $('.tab-'+location[4]).addClass('tab-active');  
              if($(window).width() > 992){
              $('.tab-'+location[4]).css('right','0%').css('opacity','1').css('visibility','visible');
                } else {
              $('.tab-'+location[4]).css('display','block');
              $('.tab-'+location[4]).css('right','0%').css('opacity','1').css('visibility','visible').css('height','300px');
              $('.tab-'+location[4]+' .tab-map-text').css('height','290px');
              
              $('html, body').animate({
                    scrollTop: $('.tab-'+location[4]).offset().top
                }, 2000);
                }
                
                

            });
            
            $(".close").click(function() {
                $('#map').css('width','100%');
                smoothZoom(map, 3, map.getZoom(), true);
                google.maps.event.trigger(map, "resize");
                infoWin.close();
                $('#tab-map').removeClass('tab-active');  
                if($(window).width() > 992){
                $('.tab-'+location[4]).css('right','-50%').css('opacity','0').css('visibility','hidden');
                 } else {
                $('.tab-'+location[4]).css('display','none');
                $('.tab-'+location[4]).css('right','-50%').css('opacity','0').css('visibility','hidden').css('height','0px');
                $('.tab-'+location[4]+' .tab-map-text').css('height','0px');
                
                /*$('html, body').animate({
                    scrollTop: $('#map').offset().top
                }, 2000);*/
                    }
            });
        
        
        
        
        return marker;
        });

        // Event that closes the Info Window with a click on the map
          google.maps.event.addListener(map, 'click', function() {
            infoWin.close();
          });
          
          $(".continent li").click(function() {
                var klasa = $(this).attr('class');
                for (i = 0; i < continents.length; i++) {
                    if (continents[i][2] == klasa) {
                        latitude = continents[i][0];
                        longitude = continents[i][1];
                    }
                }  
                $('#map').css('width','100%');
                if($(window).width() > 992){
                $('#tab-map.tab-active').css('right','-50%').css('opacity','0').css('visibility','hidden');
                     } else {
                $('#tab-map.tab-active').css('display','none');
                $('#tab-map.tab-active').css('right','-50%').css('opacity','0').css('visibility','hidden').css('height','0px');
                $('#tab-map.tab-active .tab-map-text').css('height','0px');
                
                $('#tab-map').removeClass('tab-active');
                /*$('html, body').animate({
                    scrollTop: $('#map').offset().top
                }, 2000);*/
                        }
                map.setZoom(3);
                infoWin.close();
                google.maps.event.trigger(map, "resize");
                map.setCenter({lat:latitude, lng:longitude});
                $(".continent li").removeClass('continent-active');
                $(this).addClass('continent-active');
            });
  
        // Add a marker clusterer to manage the markers.
     
        
        function smoothZoom (map, level, cnt, mode) {
		//alert('Count: ' + cnt + 'and Max: ' + level);

		// If mode is zoom in
		if(mode == true) {

			if (cnt >= level) {
				return;
			}
			else {
				var z = google.maps.event.addListener(map, 'zoom_changed', function(event){
					google.maps.event.removeListener(z);
					smoothZoom(map, level, cnt + 1, true);
				});
				setTimeout(function(){map.setZoom(cnt)}, 80);
			}
		} else {
			if (cnt <= level) {
				return;
			}
			else {
				var z = google.maps.event.addListener(map, 'zoom_changed', function(event) {
					google.maps.event.removeListener(z);
					smoothZoom(map, level, cnt - 1, false);
				});
				setTimeout(function(){map.setZoom(cnt)}, 80);
			}
	}
		}
        
        
        // *
  // START INFOWINDOW CUSTOMIZE.
  // The google.maps.event.addListener() event expects
  // the creation of the infowindow HTML structure 'domready'
  // and before the opening of the infowindow, defined styles are applied.
  // *
  google.maps.event.addListener(infoWin, 'domready', function() {

    // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw');

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev();

    iwBackground.children(':nth-child(1)').css({'display' : 'none'});
    iwBackground.children(':nth-child(3)').css({'display' : 'none'});
    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    iwOuter.parent().parent().css({left: '135px', top: '65px'});

    // Moves the shadow of the arrow 76px to the left margin.
    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Moves the arrow 76px to the left margin.
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({'display' : 'none'});

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });
  });
 
            
      }
      var locations = [
        [52.219676, 21.015229, 'PIKNIK RODZINNY NA BEMOWIE', 'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.', 'img/ico/white-ico-1.png',],
        [52.229676, 21.032229, 'PIKNIK RODZINNY NA BEMOWIE', 'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.', 'img/ico/white-ico-1.png',],
        [52.249676, 21.016229, 'PIKNIK RODZINNY NA BEMOWIE', 'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.', 'img/ico/white-ico-1.png',],

      ]
      
 
        
        


initMap();


});