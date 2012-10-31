/*document.addEvent("domready", function(){
	var navTags = $$("#nav a");
	navTags.addEvent("click", function(e){
		e.stop();
		var dataName = this.get("data-content");
		document.id("content").load("content.php?content=" + dataName);
		return false;
	});
});*/

$(document).ready(function(){
	var navTags = $("#nav a");
	navTags.click(function(e){
		e.stopPropagation ? e.stopPropagation():e.preventDefault();
		var dataName = $(this).attr("data-content");
		$("#content").load("content.php?content=" + dataName);
		return false;
	});
});