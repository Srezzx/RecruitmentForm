jQuery(document).ready(function(e){
	jQuery.ajax({
		url: covid19_info_bar_ajax_object.ajax_url,
		type: 'post',
		cache: false,
		dataType: "json",
		data: {action: "covid19_info_bar", link_loaded : window.location.href},
		success: function (response) {
			if(response.bar_show=='Y'){
				jQuery('body').prepend(response.html);
				if(response.bar_type=='popup'){
					jQuery('.covid-19-advisory-wrap').css('position','fixed');
					jQuery('.covid-19-advisory-wrap').css('left',0);
					if(response.position=='top'){
						jQuery('.covid-19-advisory-wrap').css('top',0);
					}
					else if(response.position=='bottom'){
						jQuery('.covid-19-advisory-wrap').css('bottom',0);
					}
					else if(response.position=='middle'){
						var covid19_info_bar_middle = (jQuery(window).outerHeight()/2)-(jQuery('.covid-19-advisory-wrap').outerHeight()/2);
						jQuery('.covid-19-advisory-wrap').css('top',Number(covid19_info_bar_middle));
					}
				}
				else{
					jQuery('.covid-19-advisory-wrap').css('position','relative');
				}
				jQuery('.covid-19-close-btn').click(function(e){
					e.preventDefault();
					jQuery('.covid-19-advisory-wrap').hide().remove();
				});
			}
		}
	});
})
