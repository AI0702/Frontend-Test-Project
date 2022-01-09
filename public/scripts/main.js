
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}

//After the HTML is fully, loaded
window.onload = () => {

    //Preloader
    prog();

    //Create Pixi App 1
    const app1 = new PIXI.Application({ 
    width: window.innerWidth,         
    height: window.innerWidth/2,        
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1,       // default: 1
    //resizeTo: window
    });

    //Add the canvas that Pixi automatically created to the HTML document
    document.getElementById('container-main').appendChild(app1.view);



    //Loading all assets for app 1
    var container1, back, fore, bolo, bol, veg, slo, ls, lh, lo1, lw1, ld, lo2, lw2, ln, mdj;

    const loader1 = app1.loader
    .add('back', '../images/showdown/header.png')
    .add('fore', '../images/showdown/showdown-off.png')
    .add('bolo', '../images/showdown/bolt-off@2x.png')
    .add('bol', '../images/showdown/bolt@2x.png')
    .add('veg', '../images/showdown/vegas@2x.png')
    .add('slo', '../images/showdown/slots@2x.png')
    .add('ls', '../images/showdown/s@2x.png')
    .add('lh', '../images/showdown/h@2x.png')
    .add('lo1', '../images/showdown/o-1@2x.png')
    .add('lw1', '../images/showdown/w-1@2x.png')
    .add('ld', '../images/showdown/d@2x.png')
    .add('lo2', '../images/showdown/o-2@2x.png')
    .add('lw2', '../images/showdown/w-2@2x.png')
    .add('ln', '../images/showdown/n@2x.png')
    .add('mdj', '../images/showdown/must_drop.png')
    //When all assets for app 1 have been loaded
    .load(onAssetsLoaded1);

    


    //Stage assets function for app 1
    function onAssetsLoaded1() {

        // Create a new container as a stage for app 1
        container1 = new PIXI.Container();
        app1.stage.addChild(container1);
        
        // Create a new texture for background
        back = new PIXI.Sprite(loader1.resources.back.texture);
        back.width = app1.view.width;
        back.height = app1.view.height;
        container1.addChild(back);

        // Create a new texture for foreground
        fore = new PIXI.Sprite(loader1.resources.fore.texture);
        fore.x = app1.view.width/20;
        fore.y = app1.view.height/20;
        fore.width = app1.view.width/1.1;
        fore.height = app1.view.height/1.22;
        container1.addChild(fore);

        /*
        // Create a new texture for Lightning Bolt off
        bolo = new PIXI.Sprite(loader1.resources.bolo.texture);
        bolo.x = app1.view.width/2.1;
        bolo.y = app1.view.height/30;
        bolo.width = app1.view.width/10;
        bolo.height = app1.view.height/3.6;
        container1.addChild(bolo);
        bolo.alpha = 1;
        */
        
        // Create a new texture for Lightning Bolt
        bol = new PIXI.Sprite(loader1.resources.bol.texture);
        bol.x = app1.view.width/2.32;
        bol.y = app1.view.height/-18;
        bol.width = app1.view.width/5.5;
        bol.height = app1.view.height/2.22;
        bol.angle = -2;
        container1.addChild(bol);
        bol.alpha = 0;
        
        // Create a new texture for Vegas
        veg = new PIXI.Sprite(loader1.resources.veg.texture);
        veg.x = app1.view.width/9;
        veg.y = app1.view.width/90;
        veg.width = app1.view.width/2.4;
        veg.height = app1.view.height/3.1;
        container1.addChild(veg);
        veg.alpha = 0;

        // Create a new texture for Slots
        slo = new PIXI.Sprite(loader1.resources.slo.texture);
        slo.x = app1.view.width/1.845;
        slo.y = app1.view.width/90;
        slo.width = app1.view.width/2.7;
        slo.height = app1.view.height/3.1;
        container1.addChild(slo);
        slo.alpha = 0;

        // Create a new texture for letter S
        ls = new PIXI.Sprite(loader1.resources.ls.texture);
        ls.x = app1.view.width/-65;
        ls.y = app1.view.height/18;
        ls.width = app1.view.width/3.7;
        ls.height = app1.view.height/1.02;
        container1.addChild(ls);
        ls.alpha = 0;

        // Create a new texture for letter h
        lh = new PIXI.Sprite(loader1.resources.lh.texture);
        lh.x = app1.view.width/10.8;
        lh.y = app1.view.height/18;
        lh.width = app1.view.width/3.5;
        lh.height = app1.view.height/1.02;
        container1.addChild(lh);
        lh.alpha = 0;

        // Create a new texture for letter o-1
        lo1 = new PIXI.Sprite(loader1.resources.lo1.texture);
        lo1.x = app1.view.width/3.8;
        lo1.y = app1.view.height/17;
        lo1.width = app1.view.width/8.75;
        lo1.height = app1.view.height/1.03;
        container1.addChild(lo1);
        lo1.alpha = 0;

        // Create a new texture for letter w-1
        lw1 = new PIXI.Sprite(loader1.resources.lw1.texture);
        lw1.x = app1.view.width/3.17;
        lw1.y = app1.view.height/18;
        lw1.width = app1.view.width/3.9;
        lw1.height = app1.view.height/1.10;
        container1.addChild(lw1);
        lw1.alpha = 0;

        // Create a new texture for letter d
        ld = new PIXI.Sprite(loader1.resources.ld.texture);
        ld.x = app1.view.width/2.23;
        ld.y = app1.view.height/20;
        ld.width = app1.view.width/4;
        ld.height = app1.view.height/1.14;
        container1.addChild(ld);
        ld.alpha = 0;

        // Create a new texture for letter o-2
        lo2 = new PIXI.Sprite(loader1.resources.lo2.texture);
        lo2.x = app1.view.width/1.85;
        lo2.y = app1.view.height/20;
        lo2.width = app1.view.width/3.9;
        lo2.height = app1.view.height/1.11;
        container1.addChild(lo2);
        lo2.alpha = 0;

        // Create a new texture for letter w-2
        lw2 = new PIXI.Sprite(loader1.resources.lw2.texture);
        lw2.x = app1.view.width/1.57;
        lw2.y = app1.view.height/20;
        lw2.width = app1.view.width/3.9;
        lw2.height = app1.view.height/1.03;
        container1.addChild(lw2);
        lw2.alpha = 0;

        // Create a new texture for letter n
        ln = new PIXI.Sprite(loader1.resources.ln.texture);
        ln.x = app1.view.width/1.34;
        ln.y = app1.view.height/18;
        ln.width = app1.view.width/3.45;
        ln.height = app1.view.height/1.02;
        container1.addChild(ln);
        ln.alpha = 0;

        // Create a new texture for must drop drop jackpots
        mdj = new PIXI.Sprite(loader1.resources.mdj.texture);
        mdj.x = app1.view.width/6.3;
        mdj.y = app1.view.height/1.8;
        mdj.width = app1.view.width/1.45;
        mdj.height = app1.view.height/2.22;
        container1.addChild(mdj);
        mdj.alpha = 0;


        return;
    }



    //Animation function for app 1
    function animate1(){
        var boltimer = 0;
        var animtimer = 0;
        var animfinished1 = false;

        app1.ticker.add((delta) => {
            // delta is 1 if running at 100% performance
            // creates frame-independent transformation
            
            boltimer += delta;

            if (boltimer >= 110){
                bol.alpha = 1;
                
                if (boltimer >= 115){
                    bol.alpha = 0;

                    if (boltimer >= 120){
                        bol.alpha = 1;

                        if (boltimer >= 125){
                            bol.alpha = 0;

                            if (boltimer >= 130)
                            {
                                bol.alpha = 1;

                                if (boltimer >= 620){
                                    boltimer = 0;
                                }
                            }
                            
                        }
                    }
                }
            }

            
            if (animfinished1 == false){

                animtimer += delta;
                
                if (animtimer >= 60){
                    veg.alpha = 1;
                    slo.alpha = 1;
                    
                    if (animtimer >= 90){
                        veg.alpha = 0;
                        slo.alpha = 0;
        
                        if (animtimer >= 95){
                            veg.alpha = 1;
                            slo.alpha = 1;
                            ls.alpha = 1;
        
                            if (animtimer >= 100){
                                veg.alpha = 0;
                                slo.alpha = 0;

                                if (animtimer >= 105){
                                    veg.alpha = 1;
                                    slo.alpha = 1;
                                    lh.alpha = 1;

                                    if (animtimer >= 115){
                                        lo1.alpha = 1;

                                        if (animtimer >= 125){
                                            lw1.alpha = 1;
        
                                            if (animtimer >= 135){
                                                ld.alpha = 1;
            
                                                if (animtimer >= 145){
                                                    lo2.alpha = 1;
                
                                                    if (animtimer >= 155){
                                                        lw2.alpha = 1;
                    
                                                        if (animtimer >= 165){
                                                            ln.alpha = 1;
                        
                                                            if (animtimer >= 190){
                                                                mdj.alpha = 1;
                            
                                                                if (animtimer >= 210){
                                                                    mdj.alpha = 0;
                                
                                                                    if (animtimer >= 215){
                                                                        mdj.alpha = 1;
                                    
                                                                        if (animtimer >= 220){
                                                                            mdj.alpha = 0;
                                        
                                                                            if (animtimer >= 225){
                                                                                mdj.alpha = 1;
                                                                                animtimer = 0;
                                                                                animfinished1 = true;
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 

            
        })
    
    }





    //Create a Pixi App 2
    const app2 = new PIXI.Application({ 
        width: window.innerWidth,         
        height: window.innerWidth,        
        antialias: true,    // default: false
        transparent: true, // default: false
        resolution: 1,       // default: 1
        //resizeTo: window
    });

    //Add the canvas that Pixi automatically created to the HTML document
    document.getElementById('container-main').appendChild(app2.view);   

    

    //Loading all assets for app 2
    var container2, back2, whl, mrk, btn, btn2, spin = false, whlzones = 4, rigmin = 0, rigmax = 0, rigangle = 0;

    const loader2 = app2.loader
    .add('back2', '../images/wheel/back.png')
    .add('whl', '../images/wheel/wheelmarked.png')
    .add('mrk', '../images/wheel/marker.png')
    .add('btn', '../images/wheel/btn-spin.png')
    .add('btn2', '../images/wheel/btn2-spin.png')
    .add('ban1', '../images/wheel/ban1.png')
    .add('p1', '../images/wheel/p1.png')
    .add('p2', '../images/wheel/p2.png')
    .add('p3', '../images/wheel/p3.png')
    .add('p4', '../images/wheel/p4.png')
    //When all assets for app 2 have been loaded
    .load(onAssetsLoaded2);

    
    
    
    //Stage assets function for app 2
    function onAssetsLoaded2() { 

        // Create a new container
        container2 = new PIXI.Container();
        container2.x = app2.view.width/2;
        container2.pivot.x = container2.width / 2;
        container2.y = app2.view.height/2;
        container2.pivot.y = container2.height / 2;
        app2.stage.addChild(container2);
        
        // Create a new texture for background
        back2 = new PIXI.Sprite(loader2.resources.back2.texture);
        back2.width = app2.view.width;
        back2.height = app2.view.height;
        back2.anchor.set(0.5);
        container2.addChild(back2);

        // Create a new texture for banner
        ban1 = new PIXI.Sprite(loader2.resources.ban1.texture);
        ban1.x = app2.view.width/-4;
        ban1.y = app2.view.height/-2.2;
        ban1.width = app2.view.width/2;
        ban1.height = app2.view.height/7;
        ban1.alpha = 0;
        container2.addChild(ban1);

        // Create a new texture for wheel
        whl = new PIXI.Sprite(loader2.resources.whl.texture);
        whl.x = app2.view.width/100;
        whl.y = app2.view.height/100;
        whl.anchor.set(0.5);
        whl.width = app2.view.width/2.35;
        whl.height = app2.view.height/2.35;
        whl.interactive = true;
        whl.buttonMode = true;
        whl.angle = Math.floor(Math.random() * 360)
        whl.alpha = 0;
        container2.addChild(whl);
        whl.on('pointerdown', onClickSpin);

        // Create a new texture for marker
        mrk = new PIXI.Sprite(loader2.resources.mrk.texture);
        mrk.x = app2.view.width/-25;
        mrk.y = app2.view.height/-2.9;
        mrk.width = app2.view.width/11;
        mrk.height = app2.view.height/5;
        mrk.alpha = 0;
        container2.addChild(mrk);

        // Create a new texture for spin button
        btn = new PIXI.Sprite(loader2.resources.btn.texture);
        btn.x = app2.view.width/-6;
        btn.y = app2.view.height/3.75;
        btn.width = app2.view.width/3;
        btn.height = app2.view.height/10;
        btn.interactive = true;
        btn.buttonMode = true;
        btn.alpha = 0;
        container2.addChild(btn);
        btn.on('pointerdown', onClickSpin);

        btn2 = new PIXI.Sprite(loader2.resources.btn2.texture);
        btn2.x = btn.x;
        btn2.y = btn.y;
        btn2.width = btn.width;
        btn2.height = btn.height;
        btn2.alpha = 0;
        container2.addChild(btn2);


        return;
    }



    //Animation function for app 2
    function animate2(){

        var whltimer = 0;
        var animfinished2 = false;
        var spntimer = 0;
        var spntimertmp = 0;
        var rot = 0;
        var stp = false;
        animfinished3 = false;

        app2.ticker.add((delta) => {
            // delta is 1 if running at 100% performance
            // creates frame-independent transformation
            
            if (animfinished2 == false){

                whltimer += delta;

                if (whltimer >= 90){
                    whl.alpha = 0.2;
                    mrk.alpha = 0.2;
                    btn.alpha = 0.2;
                    
                    if (whltimer >= 95){
                        whl.alpha = 0.4;
                        mrk.alpha = 0.4;
                        btn.alpha = 0.4;

                        if (whltimer >= 100){
                            whl.alpha = 0.6;
                            mrk.alpha = 0.6;
                            btn.alpha = 0.6;

                            if (whltimer >= 105){
                                whl.alpha = 0.8;
                                mrk.alpha = 0.8;
                                btn.alpha = 0.8;

                                if (whltimer >= 110)
                                {
                                    ban1.alpha = 1;
                                    whl.alpha = 1;
                                    mrk.alpha = 1;
                                    btn.alpha = 1;
                                    whltimer = 0;
                                    animfinished2 = true;
                                    
                                }
                            }
                        }
                    }
                }
            }



            if (animfinished2 == true){
                whltimer += delta;
                
                if (whltimer >= 30){
                    ban1.alpha = 0;

                    if (whltimer >= 60){
                        ban1.alpha = 1;
                        whltimer = 0;
                    }
                }
            }

            

            
            if (spin == true){
            
                spntimer += delta;
                whl.angle += rot;

                if (whl.angle >= 360){
                    whl.angle -= 360;
                }
                else if (whl.angle < 0){
                    whl.angle += 360;
                }
                
                if (spntimer >= 0){
                    rot = -1;
                    
                    if (spntimer >= 45){
                        rot = 30;

                        if (spntimer >= 60){
                            rot = 28;

                            if (spntimer >= 75){
                                rot = 26;

                                if (spntimer >= 90){
                                    rot = 24;

                                    if (spntimer >= 105){
                                        rot = 22;

                                        if (spntimer >= 120){
                                            rot = 20;

                                            if (spntimer >= 135){
                                                rot = 18;

                                                if (spntimer >= 150){
                                                    rot = 16;

                                                    if (spntimer >= 175){
                                                        rot = 14;

                                                        if (spntimer >= 190){
                                                            rot = 12;

                                                            if (spntimer >= 205){
                                                                rot = 10;

                                                                if (spntimer >= 220){
                                                                    rot = 8;

                                                                    if (spntimer >= 235){
                                                                        rot = 6;

                                                                        if (spntimer >= 250){
                                                                            rot = 4;

                                                                            if ( (whl.angle >= rigmin && whl.angle <= rigmax) && stp == false){
                                                                                rot = 2;

                                                                                if (Math.round(whl.angle) == rigangle || Math.round(whl.angle) == (rigangle + 1) || Math.round(whl.angle) == (rigangle - 1)){
                                                                                    spntimertmp = spntimer;
                                                                                    stp = true;
                                                                                }
                                                                            }

                                                                            if (stp == true){
                                                                                if ( (spntimer - spntimertmp) >= 0){
                                                                                    rot = 2.5;

                                                                                    if ( (spntimer - spntimertmp) >= 3){
                                                                                        rot = -2.5;

                                                                                        if ( (spntimer - spntimertmp) >= 6){
                                                                                            rot = -2.5;

                                                                                            if ( (spntimer - spntimertmp) >= 9){
                                                                                                rot = 2.5;

                                                                                                if ( (spntimer - spntimertmp) >= 12){
                                                                                                    whl.angle = rigangle; 

                                                                                                    if ( (spntimer - spntimertmp) >= 15){
                                                                                                        rot = 0;
                                                                                                        spntimer = 0;
                                                                                                        spntimertmp = 0;
                                                                                                        stp = false;
                                                                                                        btn.interactive = true;
                                                                                                        btn.buttonMode = true;
                                                                                                        btn2.alpha = 0;
                                                                                                        spin = false;
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }


        });



    }



    //Wheel Spin function
    var aler = false;
    function onClickSpin(){
        
		if (jsonObject.POSITION <1 || jsonObject.POSITION > whlzones){
			alert("Dev note: \nError: Invalid position in test.json file. Position must be between 1 and " + whlzones + ".");
			return;
		}
		
        if (aler == false){
		    alert("Dev note: \nThe wheel will always stop at position " + jsonObject.POSITION + ". This can be changed in the test.json file");
            aler = true;
        }

        btn.interactive = false;
        btn.buttonMode = false;
        btn2.alpha = 1;
        
        rigvalue = (jsonObject.POSITION * whlzones) + ((jsonObject.POSITION - 1) * (whlzones - 1));
        if (rigvalue > 4){
            rigvalue %= 4;
        }
        else if (rigvalue < 0){
            rigvalue += 4;
        }
        rigmin = (rigvalue-1) * (360/whlzones);
        rigmax = rigvalue * (360/whlzones);
        rigangle = Math.floor(Math.random() * (rigmax - rigmin) ) + rigmin;
        spin = true;

        return;
    }

    

    //Key press function
    document.addEventListener("keydown", function(event) {
       // event.preventDefault();
        switch (event.which) {
            case 13:
                if (!spin){
                    onClickSpin();
                }
            break;
            case 32:
                if (!spin){
                    onClickSpin();
                }
            break;
        }

        return;
    });
      


    //Resize function
    window.addEventListener('resize', resizeevent);
    var alerres = false;
    function resizeevent(){
        if (!alerres){
            alert("Please refresh the page to resize contents.");
            alerres = true;
        }
    }
    


    //Loader progress function
    function prog() {
        var progressbar = document.getElementsByClassName('progress-bar')[0];
        var loadercont = document.getElementsByClassName('preloader-back')[0];
        var progressed = 0;
        var opac = 1;

        var progressint = setInterval(moveprog, 10);
        
        function moveprog() {
            if (progressed < 100) {
                progressed++;
                progressbar.style.width = progressed + "%";
                
            } 
            else {
                clearInterval(progressint);
                loadercont.style.display = 'none';
                document.body.style.overflowY = 'scroll';
                animate1();
                animate2();
                return;
            }
        }
     
        return;
    }

}