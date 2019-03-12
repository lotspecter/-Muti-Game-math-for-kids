
P2Game.StateC = function (game) {

    this.pizza;
    this.refrigerator;
    this.mushroom_feeze;
    this.mushroom2_feeze;
    this.atari;
    this.sonic;
    this.changeTimer;
    
    };
    
    P2Game.StateC.prototype = {
    
    preload: function () {
    
        this.load.image('atari', 'assets/mushroom_2.png');
        this.load.image('sonic', 'assets/mushroom.png');
        this.load.image('pizza', 'assets/pizza_blank.png');
        this.load.image('refrigerator','assets/refrigerator.png');
        this.load.image('mushroom_feeze', 'assets/mushroom_2.png');
        this.load.image('mushroom2_feeze', 'assets/mushroom.png');
        this.load.image('human', 'assets/human.png');
    
    },
    
    create: function () {
        check_state = true;
        count_sonic = 1;
        count_atari = 1 ;
        random_number = 0;
        header.visible =! header.visible;
        button_play.visible =! button_play.visible;
    
        pizza = game.add.sprite(180, 80, 'pizza');
        pizza.scale.setTo(0.8,0.8);
    
        human = game.add.sprite(0,150, 'human')
        human.scale.setTo(0.7,0.7)
    
        refrigerator = game.add.sprite(600, 280, 'refrigerator')
        refrigerator.scale.setTo(0.75,0.75)
    
        mushroom_feeze = game.add.sprite(650, 350, 'mushroom_feeze')
        mushroom_feeze.scale.setTo(0.15,0.15)
    
        mushroom2_feeze = game.add.sprite(650, 290, 'mushroom2_feeze')
        mushroom2_feeze.scale.setTo(0.15,0.15)
    
        random_number = Math.floor((Math.random() * 10) + 1);
    
        mushroom_feeze_q = game.add.sprite(20, 350, 'mushroom_feeze')
        mushroom_feeze_q.scale.setTo(0.15,0.15)
    
        var text_mushroom = game.add.text(80, 360, ' = ' + random_number , { font: "40px Arial", fill: "#FF4500", align: "center" });
    
        var object = {
            name : 'mushroom',
            data : text_mushroom
        }
        
        var group = game.add.group();
        group.inputEnableChildren = true;
    
        var atari = [];
        var sonic = [];
        for(var i = 0 ;i < 50;i++){
            atari[i] = group.create(650, 350, 'atari');
            atari[i].scale.setTo(0.15,0.15);
            atari[i].inputEnabled = true;
            atari[i].input.enableDrag();
            atari[i].events.onDragStart.add(this.onDragStart, this);
            atari[i].events.onDragStop.add(this.onDragStop, this);
    
            sonic = group.create(650, 290, 'sonic');
            sonic.scale.setTo(0.15,0.15);
            sonic.inputEnabled = true;
            sonic.input.enableDrag();
            sonic.events.onDragStart.add(this.onDragStart, this);
            sonic.events.onDragStop.add(this.onDragStop, this);
        }
        //  Enable input and allow for dragging
        //group.onChildInputDown.add(onDown, this);
    
    },
    onDragStart : function (sprite, pointer) {
    
    result = "Dragging " + sprite.key;
    
    },
    
    onDragStop : function (sprite, pointer) {
    
    if(random_number == count_atari){
    this.game.input.enabled = false;
        
    button_play = game.add.button(300, 400, 'button_play', this.gotoStateB, this, 2, 1, 0);
    button_play.scale.setTo(0.1,0.1);
    button_play.input.enabled = true;
    }
    /*
    if (checkOverlap(sprite, bin))
    {
        sprite.destroy();
        if(sprite.key == 'sonic')
            count_sonic -= 1
        else if (sprite.key == 'atari')
            count_atari -= 1
    }
    */
    result = sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y + ' sonic ' + count_sonic + ' atari ' + count_atari + 'random' + random_number;
    
    if (pointer.y < 110 || pointer.y > 500)
    {
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        //sprite.destroy();
        sprite.sendToBack();
    }else if(check_state){
        if(sprite.key == 'sonic'){
            count_sonic += 1
            //sprite.input.enabled = false;
            sprite.events.onInputDown.add(remove, this);
            sprite.sendToBack();
        }
        else if (sprite.key == 'atari'){
            count_atari += 1
            //sprite.input.enabled = false;
            sprite.events.onInputDown.add(remove, this);
            sprite.sendToBack();
        }
    }
    
    },
    
    gotoStateB: function () {
    
        this.state.start('StateA',);
    
    },
    
    gotoStateC: function () {
    
        //this.state.start('StateC');
    
    },
    
    update: function () {
    
    },
    
    render: function () {
    
        this.game.debug.text(result, 10, 20);
    
    }
    
    };
    