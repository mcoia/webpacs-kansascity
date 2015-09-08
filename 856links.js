function hideLinks(){
    
    var stringsToHide = new Array ();
    stringsToHide[1] = new Array ("avila");
    stringsToHide[2] = new Array ("mcckc");
    stringsToHide[3] = new Array ("mcckc");
    stringsToHide[4] = new Array ("mcckc");
    stringsToHide[5] = new Array ("mcckc");
    stringsToHide[6] = new Array ("wjewell", "William Jewel");
    stringsToHide[8] = new Array ("rockhurst");
    stringsToHide[9] = new Array ("spst");
    stringsToHide[10] = new Array ("kcai");
    stringsToHide[12] = new Array ("mcckc");
    stringsToHide[13] = new Array ("park.edu");
 

    
    
    var scopeDropdown = $("#searchscope").val();
    
    delete stringsToHide[scopeDropdown];
	
    if ($("table").is('.bibLinks')){
	for (var k in stringsToHide) {
	    for (var l in stringsToHide[k]) {
		$(".bibLinks a").each(function(index, element) {
		    if($(element).parent().html().indexOf(stringsToHide[k][l]) > -1) {
			$(element).parent().parent().hide()
		    }    
		});
	    }
	}
	if ($(".bibLinks tr[style*=none]").length < $(".bibLinks a").length){
	    $(".bibLinks").show();       
	}
    }  
}
    
    
    $(document).ready(function () {
	hideLinks();
});