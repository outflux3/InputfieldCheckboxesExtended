$(document).ready(function() {
  
    $('.InputfieldCheckboxesExtended label').each(function(){	
    	$description = $(this).data('description');
    	$(this).attr('uk-tooltip',$description);
	});
    
});