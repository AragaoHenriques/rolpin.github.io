(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 3,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["Sem título_1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Imagem2 = function() {
	this.spriteSheet = ss["Sem título_1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Imagem3 = function() {
	this.spriteSheet = ss["Sem título_1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Imagem4 = function() {
	this.spriteSheet = ss["Sem título_1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Imagem5 = function() {
	this.spriteSheet = ss["Sem título_1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Imagem6 = function() {
	this.spriteSheet = ss["Sem título_1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Imagem7 = function() {
	this.spriteSheet = ss["Sem título_1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Imagem8 = function() {
	this.spriteSheet = ss["Sem título_1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Símbolo1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Imagem8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,671,511);


// stage content:
(lib.Semtítulo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Camada 1
	this.instance = new lib.Bitmap1();

	this.instance_1 = new lib.Imagem2();

	this.instance_2 = new lib.Imagem3();

	this.instance_3 = new lib.Imagem4();

	this.instance_4 = new lib.Imagem5();

	this.instance_5 = new lib.Imagem6();

	this.instance_6 = new lib.Imagem7();

	this.instance_7 = new lib.Símbolo1();
	this.instance_7.setTransform(335.5,255.5,1,1,0,0,0,335.5,255.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,674,503);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;