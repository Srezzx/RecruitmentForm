var snakeladder_player_pos =0;
var snakeladder_board_gap =50;
var snakeladder_board_cell =60;
var snakeladder_board_size =600;
var snakeladder_board_width =545;
var snakeladder_player_speed =200;
var snakeladder_pos_left =0;
var snakeladder_pos_temp =0;

var snakeladder_snanke_head=new Array(); 
var snakeladder_snanke_tail=new Array();

var snakeladder_ladder_head=new Array(); 
var snakeladder_ladder_tail=new Array();

var snakeladder_player_user_pos=new Array();
snakeladder_player_user_pos['player-1'] =0;
snakeladder_player_user_pos['player-2'] =0;

var snakeladder_player_user_snake=new Array();
snakeladder_player_user_snake['player-1'] =0;
snakeladder_player_user_snake['player-2'] =0;

var snakeladder_player_user_ladder=new Array();
snakeladder_player_user_ladder['player-1'] =0;
snakeladder_player_user_ladder['player-2'] =0;

var snakeladder_player_user_dice=new Array();
snakeladder_player_user_dice['player-1'] =0;
snakeladder_player_user_dice['player-2'] =0;

var snakeladder_player_user_name=new Array();
snakeladder_player_user_name['player-1'] ='Guest';
snakeladder_player_user_name['player-2'] ='Sparky';


