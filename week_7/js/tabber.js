var Tabber = new Class({

	Implements: [Options, Events],

	options:{
		navAreaSelector: ".nav",
		contentAreaSelector: ".content"
	},

	initialize: function(el, ops)
	{
		this.element = document.id(el);
		this.setOptions(ops);
		//select the stuff we need later
		this.navArea = this.element.getElement(this.options.navAreaSelector);
		this.contentArea = this.element.getElement(this.options.contentAreaSelector);
		this.navItems = this.navArea.getChildren("a");
		this.contentItems = this.contentArea.getChildren("div");
		//set up appropriate events
		this.navItems.addEvent("click", this.navClicked.bind(this));
		this.navItems[0].fireEvent("click", {target:this.navItems[0], stop:function(){}});
	},

	navClicked: function(e)
	{
		e.stop();
		var contentID = e.target.get("data-contentID");
		this.contentItems.dissolve();
		this.contentArea.getElement("div[data-contentID='" + contentID + "']").reveal();
		return false;
	}
});