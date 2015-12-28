(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 96,
	color: "#454545",
	manifest: []
};



// symbols:



(lib.Camada2 = function() {
	this.spriteSheet = ss["Sem título_4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CópiadeSemTítulo3 = function() {
	this.spriteSheet = ss["Sem título_4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.FundoIntro = function() {
	this.spriteSheet = ss["Sem título_4_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Símbolo3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Camada2();
	this.instance.setTransform(0,0,0.398,0.398);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,401,398.2);


(lib.Símbolo2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.CópiadeSemTítulo3();
	this.instance.setTransform(0,0,0.498,0.498);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,498.1,383.1);


// stage content:
(lib.Semtítulo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Camada 4
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(275.1,150,1,1,0,0,0,249.1,191.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:154.9},0).wait(1).to({y:159.9},0).wait(1).to({y:164.8},0).wait(1).to({y:169.8},0).wait(1).to({y:174.8},0).wait(1).to({y:179.7},0).wait(1).to({y:184.7},0).wait(1).to({y:189.7},0).wait(1).to({y:194.6},0).wait(1).to({y:199.6},0).wait(1).to({y:204.6},0).wait(1).to({y:209.5},0).wait(1).to({y:214.5},0).wait(1).to({y:219.5},0).wait(1).to({y:224.4},0).wait(1).to({y:229.4},0).wait(1).to({y:234.4},0).wait(1).to({y:239.3},0).wait(1).to({y:244.3},0).wait(1).to({y:249.3},0).wait(1).to({y:254.2},0).wait(1).to({y:259.2},0).wait(1).to({y:264.2},0).wait(1).to({y:269.1},0).wait(1).to({y:274.1},0).wait(1).to({y:279.1},0).wait(1).to({y:284},0).wait(1).to({y:289},0).wait(1).to({y:294},0).wait(1).to({y:298.9},0).wait(1).to({y:303.9},0).wait(1).to({y:308.9},0).wait(1).to({y:313.8},0).wait(1).to({y:318.8},0).wait(1).to({y:323.8},0).wait(1).to({y:328.7},0).wait(1).to({y:333.7},0).wait(1).to({y:338.7},0).wait(1).to({y:343.6},0).wait(1).to({y:348.6},0).wait(1).to({y:353.6},0).wait(1).to({y:358.5},0).wait(1).to({y:363.5},0).wait(1).to({y:368.5},0).wait(1).to({y:373.4},0).wait(1).to({y:378.4},0).wait(1).to({y:383.4},0).wait(1).to({y:388.3},0).wait(1).to({y:393.3},0).wait(1).to({y:398.3},0).wait(1).to({y:403.2},0).wait(1).to({y:408.2},0).wait(1).to({y:413.2},0).wait(1).to({y:418.1},0).wait(1).to({y:423.1},0).wait(1).to({y:428.1},0).wait(1).to({y:433},0).wait(1).to({y:438},0).wait(1).to({y:443},0).wait(1).to({y:447.9},0).wait(1).to({y:452.9},0).wait(1).to({y:457.9},0).wait(1).to({y:462.8},0).wait(1).to({y:467.8},0).wait(1).to({y:472.8},0).wait(1).to({y:477.7},0).wait(1).to({y:482.7},0).wait(1).to({y:487.7},0).wait(1).to({y:492.6},0).wait(1).to({y:497.6},0).wait(1).to({y:502.6},0).wait(1).to({y:507.5},0).wait(1).to({y:512.5},0).wait(1).to({y:517.5},0).wait(1).to({y:522.4},0).wait(1).to({y:527.4},0).wait(1).to({y:532.4},0).wait(1).to({y:537.3},0).wait(1).to({y:542.3},0).wait(1).to({y:547.3},0).wait(1).to({y:552.2},0).wait(1).to({y:557.2},0).wait(1).to({y:562.2},0).wait(1).to({y:567.1},0).wait(1).to({y:572.1},0).wait(1).to({y:577.1},0).wait(1).to({y:582},0).wait(1).to({y:587},0).wait(1).to({y:592},0).wait(1));

	// Camada 3
	this.instance_1 = new lib.Símbolo3();
	this.instance_1.setTransform(271.5,199.1,1,1,0,0,0,200.5,199.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:203.6},0).wait(1).to({y:208.1},0).wait(1).to({y:212.6},0).wait(1).to({y:217.1},0).wait(1).to({y:221.6},0).wait(1).to({y:226.1},0).wait(1).to({y:230.6},0).wait(1).to({y:235.1},0).wait(1).to({y:239.7},0).wait(1).to({y:244.2},0).wait(1).to({y:248.7},0).wait(1).to({y:253.2},0).wait(1).to({y:257.7},0).wait(1).to({y:262.2},0).wait(1).to({y:266.7},0).wait(1).to({y:271.2},0).wait(1).to({y:275.7},0).wait(1).to({y:280.2},0).wait(1).to({y:284.7},0).wait(1).to({y:289.2},0).wait(1).to({y:293.7},0).wait(1).to({y:298.2},0).wait(1).to({y:302.7},0).wait(1).to({y:307.2},0).wait(1).to({y:311.7},0).wait(1).to({y:316.2},0).wait(1).to({y:320.8},0).wait(1).to({y:325.3},0).wait(1).to({y:329.8},0).wait(1).to({y:334.3},0).wait(1).to({y:338.8},0).wait(1).to({y:343.3},0).wait(1).to({y:347.8},0).wait(1).to({y:352.3},0).wait(1).to({y:356.8},0).wait(1).to({y:361.3},0).wait(1).to({y:365.8},0).wait(1).to({y:370.3},0).wait(1).to({y:374.8},0).wait(1).to({y:379.3},0).wait(1).to({y:383.8},0).wait(1).to({y:388.3},0).wait(1).to({y:392.8},0).wait(1).to({y:397.3},0).wait(1).to({y:401.9},0).wait(1).to({y:406.4},0).wait(1).to({y:410.9},0).wait(1).to({y:415.4},0).wait(1).to({y:419.9},0).wait(1).to({y:424.4},0).wait(1).to({y:428.9},0).wait(1).to({y:433.4},0).wait(1).to({y:437.9},0).wait(1).to({y:442.4},0).wait(1).to({y:446.9},0).wait(1).to({y:451.4},0).wait(1).to({y:455.9},0).wait(1).to({y:460.4},0).wait(1).to({y:464.9},0).wait(1).to({y:469.4},0).wait(1).to({y:473.9},0).wait(1).to({y:478.4},0).wait(1).to({y:483},0).wait(1).to({y:487.5},0).wait(1).to({y:492},0).wait(1).to({y:496.5},0).wait(1).to({y:501},0).wait(1).to({y:505.5},0).wait(1).to({y:510},0).wait(1).to({y:514.5},0).wait(1).to({y:519},0).wait(1).to({y:523.5},0).wait(1).to({y:528},0).wait(1).to({y:532.5},0).wait(1).to({y:537},0).wait(1).to({y:541.5},0).wait(1).to({y:546},0).wait(1).to({y:550.5},0).wait(1).to({y:555},0).wait(1).to({y:559.5},0).wait(1).to({y:564.1},0).wait(1).to({y:568.6},0).wait(1).to({y:573.1},0).wait(1).to({y:577.6},0).wait(1).to({y:582.1},0).wait(1).to({y:586.6},0).wait(1).to({y:591.1},0).wait(1).to({y:595.6},0).wait(1).to({y:600.1},0).wait(1));

	// Camada 2
	this.instance_2 = new lib.FundoIntro();
	this.instance_2.setTransform(84,77.5,0.288,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(301,158.5,498.1,439.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;