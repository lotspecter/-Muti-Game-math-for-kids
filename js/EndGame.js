P2Game.Endgame = function (game) {

    };
    
    P2Game.Endgame.prototype = {
    
    preload: function () {
    
        this.load.spritesheet('play_agin_buttom', 'assets/play-agin-buttom.png');
    
    },
    
    create: function () {
        topmenu();
        var text_plus = game.add.text(270, 200, 'Winner', { font: "80px Arial", fill: "#FF4500", align: "center" });
        play_agin_buttom = game.add.button(300, 300, 'play_agin_buttom', this.playgain, this, 2, 1, 0);
    
        play_agin_buttom.scale.setTo(0.1,0.1);
        play_agin_buttom.scale.setTo(0.1,0.1);

    },  
    
    playgain: function (){
        game.state.start('Menu');
    },

    update: function () {

    },
    
    render: function () {
    
      //  this.game.debug.text(result, 10, 20);
    
    }
    
};
    