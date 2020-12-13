jQuery(document).ready(function(e) {
	jQuery('#collapse_nav_cnt').hide();
	jQuery('#caduthuz_snakeladder_tab_nav li.tab_nav a').click(function(e) {
		e.preventDefault();
		if(jQuery(this).attr('class') !='active')
		{
			jQuery('.caduthuz_snakeladder_tab').slideUp(500);
			jQuery('#caduthuz_snakeladder_tab_nav li a').removeClass('active');
			jQuery(this).addClass('active');
			jQuery('#caduthuz_snakeladder_tab_'+jQuery(this).attr('href')).slideDown(500);
		}
		jQuery('#caduthuz_snakeladder_tab_wrap').slideDown(500);
		jQuery('#collapse_nav_cnt').show();
	}); 
	jQuery('#collapse_nav_cnt').click(function(e) {
		e.preventDefault();
		jQuery('#caduthuz_snakeladder_tab_wrap').slideUp(500);
		jQuery('#caduthuz_snakeladder_tab_nav li a').removeClass('active');
		jQuery('#collapse_nav_cnt').hide();
	}); 
	jQuery('#snakeladder_signup_btn').click(function(e) {
        e.preventDefault();
		snakeladder_player_signup();
    });
	jQuery('#snakeladder_login_btn').click(function(e) {
        e.preventDefault();
		snakeladder_player_login();
    });
	jQuery('#snakeladder_forgot_btn').click(function(e) {
        e.preventDefault();
		snakeladder_player_forgot();
    });
	jQuery('input:text, input:password').keyup(function(e) {
		jQuery(this).removeClass('error');
	});
	jQuery('.caduthuz_snakeladder_auth_logout').click(function(e) {
        e.preventDefault();
		jQuery('#snakeladder_player_logout_frm').submit();
    });
	snakeladder_player_info();
});
// ---------- Preloader ----------
jQuery(window).load(function() {
	jQuery("#loader").fadeOut();
	jQuery("#mask").delay(1000).fadeOut("slow",function(){
		jQuery('html, body').animate({ scrollTop: jQuery(".caduthuz-snake-ladder-warpper").offset().top },1000);	
	});
});
function validate_email(email) 
{
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   return reg.test(email);
}
function snakeladder_player_signup()
{
	var signup_name = jQuery('#snakeladder_signup_name').val();
	var signup_email = jQuery('#snakeladder_signup_email').val();
	var signup_password = jQuery('#snakeladder_signup_password').val();
	if(signup_name =='')
	{
		jQuery('#snakeladder_signup_error').html('Please enter name.').css('display','block');
		jQuery('#snakeladder_signup_name').addClass('error').focus();
	}
	else if(signup_email =='')
	{
		jQuery('#snakeladder_signup_error').html('Please enter email.').css('display','block');
		jQuery('#snakeladder_signup_email').addClass('error').focus();
	}
	else if(!validate_email(signup_email))
	{
		jQuery('#snakeladder_signup_error').html('Please enter a valid email.').css('display','block');
		jQuery('#snakeladder_signup_email').addClass('error').focus();
	}
	else if(signup_password =='')
	{
		jQuery('#snakeladder_signup_error').html('Please enter  password.').css('display','block');
		jQuery('#snakeladder_signup_password').addClass('error').focus();
	}
	else
	{
		jQuery('#caduthuz_snakeladder_tab_wrap').slideUp(500);
		jQuery('#caduthuz_snakeladder_tab_2').slideUp(500);
		jQuery.ajax({
			url: ajaxurl,
			type: 'post',
			dataType: "json",
			cache: false,
			data: {'action' : 'snakeladder_player', 'ajax_action' : 'player_signup', 'player_name' : signup_name, 'player_email' : signup_email, 'player_password' : signup_password},
			success: function(data) {
						if(data.error_msg !='')
						{
							jQuery('#caduthuz_snakeladder_tab_wrap').slideDown(500);
							jQuery('#caduthuz_snakeladder_tab_2').slideDown(500);
							jQuery('#snakeladder_signup_error').html(data.error_msg).css('display','block');
						}
						else
						{
							jQuery('#snakeladder_signup_error').html('').css('display','none');
							jQuery('.caduthuz_snakeladder_auth_link').css('display','none');
							jQuery('.caduthuz_snakeladder_auth_logout').css('display','inline-flex');
							snakeladder_player_data_change(data);
						}
					}
				});	
	}
}
function snakeladder_player_login()
{
	var login_email = jQuery('#snakeladder_login_email').val();
	var login_password = jQuery('#snakeladder_login_password').val();
	if(login_email =='')
	{
		jQuery('#snakeladder_login_error').html('Please enter email.').css('display','block');
		jQuery('#snakeladder_login_email').addClass('error').focus();
	}
	else if(!validate_email(login_email))
	{
		jQuery('#snakeladder_login_error').html('Please enter a valid email.').css('display','block');
		jQuery('#snakeladder_login_email').addClass('error').focus();
	}
	else if(login_password =='')
	{
		jQuery('#snakeladder_login_error').html('Please enter  password.').css('display','block');
		jQuery('#snakeladder_login_password').addClass('error').focus();
	}
	else
	{
		jQuery('#caduthuz_snakeladder_tab_wrap').slideUp(500);
		jQuery('#caduthuz_snakeladder_tab_3').slideUp(500);
		jQuery.ajax({
			url: ajaxurl,
			type: 'post',
			dataType: "json",
			cache: false,
			data: {'action' : 'snakeladder_player', 'ajax_action' : 'player_login', 'player_email' : login_email, 'player_password' : login_password},
			success: function(data) {
						if(data.error_msg !='')
						{
							jQuery('#caduthuz_snakeladder_tab_wrap').slideDown(500);
							jQuery('#caduthuz_snakeladder_tab_3').slideDown(500);
							jQuery('#snakeladder_login_error').html(data.error_msg).css('display','block');
						}
						else
						{
							jQuery('#snakeladder_signup_error').html('').css('display','none');
							jQuery('.caduthuz_snakeladder_auth_link').css('display','none');
							jQuery('.caduthuz_snakeladder_auth_logout').css('display','inline-flex');
							snakeladder_player_data_change(data);
						}
					}
				});	
	}
}
function snakeladder_player_forgot()
{
	var forgot_email = jQuery('#snakeladder_forgot_email').val();
	if(forgot_email =='')
	{
		jQuery('#snakeladder_forgot_error').html('Please enter email.').css('display','block');
		jQuery('#snakeladder_forgot_email').addClass('error').focus();
	}
	else if(!validate_email(forgot_email))
	{
		jQuery('#snakeladder_forgot_error').html('Please enter a valid email.').css('display','block');
		jQuery('#snakeladder_forgot_email').addClass('error').focus();
	}
	else
	{
		jQuery('#caduthuz_snakeladder_tab_wrap').slideUp(500);
		jQuery('#caduthuz_snakeladder_tab_4').slideUp(500);
		jQuery.ajax({
			url: ajaxurl,
			type: 'post',
			dataType: "json",
			cache: false,
			data: {'action' : 'snakeladder_player', 'ajax_action' : 'player_forgot', 'player_email' : forgot_email},
			success: function(data) {
						jQuery('#caduthuz_snakeladder_tab_wrap').slideDown(500);
						jQuery('#caduthuz_snakeladder_tab_4').slideDown(500);
						if(data.error_msg !='')
						{
							jQuery('#snakeladder_forgot_error').html(data.error_msg).css('display','block');
						}
						else
						{
							jQuery('#snakeladder_forgot_error').css('color','#090').html('Success, Please check mail for new password.').css('display','block');
						}
					}
				});	
	}
}
function snakeladder_player_info_update(won,snake,ladder)
{
	jQuery.ajax({
		url: ajaxurl,
		type: 'post',
		dataType: "json",
		cache: false,
		data: {'action' : 'snakeladder_player', 'ajax_action' : 'player_info_update','won' : won, 'snake' : snake, 'ladder' : ladder},
		success: function(data) {
					if(data.error_msg =='')
					{
						 snakeladder_player_info();
					}
				}
			});	
}
function snakeladder_player_info()
{
	jQuery.ajax({
		url: ajaxurl,
		type: 'post',
		dataType: "json",
		cache: false,
		data: {'action' : 'snakeladder_player', 'ajax_action' : 'player_info'},
		success: function(data) {
					if(data.error_msg =='')
					{
						 snakeladder_player_data_change(data);
					}
				}
			});	
}
function snakeladder_player_data_change(data)
{
	snakeladder_player_user_name['player-1'] = data.name;
	jQuery('#caduthuz-snake-ladder-info-name-player-1').html('Player : '+snakeladder_player_user_name['player-1']);
	jQuery('#snakeladder_head_info_name').html(snakeladder_player_user_name['player-1']);
	jQuery('#snakeladder_head_games_played').html('Games Played : '+ data.games_played);
	jQuery('#snakeladder_head_total_score').html('Total Score : '+ data.total_score);
	jQuery('#snakeladder_head_won').html('Won : '+ data.games_won);
	jQuery('#snakeladder_head_faild').html('Faild : '+ data.games_faild);
	jQuery('#snakeladder_head_snake').html('Snake : '+ data.snake);
	jQuery('#snakeladder_head_ladder').html('Ladder : '+ data.ladder);
	if(jQuery('.caduthuz-snake-ladder-who-is').html() == "Guest's Turn")
	{
		jQuery('.caduthuz-snake-ladder-who-is').html(snakeladder_player_user_name['player-1']+"' Turn");
	}
	jQuery('.caduthuz_snakeladder_head_detail .total_count').css("display","inline-table");
}