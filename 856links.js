function hideLinks(){
    
    var stringsToHide = new Array ();
    stringsToHide[1] = new Array ("avila");
    stringsToHide[2] = new Array ("mcckc");
    stringsToHide[3] = new Array ("mcckc");
    stringsToHide[4] = new Array ("mcckc");
    stringsToHide[5] = new Array ("mcckc");
    stringsToHide[6] = new Array ("jewell");
    stringsToHide[8] = new Array ("rockhurst");
    stringsToHide[9] = new Array ("spst");
    stringsToHide[10] = new Array ("kcai");
    stringsToHide[12] = new Array ("mcckc");

    


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
    function showLinks(){
    
    var stringsToShow = new Array ();
    stringsToShow[1] = new Array ("Freely available online", "MU, MST, UMKC, UMSL online access");
    stringsToShow[4] = new Array ("Freely available online", "MU, MST, UMKC, UMSL online access");
    stringsToShow[5] = new Array ("Freely available online", "MU, MST, UMKC, UMSL online access");
    stringsToShow[6] = new Array ("Freely available online", "MU, MST, UMKC, UMSL online access");
    


    var scopeDropdown = $("#searchscope").val();
    
    delete stringsToShow[scopeDropdown];
	
    if ($("table").is('.bibLinks')){
	for (var k in stringsToShow) {
	    for (var l in stringsToShow[k]) {
		$(".bibLinks a").each(function(index, element) {
		    if($(element).parent().html().indexOf(stringsToShow[k][l]) > -1) {
			$(element).parent().parent().show()
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
	showLinks();
});