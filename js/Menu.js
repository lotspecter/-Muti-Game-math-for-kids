function mainmenu(){
    header = game.add.tileSprite(200, 50, 1923, 1001, 'header');
    header.scale.setTo(0.2,0.2);
   // background = game.add.tileSprite(0, 0, 800, 600, 'background');
    button_play = game.add.button(300, 250, 'button_play', actionOnClick, this, 2, 1, 0);
    button_play.scale.setTo(0.1,0.1);
}

function actionOnClick () {
    game.state.start('StateA');
    //console.log(game.rnd.state());
    //game.rnd.state();
}

function remove(sprite) {
    console.log('button up', sprite.key);
    sprite.destroy();
    if(sprite.key == 'sonic')
        count_sonic -= 1
    else if (sprite.key == 'atari')
        count_atari -= 1

    result = sprite.key  + ' sonic ' + count_sonic + ' atari ' + count_atari;
}
