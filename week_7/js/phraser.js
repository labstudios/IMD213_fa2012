var Phraser = new Class({
	
	//Extends: ,
	
	Implements: [Options, Events],
	
	options:{
		phrase: "Howdy. This is the default.",
		boxSelector: "input",
		boxAttribute: "value",
		buttonSelector: "button"
	},

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);

		this.inputBox = this.element.getElement(this.options.boxSelector);
		this.button = this.element.getElement(this.options.buttonSelector);
		//console.log(this.inputBox, this.button);
		if(this.inputBox && this.button)
		{
			this.button.addEvent("click", this.showPhrase.bind(this));
		}
		else
		{
			throw new Error("Your selectors are teh suckage. Go fix them for " + element);
		}
	},

	showPhrase: function(){
		this.inputBox.set(this.options.boxAttribute, this.options.phrase);
		this.fireEvent("click");
	}
});











