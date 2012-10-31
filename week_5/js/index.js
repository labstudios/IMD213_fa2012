document.addEvent("domready", function(){
	var navTags = $$("#nav a");
	//console.log(navTags);

	navTags.addEvent("click", function(e){
		//console.log(this, e);
		e.stop();

		var dataName = this.get("data-content");
		//console.log(dataName);
		document.id("content").load("content.php?content=" + dataName);
		return false;
	});
});