function snakeladder_play(player_user)
{
	snakeladder_player_pos = snakeladder_player_user_pos[player_user];
	var play_finish_timer = 1000;
	var dice = Math.floor(Math.random() * 6) + 1;
	jQuery('#caduthuz-snake-ladder-history-'+player_user).html('<p>Dice Score : '+dice+'</p>'+jQuery('#caduthuz-snake-ladder-history-'+player_user).html());
	jQuery('#caduthuz-snake-ladder-dice_roll_no_'+dice).css('display','block');
	if(snakeladder_player_pos+dice >100)
	{
		 play_finish_timer = 3000;
		jQuery('#caduthuz-snake-ladder-history-'+player_user).html('<p>Opps... dice score must be <= '+(dice-(snakeladder_player_pos+dice-100))+' to win or <br>move next</p>'+jQuery('#caduthuz-snake-ladder-history-'+player_user).html());
		jQuery('.caduthuz-snake-ladder-main-info-box').html('Opps... '+snakeladder_player_user_name[player_user]+', You must get dice score <= '+(dice-(snakeladder_player_pos+dice-100))+' to win or move to next setp');

	}
	else
	{
		snakeladder_player_user_dice[player_user] = snakeladder_player_user_dice[player_user]+1;
		jQuery('#caduthuz-snake-ladder-info-dice-throws-'+player_user).html('Dice Throws : '+snakeladder_player_user_dice[player_user]);
		
		
		if(snakeladder_player_pos ==0) 
		{
			jQuery('#caduthuz-snake-ladder-info-start-pos-'+player_user).html('Start Position : '+dice);
			jQuery('#caduthuz-snake-ladder-history-'+player_user).html('<p>Game Started</p>'+jQuery('#caduthuz-snake-ladder-history-'+player_user).html());
			jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':'0px','bottom': snakeladder_board_gap+'px'},snakeladder_player_speed,'swing',function(){
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':((dice-1)*snakeladder_board_cell)+'px'},snakeladder_player_speed);
				});
		}
		else
		{
			snakeladder_pos_left =0;
			snakeladder_pos_temp =0;
			for(var i=snakeladder_player_pos;i<=snakeladder_player_pos+dice;i++)
			{
				if(i<11)
				{
					snakeladder_pos_left = (i-1)*snakeladder_board_cell;
					if(snakeladder_pos_left == 0)
					snakeladder_pos_left = snakeladder_board_cell;
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px'},snakeladder_player_speed);
				}
				else if(i==11)
				{
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left': snakeladder_board_width+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*1))+'px'},snakeladder_player_speed);
				}
				else if(i>11 && i<21)
				{
					snakeladder_pos_temp = i-10;
					snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px'},snakeladder_player_speed);
				}
				else if(i==21)
				{
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':'0px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*2))+'px'},snakeladder_player_speed);
				}
				else if(i>21 && i<31)
				{
					snakeladder_pos_temp = i-21;
					snakeladder_pos_left = snakeladder_pos_temp*snakeladder_board_cell;
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px'},snakeladder_player_speed);
				}
				else if(i==31)
				{
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left': snakeladder_board_width+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*3))+'px'},snakeladder_player_speed);
				}
				else if(i>31 && i<41)
				{
					snakeladder_pos_temp = i-30;
					snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px'},snakeladder_player_speed);
				}
				else if(i==41)
				{
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':'0px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*4))+'px'},snakeladder_player_speed);
				}
				else if(i>41 && i<51)
				{
					snakeladder_pos_temp = i-41;
					snakeladder_pos_left = snakeladder_pos_temp*snakeladder_board_cell;
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px'},snakeladder_player_speed);
				}
				else if(i==51)
				{
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left': snakeladder_board_width+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*5))+'px'},snakeladder_player_speed);
				}
				else if(i>51 && i<61)
				{
					snakeladder_pos_temp = i-50;
					snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px'},snakeladder_player_speed);
				}
				else if(i==61)
				{
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':'0px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*6))+'px'},snakeladder_player_speed);
				}
				else if(i>61 && i<71)
				{
					snakeladder_pos_temp = i-61;
					snakeladder_pos_left = snakeladder_pos_temp*snakeladder_board_cell;
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px'},snakeladder_player_speed);
				}
				else if(i==71)
				{
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left': snakeladder_board_width+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*7))+'px'},snakeladder_player_speed);
				}
				else if(i>71 && i<81)
				{
					snakeladder_pos_temp = i-70;
					snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px'},snakeladder_player_speed);
				}
				else if(i==81)
				{
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':'0px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*8))+'px'},snakeladder_player_speed);
				}
				else if(i>81 && i<91)
				{
					snakeladder_pos_temp = i-81;
					snakeladder_pos_left = snakeladder_pos_temp*snakeladder_board_cell;
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px'},snakeladder_player_speed);
				}
				else if(i==91)
				{
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left': snakeladder_board_width+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*9))+'px'},snakeladder_player_speed);
				}
				else if(i>91 && i<101)
				{
					snakeladder_pos_temp = i-90;
					snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
					jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px'},snakeladder_player_speed);
				}
			}
		}
		snakeladder_player_pos+=dice;
		jQuery('#caduthuz-snake-ladder-history-'+player_user).html('<p>Move to : '+snakeladder_player_pos+'</p>'+jQuery('#caduthuz-snake-ladder-history-'+player_user).html());
		if(snakeladder_snanke_head.indexOf(snakeladder_player_pos)> -1)
		{
			snakeladder_player_pos = snakeladder_snanke_tail[snakeladder_player_pos];
			jQuery('#caduthuz-snake-ladder-history-'+player_user).html('<p>Snanke, Move Down : '+snakeladder_player_pos+'</p>'+jQuery('#caduthuz-snake-ladder-history-'+player_user).html());
			jQuery('.caduthuz-snake-ladder-main-info-box').html('Opps... Snanke, '+snakeladder_player_user_name[player_user]+' Move Down : '+snakeladder_player_pos);
			snakeladder_player_user_snake[player_user] = snakeladder_player_user_snake[player_user]+1;
			jQuery('#caduthuz-snake-ladder-info-snake-'+player_user).html('Snake :'+snakeladder_player_user_snake[player_user]);
			snakeladder_pos_left =0;
			snakeladder_pos_temp =0;
			jQuery('.caduthuz-snake-ladder-'+player_user).stop();
			if(snakeladder_player_pos<11)
			{
				snakeladder_pos_left = (snakeladder_player_pos-1)*snakeladder_board_cell;
				if(snakeladder_pos_left == 0)
				snakeladder_pos_left = snakeladder_board_cell;
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':snakeladder_board_gap+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>10 && snakeladder_player_pos<21)
			{
				snakeladder_pos_temp = snakeladder_player_pos-10;
				snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*1))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>20 && snakeladder_player_pos<31)
			{
				snakeladder_pos_temp = snakeladder_player_pos-20;
				snakeladder_pos_left = (snakeladder_pos_temp-1)*snakeladder_board_cell;
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*2))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>30 && snakeladder_player_pos<41)
			{
				snakeladder_pos_temp = snakeladder_player_pos-30;
				snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*3))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>40 && snakeladder_player_pos<51)
			{
				snakeladder_pos_temp = snakeladder_player_pos-40;
				snakeladder_pos_left = (snakeladder_pos_temp-1)*snakeladder_board_cell;
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*4))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>50&& snakeladder_player_pos<61)
			{
				snakeladder_pos_temp = snakeladder_player_pos-50;
				snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*5))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>60 && snakeladder_player_pos<71)
			{
				snakeladder_pos_temp = snakeladder_player_pos-60;
				snakeladder_pos_left = (snakeladder_pos_temp-1)*snakeladder_board_cell;
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*6))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>70 && snakeladder_player_pos<81)
			{
				snakeladder_pos_temp = snakeladder_player_pos-70;
				snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*7))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>80 && snakeladder_player_pos<91)
			{
				snakeladder_pos_temp = snakeladder_player_pos-80;
				snakeladder_pos_left = (snakeladder_pos_temp-1)*snakeladder_board_cell;
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*8))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>90 && snakeladder_player_pos<101)
			{
				snakeladder_pos_temp = snakeladder_player_pos-90;
				snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*9))+'px'},snakeladder_player_speed);
			}
		}
		else if(snakeladder_ladder_tail.indexOf(snakeladder_player_pos)> -1)
		{
			snakeladder_player_pos = snakeladder_ladder_head[snakeladder_player_pos];
			jQuery('#caduthuz-snake-ladder-history-'+player_user).html('<p>Ladder, Move Up : '+snakeladder_player_pos+'</p>'+jQuery('#caduthuz-snake-ladder-history-'+player_user).html());
			jQuery('.caduthuz-snake-ladder-main-info-box').html('YoYo... Ladder, '+snakeladder_player_user_name[player_user]+' Move Up : '+snakeladder_player_pos);
			snakeladder_player_user_ladder[player_user] = snakeladder_player_user_ladder[player_user]+1;
			jQuery('#caduthuz-snake-ladder-info-ladder-'+player_user).html('Ladder :'+snakeladder_player_user_ladder[player_user]);
			snakeladder_pos_left =0;
			snakeladder_pos_temp =0;
			jQuery('.caduthuz-snake-ladder-'+player_user).stop();
			if(snakeladder_player_pos<11)
			{
				snakeladder_pos_left = (snakeladder_player_pos-1)*snakeladder_board_cell;
				if(snakeladder_pos_left == 0)
				snakeladder_pos_left = snakeladder_board_cell;
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':snakeladder_board_gap+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>10 && snakeladder_player_pos<21)
			{
				snakeladder_pos_temp = snakeladder_player_pos-10;
				snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*1))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>20 && snakeladder_player_pos<31)
			{
				snakeladder_pos_temp = snakeladder_player_pos-20;
				snakeladder_pos_left = (snakeladder_pos_temp-1)*snakeladder_board_cell;
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*2))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>30 && snakeladder_player_pos<41)
			{
				snakeladder_pos_temp = snakeladder_player_pos-30;
				snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*3))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>40 && snakeladder_player_pos<51)
			{
				snakeladder_pos_temp = snakeladder_player_pos-40;
				snakeladder_pos_left = (snakeladder_pos_temp-1)*snakeladder_board_cell;
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*4))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>50&& snakeladder_player_pos<61)
			{
				snakeladder_pos_temp = snakeladder_player_pos-50;
				snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*5))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>60 && snakeladder_player_pos<71)
			{
				snakeladder_pos_temp = snakeladder_player_pos-60;
				snakeladder_pos_left = (snakeladder_pos_temp-1)*snakeladder_board_cell;
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*6))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>70 && snakeladder_player_pos<81)
			{
				snakeladder_pos_temp = snakeladder_player_pos-70;
				snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*7))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>80 && snakeladder_player_pos<91)
			{
				snakeladder_pos_temp = snakeladder_player_pos-80;
				snakeladder_pos_left = (snakeladder_pos_temp-1)*snakeladder_board_cell;
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*8))+'px'},snakeladder_player_speed);
			}
			else if(snakeladder_player_pos>90 && snakeladder_player_pos<101)
			{
				snakeladder_pos_temp = snakeladder_player_pos-90;
				snakeladder_pos_left = snakeladder_board_size-(snakeladder_pos_temp*snakeladder_board_cell);
				jQuery('.caduthuz-snake-ladder-'+player_user).animate({'left':snakeladder_pos_left+'px','bottom':(snakeladder_board_gap+(snakeladder_board_cell*9))+'px'},snakeladder_player_speed);
			}
		}
		snakeladder_player_user_pos[player_user] = snakeladder_player_pos;
		jQuery('#caduthuz-snake-ladder-info-current-pos-'+player_user).html('Current Position : '+snakeladder_player_pos);
		
	}
	if(snakeladder_player_pos ==100)
	{
		snakeladder_player_pos =0;
		snakeladder_play_finish(player_user);
	}
	else
	{
		setTimeout("snakeladder_player_finish('"+player_user+"')",play_finish_timer);
	}
}
function snakeladder_play_finish(player_user)
{
	jQuery('#caduthuz-snake-ladder-history-'+player_user).html('<p>Win the Game</p>'+jQuery('#caduthuz-snake-ladder-history-'+player_user).html());
	jQuery('.caduthuz-snake-ladder-main-info-box').html(snakeladder_player_user_name[player_user]+' Win the Game, Congratulations...');
	jQuery('#caduthuz-snake-ladder-info-current-pos-'+player_user).html('Current Position : 100');
	snakeladder_player_user_pos['player-1']=0;
	snakeladder_player_user_pos['player-2']=0;
	jQuery('.caduthuz-snake-ladder-player-1').animate({'left':'0px','bottom' : '0px'},snakeladder_player_speed);
	jQuery('.caduthuz-snake-ladder-player-2').animate({'left':'55px','bottom' : '0px'},snakeladder_player_speed);
	jQuery('.caduthuz-snake-ladder-dice_roll_no img').css('display','none');
	jQuery('.caduthuz-snake-ladder-who-is').html('');
	jQuery('.caduthuz-snake-ladder-dice_roll img').css('display','none');
	jQuery('.caduthuz-snake-ladder-dice img').css('display','none');
	jQuery('.caduthuz-snake-ladder-play-agin img').css('display','block');
	if(player_user == 'player-1')
	{
		snakeladder_player_info_update('y',snakeladder_player_user_snake['player-1'],snakeladder_player_user_ladder['player-1']);
	}
	else
	{
		snakeladder_player_info_update('n',snakeladder_player_user_snake['player-1'],snakeladder_player_user_ladder['player-1']);
	}
}
function snakeladder_play_agin()
{
	jQuery('.caduthuz-snake-ladder-main-info-box').html('');
	jQuery('.caduthuz-snake-ladder-play-agin img').css('display','none');
	snakeladder_play_start();
}
function snakeladder_play_start()
{
	jQuery('.caduthuz-snake-ladder-player-1').animate({'left':'0px','bottom' : '0px'},snakeladder_player_speed);
	jQuery('.caduthuz-snake-ladder-player-2').animate({'left':'55px','bottom' : '0px'},snakeladder_player_speed);
	jQuery('.caduthuz-snake-ladder-main-info-box').html();
	
	jQuery('#caduthuz-snake-ladder-info-start-pos-player-1').html('Player : '+snakeladder_player_user_name['player-1']);
	jQuery('#caduthuz-snake-ladder-info-start-pos-player-1').html('Start Position : 0');
	jQuery('#caduthuz-snake-ladder-info-current-pos-player-1').html('Current Position : 0');
	jQuery('#caduthuz-snake-ladder-info-dice-throws-player-1').html('Dice Throws : 0');
	jQuery('#caduthuz-snake-ladder-info-snake-player-1').html('Snake : 0');
	jQuery('#caduthuz-snake-ladder-info-ladder-player-1').html('Ladder : 0');
	jQuery('#caduthuz-snake-ladder-history-player-1').html('');
	
	jQuery('#caduthuz-snake-ladder-info-start-pos-player-2').html('Player : '+snakeladder_player_user_name['player-2']);
	jQuery('#caduthuz-snake-ladder-info-start-pos-player-2').html('Start Position : 0');
	jQuery('#caduthuz-snake-ladder-info-current-pos-player-2').html('Current Position : 0');
	jQuery('#caduthuz-snake-ladder-info-dice-throws-player-2').html('Dice Throws : 0');
	jQuery('#caduthuz-snake-ladder-info-snake-player-2').html('Snake : 0');
	jQuery('#caduthuz-snake-ladder-info-ladder-player-2').html('Ladder : 0');
	jQuery('#caduthuz-snake-ladder-history-player-2').html('');
	
	snakeladder_player_user_pos['player-1'] =0;
	snakeladder_player_user_pos['player-2'] =0;
	
	snakeladder_player_user_snake['player-1'] =0;
	snakeladder_player_user_snake['player-2'] =0;
	
	snakeladder_player_user_ladder['player-1'] =0;
	snakeladder_player_user_ladder['player-2'] =0;
	
	snakeladder_player_user_dice['player-1'] =0;
	snakeladder_player_user_dice['player-2'] =0;
	
	jQuery('.caduthuz-snake-ladder-who-is').html(snakeladder_player_user_name['player-1']+'\'s Turn');
	jQuery('#caduthuz-snake-ladder-dice-roll-dice-player-1').css('display','block');
	jQuery('#caduthuz-snake-ladder-dice-roll-player-1').css('display','block');
}
function snakeladder_player_finish(player_user)
{
	jQuery('.caduthuz-snake-ladder-dice_roll_no img').css('display','none');
	jQuery('.caduthuz-snake-ladder-dice img').css('display','none');
	if(player_user == 'player-1')
	{
		jQuery('.caduthuz-snake-ladder-who-is').html(snakeladder_player_user_name['player-2']+'\' Turn');
		jQuery('#caduthuz-snake-ladder-dice-roll-dice-player-2').css('display','block');
		jQuery('#caduthuz-snake-ladder-dice-roll-player-2').css('display','block');
		setTimeout('snakeladder_player_switch()',5000);
	}
	else
	{
		jQuery('.caduthuz-snake-ladder-who-is').html(snakeladder_player_user_name['player-1']+'\'s Turn');
		jQuery('#caduthuz-snake-ladder-dice-roll-dice-player-1').css('display','block');
		jQuery('#caduthuz-snake-ladder-dice-roll-player-1').css('display','block');
	}
}
var player_switch = 'player-1';
function snakeladder_player_switch()
{
	jQuery('.caduthuz-snake-ladder-main-info-box').html('');
	jQuery('.caduthuz-snake-ladder-dice_roll_no img').css('display','none');
	jQuery('#caduthuz-snake-ladder-dice-roll-dice-player-1').css('display','none');
	if(player_switch == 'player-1')
	{
		jQuery('.caduthuz-snake-ladder-who-is').html(snakeladder_player_user_name['player-1']+' Playing');
		player_switch = 'player-2';
		snakeladder_play('player-1');
	}
	else
	{
		jQuery('.caduthuz-snake-ladder-who-is').html(snakeladder_player_user_name['player-2']+' Playing');
		snakeladder_play('player-2');
		player_switch = 'player-1';
	}
}
function snakeladder_set_board()
{
	var screen_width = jQuery(window).width();
	var screen_height = jQuery(window).height();
	if(screen_width<= 767 && screen_width>480)
	{
		snakeladder_board_gap =50;
		snakeladder_board_cell =55;
		snakeladder_board_size =550;
		snakeladder_board_width =490;
	}
	else if(screen_width<= 480 && screen_width>320)
	{
		snakeladder_board_gap =60;
		snakeladder_board_cell =34;
		snakeladder_board_size =340;
		snakeladder_board_width =303;
	}
	else if(screen_width<= 320)
	{
		snakeladder_board_gap =60;
		snakeladder_board_cell =29;
		snakeladder_board_size =290;
		snakeladder_board_width =261;
	}
	snakeladder_play_start();
}
jQuery(document).ready(function(e) {
	snakeladder_set_board();
    jQuery('#caduthuz-snake-ladder-dice-roll-dice-player-1').click(function(e) {
        e.preventDefault();
		snakeladder_player_switch();
    });
    jQuery('.caduthuz-snake-ladder-play-agin img').click(function(e) {
        e.preventDefault();
		snakeladder_play_agin();
    });
});
jQuery(window).resize(function(e) {
	snakeladder_set_board();
});
