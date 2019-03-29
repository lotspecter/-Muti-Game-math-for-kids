P2Game.Menu = function (game) {

};

P2Game.Menu.prototype = {

preload: function () {

    this.load.image('header', 'assets/head.png');
    this.load.spritesheet('button_play', 'assets/play-buttom.png');
    this.load.spritesheet('button_how_to_play', 'assets/how-to-play-bottom.png');
    this.load.spritesheet('button_ok', 'assets/ok-buttom.png');
},

create: function () {
    header = game.add.tileSprite(200, 50, 1923, 1001, 'header');

    header.scale.setTo(0.2,0.2);
   // background = game.add.tileSprite(0, 0, 800, 600, 'background');
    button_play = game.add.button(300, 300, 'button_play', this.startgame, this, 2, 1, 0);
    button_how_to_play = game.add.button(300, 400, 'button_how_to_play',  this.howtoplay, this, 2, 1, 0);

    button_play.scale.setTo(0.1,0.1);
    button_how_to_play.scale.setTo(0.1,0.1);

},  

startgame: function (){
    game.state.start('StateC');
},

howtoplay: function (){
    game.state.start('HowToPlay');
},

update: function () {

},

render: function () {

    this.game.debug.text(result, 10, 20);

}

};
