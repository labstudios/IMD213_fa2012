var Slider = new Class({
	
	//Extends: ,
	
	Implements: [Options, Events],
	
	options:{
		transition: "quad:in"
	},
	currentPosition: 0,

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);

		this.leftBtn = this.element.getElement(".left-btn");
		this.rightBtn = this.element.getElement(".right-btn");
		this.window = this.element.getElement(".window");
		this.slider = this.window.getElement("ul");
		this.items = this.slider.getElements("li");

		this.windowWidth = this.window.getStyle("width").toInt();
		this.items.setStyle("width", this.windowWidth);

		this.slider.setStyle("width", this.windowWidth * (this.items.length + 1));
		this.leftBtn.addEvent("click", this.moveLeft.bind(this));
		this.rightBtn.addEvent("click", this.moveRight.bind(this));

		this.tweener = new Fx.Tween(this.slider, {
			duration: 500,
			transition: this.options.transition,
			link: "cancel"
		});
	},

	moveLeft: function()
	{
		this.currentPosition--;
		if(this.currentPosition < 0)
		{
			this.currentPosition = this.items.length - 1;
		}
		this.move();
	},

	moveRight: function()
	{
		this.currentPosition++;
		if(this.currentPosition > this.items.length - 1)
		{
			this.currentPosition = 0;
		}
		this.move();
	},

	move: function()
	{
		this.tweener.start("left", -((this.windowWidth + 4) * this.currentPosition));
	}
});













