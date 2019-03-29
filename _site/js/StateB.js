P2Game.StateB = function (game) {

    this.pizza;
    this.refrigerator;
    this.mushroom_feeze;
    this.mushroom2_feeze;
    this.atari;
    this.sonic;
    this.changeTimer;
    
    };
    
    P2Game.StateB.prototype = {
    
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
        input = 0;
        input2 = 0;
        input_total = 0;

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
    
        random_number = Math.floor((Math.random() * 5) + 1);
        random_number_2 = Math.floor((Math.random() * 5) + 1);
        total_mushroom_feeze = random_number + random_number_2;

        random_number_2_1 = Math.floor((Math.random() * 5) + 1);
        random_number_2_2= Math.floor((Math.random() * 5) + 1);
        total_mushroom_feeze_2_1 = random_number_2_1 + random_number_2_2;

        mushroom_feeze_q = game.add.sprite(10, 340, 'mushroom_feeze')
        mushroom_feeze_q.scale.setTo(0.09,0.09)
    
        mushroom2_feeze_q = game.add.sprite(10, 390, 'mushroom2_feeze')
        mushroom2_feeze_q.scale.setTo(0.09,0.09)

        input = game.add.inputField(130, 345, {
            font: '18px Arial',
            fill: '#212121',
            fontWeight: 'bold',
            width: 20,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6,
        });

        input2 = game.add.inputField(130, 395, {
            font: '18px Arial',
            fill: '#212121',
            fontWeight: 'bold',
            width: 20,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6,
        });

        input_total = game.add.inputField(130, 445, {
            font: '18px Arial',
            fill: '#212121',
            fontWeight: 'bold',
            width: 20,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6,
        });

        var text_plus = game.add.text(130, 360, ' + ', { font: "50px Arial", fill: "#FF4500", align: "center" });
        var text_mushroom = game.add.text(55, 350, random_number + ' + ' + random_number_2 + ' = ' , { font: "20px Arial", fill: "#FF4500", align: "center" });
        var text_mushroom2 = game.add.text(55, 400, random_number_2_1 + ' + ' + random_number_2_2 + ' = ' , { font: "20px Arial", fill: "#FF4500", align: "center" });
        var text_total = game.add.text(50, 450, 'TOTAL', { font: "25px Arial", fill: "#FF4500", align: "center" });

        
        var group = game.add.group();
        group.inputEnableChildren = true;
    
        var atari = [];
        var sonic = [];

        for(var i = 0 ;i < total_mushroom_feeze;i++){
            atari[i] = group.create(randomIntFromInterval(240,400,i),randomIntFromInterval(100,380,i), 'atari');
            atari[i].scale.setTo(0.15,0.15);
            //atari[i].inputEnabled = true;
            //atari[i].input.enableDrag();
            //atari[i].events.onDragStart.add(this.onDragStart, this);
            //atari[i].events.onDragStop.add(this.onDragStop, this);
        }
        for(var i = 0 ;i < total_mushroom_feeze_2_1;i++){
            sonic[i] = group.create(randomIntFromInterval(250,480,i),randomIntFromInterval(100,380,i), 'sonic');
            sonic[i].scale.setTo(0.15,0.15);
            //sonic.inputEnabled = true;
            //sonic.input.enableDrag();
            //sonic.events.onDragStart.add(this.onDragStart, this);
           // sonic.events.onDragStop.add(this.onDragStop, this);
        //  Enable input and allow for dragging
        //group.onChildInputDown.add(onDown, this);
        }
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
        var total = parseInt(input.value) +  parseInt(input2.value);
        console.log(total_mushroom_feeze + ' ' + total_mushroom_feeze_2_1 + ' ' + total + ' ' + ' ' + parseInt(input_total.value) );
        if(parseInt(input_total.value) == total && total_mushroom_feeze == input.value && total_mushroom_feeze_2_1 == input2.value){
            button_ok = game.add.button(300, 450, 'button_ok', this.gotoStateB, this, 2, 1, 0);
            button_ok.scale.setTo(0.1,0.1);
            button_ok.input.enabled = true;
        }
    },
    
    render: function () {
    
        this.game.debug.text(result, 10, 20);
    
    }
    
    };
    