function dk_rgmappedt_map(dk_rgmappedt_lat,dk_rgmappedt_lng,dk_rgmappedt_map_zoom)
{		
	if(dk_rgmappedt_lat =='')
		dk_rgmappedt_lat = 34.0522342;
	if(dk_rgmappedt_lng =='')
		dk_rgmappedt_lng = -118.2436849;
	if(dk_rgmappedt_map_zoom =='')
		dk_rgmappedt_map_zoom = 13;
	var mapOptions = {zoom: dk_rgmappedt_map_zoom, center: new google.maps.LatLng(dk_rgmappedt_lat,dk_rgmappedt_lng),styles:dk_rgmappedt_styles};
	var dk_rgmappedt_map = new google.maps.Map(document.getElementById('dk-rgmappedt-map-canvas'), mapOptions);
	var infowindow = new google.maps.InfoWindow();
	var dk_rgmappedt_marker;
	for (var i = 0; i < dk_rgmappedt_locations.length; i++) 
	{  
		dk_rgmappedt_marker = new google.maps.Marker({
		position: new google.maps.LatLng(dk_rgmappedt_locations[i][1], dk_rgmappedt_locations[i][2]),
		map: dk_rgmappedt_map,
		animation: google.maps.Animation.DROP,
		icon: {url: dk_rgmappedt_locations[i][4], size: new google.maps.Size(64, 64), origin: new google.maps.Point(0,0),anchor: new google.maps.Point(0, 64)},
		title: dk_rgmappedt_locations[i][0],
		zIndex: dk_rgmappedt_locations[i][3]
		});
		google.maps.event.addListener(dk_rgmappedt_marker, 'click', (function(dk_rgmappedt_marker, i) {
		return function() {
		  dk_rgmappedt_marker.setAnimation(google.maps.Animation.BOUNCE);
		  setTimeout(function(){ dk_rgmappedt_marker.setAnimation(null); }, 3000);
		  infowindow.setContent(dk_rgmappedt_locations[i][5]);
		  infowindow.open(dk_rgmappedt_map, dk_rgmappedt_marker);
		}
		})(dk_rgmappedt_marker, i));
	}
}
var dk_rgmappedt_lat = 34.0522342;
var dk_rgmappedt_lng = -118.2436849;
var dk_rgmappedt_zoom =13;
var dk_rgmappedt_locations = new Array();
var dk_rgmappedt_styles = new Array();
jQuery(window).load(function() {
	if(jQuery('#dk-rgmappedt-map-canvas').size()>0)
	{
		dk_rgmappedt_map(dk_rgmappedt_lat,dk_rgmappedt_lng,dk_rgmappedt_zoom);
		//jQuery('html, body').animate({ scrollTop: jQuery("#dk-rgmappedt-map-canvas").offset().top },1000);
	}
	jQuery('#dk_rgmappedt_category_frm select[name=rgmappedt_cat]').change(function(e) {
        jQuery('#dk_rgmappedt_category_frm').submit();
    });
});