(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 500,
	fps: 24,
	color: "#404040",
	manifest: []
};



// symbols:



(lib.Bemvindo = function() {
	this.spriteSheet = ss["rolo_xico_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.rolo = function() {
	this.spriteSheet = ss["rolo_xico_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Interpolação4 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.rolo();
	this.instance.setTransform(-172,-234.6,1.173,1.173);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-172,-234.6,352,469.3);


(lib.Interpolação3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.rolo();
	this.instance.setTransform(-176,-234.6,1.173,1.173);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-176,-234.6,352,469.3);


// stage content:
(lib.roloxico = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Camada 2
	this.instance = new lib.Interpolação3("synched",0);
	this.instance.setTransform(209.5,228.7);

	this.instance_1 = new lib.Interpolação4("synched",0);
	this.instance_1.setTransform(207.1,557.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:207.1,y:557.8},29).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29).to({x:199.1,alpha:0},15).wait(1));

	// Camada 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3bAtIAAhaMAu3AAAIAABag");
	var mask_graphics_1 = new cjs.Graphics().p("A3bBxIAAjhMAu3AAAIAADhg");
	var mask_graphics_2 = new cjs.Graphics().p("A3bC0IAAlnMAu3AAAIAAFng");
	var mask_graphics_3 = new cjs.Graphics().p("A3bD4IAAnuMAu3AAAIAAHug");
	var mask_graphics_4 = new cjs.Graphics().p("A3bE7IAAp1MAu3AAAIAAJ1g");
	var mask_graphics_5 = new cjs.Graphics().p("A3bF+IAAr8MAu3AAAIAAL8g");
	var mask_graphics_6 = new cjs.Graphics().p("A3bHCIAAuDMAu3AAAIAAODg");
	var mask_graphics_7 = new cjs.Graphics().p("A3bIFIAAwJMAu3AAAIAAQJg");
	var mask_graphics_8 = new cjs.Graphics().p("A3bJIIAAyQMAu3AAAIAASQg");
	var mask_graphics_9 = new cjs.Graphics().p("A3bKMIAA0XMAu3AAAIAAUXg");
	var mask_graphics_10 = new cjs.Graphics().p("A3bLPIAA2dMAu3AAAIAAWdg");
	var mask_graphics_11 = new cjs.Graphics().p("A3bMTIAA4lMAu3AAAIAAYlg");
	var mask_graphics_12 = new cjs.Graphics().p("A3bNWIAA6rMAu3AAAIAAarg");
	var mask_graphics_13 = new cjs.Graphics().p("A3bOZIAA8yMAu3AAAIAAcyg");
	var mask_graphics_14 = new cjs.Graphics().p("A3bPdIAA+5MAu3AAAIAAe5g");
	var mask_graphics_15 = new cjs.Graphics().p("A3bQgMAAAgg/MAu3AAAMAAAAg/g");
	var mask_graphics_16 = new cjs.Graphics().p("A3bRkMAAAgjGMAu3AAAMAAAAjGg");
	var mask_graphics_17 = new cjs.Graphics().p("A3bSnMAAAglNMAu3AAAMAAAAlNg");
	var mask_graphics_18 = new cjs.Graphics().p("A3bTqMAAAgnTMAu3AAAMAAAAnTg");
	var mask_graphics_19 = new cjs.Graphics().p("A3bUuMAAAgpbMAu3AAAMAAAApbg");
	var mask_graphics_20 = new cjs.Graphics().p("A3bVxMAAAgrhMAu3AAAMAAAArhg");
	var mask_graphics_21 = new cjs.Graphics().p("A3bW1MAAAgtpMAu3AAAMAAAAtpg");
	var mask_graphics_22 = new cjs.Graphics().p("A3bX4MAAAgvvMAu3AAAMAAAAvvg");
	var mask_graphics_23 = new cjs.Graphics().p("A3bY7MAAAgx1MAu3AAAMAAAAx1g");
	var mask_graphics_24 = new cjs.Graphics().p("A3bZ+MAAAgz7MAu3AAAMAAAAz7g");
	var mask_graphics_25 = new cjs.Graphics().p("A3bbCMAAAg2DMAu3AAAMAAAA2Dg");
	var mask_graphics_26 = new cjs.Graphics().p("A3bcGMAAAg4LMAu3AAAMAAAA4Lg");
	var mask_graphics_27 = new cjs.Graphics().p("A3bdJMAAAg6RMAu3AAAMAAAA6Rg");
	var mask_graphics_28 = new cjs.Graphics().p("A3beMMAAAg8XMAu3AAAMAAAA8Xg");
	var mask_graphics_29 = new cjs.Graphics().p("A3bfPMAAAg+eMAu3AAAMAAAA+eg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:197.6,y:3.4}).wait(1).to({graphics:mask_graphics_1,x:197.6,y:10.1}).wait(1).to({graphics:mask_graphics_2,x:197.6,y:16.9}).wait(1).to({graphics:mask_graphics_3,x:197.6,y:23.7}).wait(1).to({graphics:mask_graphics_4,x:197.6,y:30.5}).wait(1).to({graphics:mask_graphics_5,x:197.6,y:37.3}).wait(1).to({graphics:mask_graphics_6,x:197.6,y:44}).wait(1).to({graphics:mask_graphics_7,x:197.6,y:50.8}).wait(1).to({graphics:mask_graphics_8,x:197.6,y:57.6}).wait(1).to({graphics:mask_graphics_9,x:197.6,y:64.4}).wait(1).to({graphics:mask_graphics_10,x:197.6,y:71.2}).wait(1).to({graphics:mask_graphics_11,x:197.6,y:77.9}).wait(1).to({graphics:mask_graphics_12,x:197.6,y:84.7}).wait(1).to({graphics:mask_graphics_13,x:197.6,y:91.5}).wait(1).to({graphics:mask_graphics_14,x:197.6,y:98.3}).wait(1).to({graphics:mask_graphics_15,x:197.6,y:105.1}).wait(1).to({graphics:mask_graphics_16,x:197.6,y:111.9}).wait(1).to({graphics:mask_graphics_17,x:197.6,y:118.6}).wait(1).to({graphics:mask_graphics_18,x:197.6,y:125.4}).wait(1).to({graphics:mask_graphics_19,x:197.6,y:132.2}).wait(1).to({graphics:mask_graphics_20,x:197.6,y:139}).wait(1).to({graphics:mask_graphics_21,x:197.6,y:145.8}).wait(1).to({graphics:mask_graphics_22,x:197.6,y:152.5}).wait(1).to({graphics:mask_graphics_23,x:197.6,y:159.3}).wait(1).to({graphics:mask_graphics_24,x:197.6,y:166.1}).wait(1).to({graphics:mask_graphics_25,x:197.6,y:172.9}).wait(1).to({graphics:mask_graphics_26,x:197.6,y:179.7}).wait(1).to({graphics:mask_graphics_27,x:197.6,y:186.4}).wait(1).to({graphics:mask_graphics_28,x:197.6,y:193.2}).wait(1).to({graphics:mask_graphics_29,x:197.6,y:200}).wait(16));

	// Camada 1
	this.instance_2 = new lib.Bemvindo();
	this.instance_2.setTransform(47.6,0);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({x:48.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(233.5,244.1,352,469.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;