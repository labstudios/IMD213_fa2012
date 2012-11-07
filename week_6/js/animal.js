var Animal = new Class({

	Implements: [Options, Events],

	options: {
		age: 2,
		name: "Freddy",
		sound: "moomeowbarkbaaaa"
	},

	initialize: function(el, ops){
		this.element = document.id(el); //grabs the element provided and stores in a variable
		this.setOptions(ops);
		//console.log(this.options);
		this.element.addEvent("click", this.clicked.bind(this));
	},

	speak: function()
	{
		this.element.appendText(this.options.name + ": " + this.options.sound + "\r\n");
	},

	clicked: function()
	{
		this.speak();
	}
});