var cz_cpg_default_cell_bg = '#FFF';
var cz_cpg_selected_cell_bg = '#85c8ff';
var cz_cpg_active_cell_bg = '#ffda00';
var cz_cpg_front_cell_input_length = 1;
jQuery(document).ready(function(e) {
	jQuery('.cz_cpg_login_link').click(function(e) {
        e.preventDefault();
		window.location=jQuery(this).attr('href')+'?redirect_to='+String(window.location);
    });
	jQuery('.cz_crossowrd_cell').keydown(function(e) {
		if(e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 37 && e.keyCode != 39 && e.keyCode != 9 & e.charCode != 38 && e.charCode != 40 && e.charCode != 37 && e.charCode != 39 && e.charCode != 9)
		{ 
			cz_cpg_front_cell_input_length = Number(jQuery(this).attr('maxlength'));
			if(isNaN(cz_cpg_front_cell_input_length) || cz_cpg_front_cell_input_length === 'undefined' || cz_cpg_front_cell_input_length === null)
			{
				cz_cpg_front_cell_input_length = 1
			}
			if(jQuery(this).val() !='' && jQuery(this).val().length ==cz_cpg_front_cell_input_length)
			{
        		jQuery(this).val('');
			}
		}
    });
    jQuery('.cz_crossowrd_cell').keyup(function(e) {
		//alert(e.keyCode);
		jQuery('.cz_crossword_clue_topbar_'+jQuery(this).attr('data-id')).css('display','none');
		if(e.keyCode != 46 && e.keyCode !=8 && e.charCode != 46 && e.charCode !=8 )
		{   
			var cz_cpng_next_cell = 'Y';
			if(e.keyCode == 38 || e.keyCode ==40 || e.charCode == 38 || e.charCode ==40)
			{ 
				jQuery('#cz_cpg_direction_'+Number(jQuery(this).attr('data-id'))).val('D');
				if(jQuery(this).val() =='')
				{
					cz_cpng_next_cell = 'N';
				}
			}
			else if(e.keyCode == 37 || e.keyCode ==39 || e.charCode == 37 || e.charCode ==39)
			{ 
				jQuery('#cz_cpg_direction_'+Number(jQuery(this).attr('data-id'))).val('A');
				if(jQuery(this).val() =='')
				{
					cz_cpng_next_cell = 'N';
				}
			}
			cz_cpg_front_cell_input_length = Number(jQuery(this).attr('maxlength'));
			if(isNaN(cz_cpg_front_cell_input_length) || cz_cpg_front_cell_input_length === 'undefined' || cz_cpg_front_cell_input_length === null)
			{
				cz_cpg_front_cell_input_length = 1
			}
			if(cz_cpng_next_cell == 'Y' && jQuery(this).val() !='' && jQuery(this).val().length ==cz_cpg_front_cell_input_length)
			{
				
				jQuery(this).css('background-color',cz_cpg_selected_cell_bg);
				if(e.keyCode == 9 || e.keyCode ==9)
				{ 
					jQuery('.cz_crossowrd_cell').css('background-color',cz_cpg_default_cell_bg);
				}
				if(jQuery('#cz_cpg_direction_'+Number(jQuery(this).attr('data-id'))).val()=='A')
				{
					if(jQuery('#cz_crossowrd_cell_'+Number(jQuery(this).attr('data-id'))+'_'+(Number(jQuery(this).attr('data-index'))+1)).size()>0)
					{
						jQuery('#cz_crossowrd_cell_'+Number(jQuery(this).attr('data-id'))+'_'+(Number(jQuery(this).attr('data-index'))+1)).focus().css('background-color',cz_cpg_active_cell_bg);
					}
					else if(jQuery('#cz_crossowrd_cell_'+Number(jQuery(this).attr('data-id'))+'_'+(Number(jQuery(this).attr('data-index'))+Number(jQuery('#cz_cpg_column_'+Number(jQuery(this).attr('data-id'))).val()))).size()>0)
					{
						jQuery('#cz_crossowrd_cell_'+Number(jQuery(this).attr('data-id'))+'_'+(Number(jQuery(this).attr('data-index'))+Number(jQuery('#cz_cpg_column_'+Number(jQuery(this).attr('data-id'))).val()))).focus().css('background-color',cz_cpg_active_cell_bg);
						jQuery('#cz_cpg_direction_'+Number(jQuery(this).attr('data-id'))).val('D');
					}
				}
				else
				{
					if(jQuery('#cz_crossowrd_cell_'+Number(jQuery(this).attr('data-id'))+'_'+(Number(jQuery(this).attr('data-index'))+Number(jQuery('#cz_cpg_column_'+Number(jQuery(this).attr('data-id'))).val()))).size()>0)
					{
						jQuery('#cz_crossowrd_cell_'+Number(jQuery(this).attr('data-id'))+'_'+(Number(jQuery(this).attr('data-index'))+Number(jQuery('#cz_cpg_column_'+Number(jQuery(this).attr('data-id'))).val()))).focus().css('background-color',cz_cpg_active_cell_bg);
					}
					else  if(jQuery('#cz_crossowrd_cell_'+Number(jQuery(this).attr('data-id'))+'_'+(Number(jQuery(this).attr('data-index'))+1)).size()>0)
					{
						jQuery('#cz_crossowrd_cell_'+Number(jQuery(this).attr('data-id'))+'_'+(Number(jQuery(this).attr('data-index'))+1)).focus().css('background-color',cz_cpg_active_cell_bg);
						jQuery('#cz_cpg_direction_'+Number(jQuery(this).attr('data-id'))).val('A');
					}
				}
			}
		}
    });
	 jQuery('.cz_crossowrd_cell').click(function(e) {
		 jQuery('.cz_crossword_clue_topbar_'+jQuery(this).attr('data-id')).css('display','none');
		 jQuery('.cz_crossowrd_cell').css('background-color',cz_cpg_default_cell_bg);
		 jQuery(this).css('background-color',cz_cpg_active_cell_bg);
    });
	jQuery('.cz_crossword_cell_wrap').click(function(e) {
		 jQuery('.cz_crossword_clue_topbar_'+jQuery(this).find('.cz_crossowrd_cell').attr('data-id')).css('display','none');
		 jQuery('.cz_crossowrd_cell').css('background-color',cz_cpg_default_cell_bg);
		 jQuery(this).find('.cz_crossowrd_cell').css('background-color',cz_cpg_active_cell_bg).focus();
    });
	jQuery('.cz_crossword_cell_wrap cz_crossword_clue_no').click(function(e) {
		 jQuery('.cz_crossword_clue_topbar_'+jQuery(this).parent('.cz_crossword_cell_wrap').find('.cz_crossowrd_cell').attr('data-id')).css('display','none');
		 jQuery('.cz_crossowrd_cell').css('background-color',cz_cpg_default_cell_bg);
		 jQuery(this).jQuery(this).parent('.cz_crossword_cell_wrap').find('.cz_crossowrd_cell').css('background-color',cz_cpg_active_cell_bg).focus();
    });
	jQuery('.cz_crossword_clue_list li').click(function(e) {
		jQuery('#cz_cpg_direction_'+jQuery(this).attr('data-id')).val(jQuery(this).attr('data-direction'));
		jQuery('.cz_crossowrd_cell').css('background-color',cz_cpg_default_cell_bg);
		if(jQuery(this).attr('data-direction')=='A')
		{
			for(var cz_cpg_i=Number(jQuery(this).attr('data-start')); cz_cpg_i<=Number(jQuery(this).attr('data-end')); cz_cpg_i++)
			{
				jQuery('#cz_crossowrd_cell_'+jQuery(this).attr('data-id')+'_'+cz_cpg_i).css('background-color',cz_cpg_selected_cell_bg);
			}
		}
		else
		{
			for(var cz_cpg_i=Number(jQuery(this).attr('data-start')); cz_cpg_i<=Number(jQuery(this).attr('data-end')); cz_cpg_i+=Number(jQuery('#cz_cpg_column_'+jQuery(this).attr('data-id')).val()))
			{
				jQuery('#cz_crossowrd_cell_'+jQuery(this).attr('data-id')+'_'+cz_cpg_i).css('background-color',cz_cpg_selected_cell_bg);
			}
		}
		if(jQuery('#cz_crossowrd_cell_'+jQuery(this).attr('data-id')+'_'+jQuery(this).attr('data-start')).val()=='' || jQuery('#cz_cpg_result_'+jQuery(this).attr('data-id')).val() =='Y')
		{
			jQuery('#cz_crossowrd_cell_'+jQuery(this).attr('data-id')+'_'+jQuery(this).attr('data-start')).focus().css('background-color',cz_cpg_active_cell_bg);
		}
		else
		{
			if(jQuery(this).attr('data-direction')=='A')
			{
				jQuery('#cz_crossowrd_cell_'+jQuery(this).attr('data-id')+'_'+(Number(jQuery(this).attr('data-start'))+1)).focus().css('background-color',cz_cpg_active_cell_bg);
			}
			else
			{
				jQuery('#cz_crossowrd_cell_'+jQuery(this).attr('data-id')+'_'+(Number(jQuery(this).attr('data-start'))+Number(jQuery('#cz_cpg_column_'+jQuery(this).attr('data-id')).val()))).focus().css('background-color',cz_cpg_active_cell_bg);
			}
		}
		jQuery('.cz_crossword_clue_topbar_'+jQuery(this).attr('data-id')).css('display','inline-block').html(' <span class="cz_crossword_top_clueno">'+jQuery(this).attr('data-start')+' '+jQuery(this).attr('data-direction')+'. </span> '+jQuery(this).attr('data-clue'));
		jQuery("html, body").animate({ scrollTop: (jQuery('#cz_crossowrd_cell_'+jQuery(this).attr('data-id')+'_'+jQuery(this).attr('data-start')).offset()).top-200 }, 600);
    });
});