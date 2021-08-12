var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","456e2a5b-bc07-4697-8736-1ccd537b7b67","eefe3dbd-9574-4517-921f-6e9998112336","ba84a38f-4c46-4d43-b3d3-035e88eef594","18f7a25e-076d-4e7e-bc61-b3b6edd6c2ca","f1d77863-4fca-49e5-acb2-24af3fafdb5c"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"KjnOYBWE1EQ5NIVDvJm0PQ10RFH_cwjq","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"j0cQS5q7Id7faqUNYO.U21WVo3_Yv2gG","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"QQEP9MxhC6PufBy1nlMjk.WIDwvm6LzB","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"456e2a5b-bc07-4697-8736-1ccd537b7b67":{"name":"ENEMY1","sourceUrl":null,"frameSize":{"x":430,"y":330},"frameCount":1,"looping":true,"frameDelay":12,"version":"lPiwvsTe0QU2fQ3BX9dSEDN4WNO8AH.V","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":430,"y":330},"rootRelativePath":"assets/456e2a5b-bc07-4697-8736-1ccd537b7b67.png"},"eefe3dbd-9574-4517-921f-6e9998112336":{"name":"carrot","sourceUrl":"assets/api/v1/animation-library/gamelab/BJiujt1JCKr8EcsbZ.IDJM.CxfYn9HOJ/category_food/carrot_1.png","frameSize":{"x":389,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"BJiujt1JCKr8EcsbZ.IDJM.CxfYn9HOJ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":389,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BJiujt1JCKr8EcsbZ.IDJM.CxfYn9HOJ/category_food/carrot_1.png"},"ba84a38f-4c46-4d43-b3d3-035e88eef594":{"name":"bunny1","sourceUrl":"assets/api/v1/animation-library/gamelab/aJ9QGh6Ue513i83FEzMaPldTohQLMgxh/category_animals/bunny1_go.png","frameSize":{"x":152,"y":183},"frameCount":2,"looping":true,"frameDelay":2,"version":"aJ9QGh6Ue513i83FEzMaPldTohQLMgxh","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":183},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aJ9QGh6Ue513i83FEzMaPldTohQLMgxh/category_animals/bunny1_go.png"},"18f7a25e-076d-4e7e-bc61-b3b6edd6c2ca":{"name":"FOREST1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"FS0g5xBc2wcTo5m03kbp77Q2VgmkfsFv","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/18f7a25e-076d-4e7e-bc61-b3b6edd6c2ca.png"},"f1d77863-4fca-49e5-acb2-24af3fafdb5c":{"name":"FOREST","sourceUrl":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":false,"frameDelay":20,"version":"33483OYhVDVsX.GNODCgRASPM5bNdz.q","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png"}}};
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

var Forest = createSprite(187,198,89,2);
 Forest.setAnimation("FOREST")
 Forest.scale=.83
var hero = createSprite(200,45,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,305,50,50)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,205,30,30)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,100,20,20)
enemy3.shapeColor="red"

var net = createSprite(200,345,200,20)
net.shapeColor="red"

var wall1 =createSprite(187,37,345,5)
 wall1.shapeColor="brown"
 
 var wall2= createSprite(355,206,5,335)
 wall2.shapeColor="brown"
 
var wall3 =createSprite(187,367,345,5) 
wall3.shapeColor="brown"

 var wall4= createSprite(17,206,5,335)
wall4.shapeColor="brown"






var goal =0;
var death = 0

hero.setAnimation("bunny1");
hero.scale=.2;
enemy1.setAnimation("ENEMY1");
enemy1.scale=.1;
enemy2.setAnimation("ENEMY1");
enemy2.scale=.1;
enemy3.setAnimation("ENEMY1");
enemy3.scale=.1;
net.setAnimation("carrot")
net.scale=.1
enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


 
  



function draw() {
  
//background(b);
background("white")
 textSize(20)
  fill("black")
  stroke("black")
  text("Goals:"+goal,200,15);
  textSize(20)
  fill("black")
  stroke("black")
  text("Death:"+death,295,15)
createEdgeSprites()




enemy1.bounceOff(wall2)
enemy2.bounceOff(wall2)
enemy3.bounceOff(wall2)
enemy1.bounceOff (wall4)
enemy2.bounceOff(wall4)
enemy3.bounceOff(wall4)
hero.collide(wall1)
hero.collide(wall2)
hero.collide(wall3)
hero.collide(wall4)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}



if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=45
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=45
  goal=goal+1
}

  
drawSprites()
}

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
