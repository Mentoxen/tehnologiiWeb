(function( $ ){

	$(function() {
		$('#form1').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit');
			
			form.find('.rfield').addClass('empty_field');
			
			// Checking the fields of the form
			function checkInput(){
				form.find('.rfield').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Highlighting the unfilled fields
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#e73573'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').length;
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			},500);

			btn.click(function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					$.ajax({
            type: 'POST',
            url: 'post.php',
            data: $('#form1').serialize(),
            success: function () {
			  	$("#form1 #url").val("");
				$("#form1 #name").val("");
				$("#form1 #mail").val("");
				$("#good1").css("display", "block");
				$("#form1").css("display", "none");
            }
          });
				}
			});
			
		});
		
	});

})( jQuery );