var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

background(rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255)));
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255)));
ellipse(200, 200, 275, 275);
line(100, 102, 50, 50);
line(298, 100, 350, 50);
fill("yellow");
ellipse(250, 150, 35, 35);
ellipse(150, 150, 35, 35);
noFill();
ellipse(250, 150, 50, 50);
ellipse(150, 150, 50, 50);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255)));
var nosesize = randomNumber(35, 68);
rect(175, 175, 50, nosesize);
fill("black");
rect(115, 250, 170, 50);
var mouthgap = randomNumber(30, 70);
fill("gray");
rect(130, 260, mouthgap, 25);
rect(200, 260, 115 - mouthgap, 25);
var antenna1size = randomNumber(10, 45);
var antenna2size = randomNumber(10, 45);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255)));
regularPolygon(50, 50, 3, antenna1size);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255)));
regularPolygon(350, 50, 3, antenna2size);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
