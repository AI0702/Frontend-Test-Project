
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}

window.onload = () => {

    //Create a Pixi Application
    const app1 = new PIXI.Application({ 
    width: window.innerWidth,         
    height: (window.innerWidth/2)*0.7,        
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1,       // default: 1
    //resizeTo: window
    });


    //Add the canvas that Pixi automatically created for you to the HTML document
    document.getElementById('container-main').appendChild(app1.view);

    // Create a new container
    const container1 = new PIXI.Container();
    app1.stage.addChild(container1);
    
    // Create a new texture for background
    const back = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/header.png'));
    back.width = app1.view.width;
    back.height = app1.view.height;
    container1.addChild(back);

    // Create a new texture for foreground
    const fore = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/showdown-off.png'));
    fore.x = app1.view.width/20;
    fore.y = app1.view.height/20;
    fore.width = app1.view.width/1.1;
    fore.height = app1.view.height/1.1;
    container1.addChild(fore);

    /*
    // Create a new texture for Lightning Bolt off
    const bolo = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/bolt-off@2x.png'));
    bolo.x = app1.view.width/2.1;
    bolo.y = app1.view.height/30;
    bolo.width = app1.view.width/10;
    bolo.height = app1.view.height/3.25;
    container1.addChild(bolo);
    bolo.alpha = 1;
    */
    
    // Create a new texture for Lightning Bolt
    const bol = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/bolt@2x.png'));
    bol.x = app1.view.width/2.3;
    bol.y = app1.view.height/-13;
    bol.width = app1.view.width/5.5;
    bol.height = app1.view.height/2;
    container1.addChild(bol);
    bol.alpha = 0;
    
    // Create a new texture for Vegas
    const veg = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/vegas@2x.png'));
    veg.x = app1.view.width/8.75;
    veg.width = app1.view.width/2.4;
    veg.height = app1.view.height/2.5;
    container1.addChild(veg);
    veg.alpha = 0;

    // Create a new texture for Slots
    const slo = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/slots@2x.png'));
    slo.x = app1.view.width/(1.83);
    slo.width = app1.view.width/2.7;
    slo.height = app1.view.height/2.5;
    container1.addChild(slo);
    slo.alpha = 0;

    // Create a new texture for letter S
    const ls = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/s@2x.png'));
    ls.x = app1.view.width/-65;
    ls.y = app1.view.height/18;
    ls.width = app1.view.width/3.7;
    ls.height = app1.view.height/0.92;
    container1.addChild(ls);
    ls.alpha = 0;

    // Create a new texture for letter h
    const lh = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/h@2x.png'));
    lh.x = app1.view.width/10.8;
    lh.y = app1.view.height/18;
    lh.width = app1.view.width/3.5;
    lh.height = app1.view.height/0.92;
    container1.addChild(lh);
    lh.alpha = 0;

    // Create a new texture for letter o-1
    const lo1 = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/o-1@2x.png'));
    lo1.x = app1.view.width/3.8;
    lo1.y = app1.view.height/17;
    lo1.width = app1.view.width/8.75;
    lo1.height = app1.view.height/0.93;
    container1.addChild(lo1);
    lo1.alpha = 0;

    // Create a new texture for letter w-1
    const lw1 = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/w-1@2x.png'));
    lw1.x = app1.view.width/3.17;
    lw1.y = app1.view.height/18;
    lw1.width = app1.view.width/3.9;
    lw1.height = app1.view.height/0.99;
    container1.addChild(lw1);
    lw1.alpha = 0;

    // Create a new texture for letter d
    const ld = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/d@2x.png'));
    ld.x = app1.view.width/2.23;
    ld.y = app1.view.height/20;
    ld.width = app1.view.width/4;
    ld.height = app1.view.height/1.03;
    container1.addChild(ld);
    ld.alpha = 0;

    // Create a new texture for letter o-2
    const lo2 = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/o-2@2x.png'));
    lo2.x = app1.view.width/1.85;
    lo2.y = app1.view.height/20;
    lo2.width = app1.view.width/3.9;
    lo2.height = app1.view.height/1;
    container1.addChild(lo2);
    lo2.alpha = 0;

    // Create a new texture for letter w-2
    const lw2 = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/w-2@2x.png'));
    lw2.x = app1.view.width/1.57;
    lw2.y = app1.view.height/20;
    lw2.width = app1.view.width/3.9;
    lw2.height = app1.view.height/0.93;
    container1.addChild(lw2);
    lw2.alpha = 0;

    // Create a new texture for letter n
    const ln = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/n@2x.png'));
    ln.x = app1.view.width/1.34;
    ln.y = app1.view.height/18;
    ln.width = app1.view.width/3.45;
    ln.height = app1.view.height/0.92;
    container1.addChild(ln);
    ln.alpha = 0;

    // Create a new texture for must drop drop jackpots
    const mdj = new PIXI.Sprite(PIXI.Texture.from('../images/showdown/must_drop.png'));
    mdj.x = app1.view.width/6.3;
    mdj.y = app1.view.height/1.7;
    mdj.width = app1.view.width/1.45;
    mdj.height = app1.view.height/2;
    container1.addChild(mdj);
    mdj.alpha = 0;

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





    //Create a Pixi Application
    const app2 = new PIXI.Application({ 
        width: window.innerWidth,         
        height: window.innerWidth*0.7,        
        antialias: true,    // default: false
        transparent: true, // default: false
        resolution: 1,       // default: 1
        //resizeTo: window
    });


    //Add the canvas that Pixi automatically created for you to the HTML document
    document.getElementById('container-main').appendChild(app2.view);

    // Create a new container
    const container2 = new PIXI.Container();
    container2.x = app2.view.width/2;
    container2.pivot.x = container2.width / 2;
    container2.y = app2.view.height/2;
    container2.pivot.y = container2.height / 2;

    app2.stage.addChild(container2);
    
    // Create a new texture for background
    const back2 = new PIXI.Sprite(PIXI.Texture.from('../images/wheel/back.png'));
    back2.width = app2.view.width;
    back2.height = app2.view.height;
    back2.anchor.set(0.5);
    container2.addChild(back2);

    // Create a new texture for wheel
    const whl = new PIXI.Sprite(PIXI.Texture.from('../images/wheel/wheelmarked.png'));
    whl.x = app2.view.width/100;
    whl.y = app2.view.height/20;
    whl.anchor.set(0.5);
    whl.width = app2.view.width/2.35;
    whl.height = app2.view.height/1.65;
    whl.angle = Math.floor(Math.random() * 360)
    whl.alpha = 0;
    container2.addChild(whl);

    // Create a new texture for marker
    const mrk = new PIXI.Sprite(PIXI.Texture.from('../images/wheel/marker.png'));
    mrk.x = app2.view.width/-20;
    mrk.y = app2.view.height/-2.5;
    mrk.width = app2.view.width/10;
    mrk.height = app2.view.height/5;
    
    mrk.alpha = 0;
    container2.addChild(mrk);

    // Create a new texture for spin button
    const btn = new PIXI.Sprite(PIXI.Texture.from('../images/wheel/btn-spin.png'));
    btn.x = app2.view.width/-6;
    btn.y = app2.view.height/2.7;
    btn.width = app2.view.width/3;
    btn.height = app2.view.height/10;
    btn.interactive = true;
    btn.buttonMode = true;
    btn.alpha = 0;
    btn.on('pointerdown', onClick);
    function onClick(){
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
    }
    container2.addChild(btn);

    const btn2 = new PIXI.Sprite(PIXI.Texture.from('../images/wheel/btn2-spin.png'));
    btn2.x = btn.x;
    btn2.y = btn.y;
    btn2.width = btn.width;
    btn2.height = btn.height;
    btn2.alpha = 0;
    container2.addChild(btn2);



    var whltimer = 0;
    var animfinished2 = false;
    var spntimer = 0;
    var spin = false;
    var rot = 0;
    var whlzones = 4
    var rigmin = 0;
    var rigmax = 0;
    var rigangle = 0;
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
        





        
        if (spin == true){
            btn.interactive = false;
            btn.buttonMode = false;
            btn2.alpha = 1;

        
            spntimer += delta;
            //rot++;
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

                                                                        if (whl.angle >= rigmin && whl.angle <= rigmax){
                                                                            rot = 2;

                                                                            if (Math.round(whl.angle) >= rigangle ){
                                                                                rot = 0;
                                                                                spntimer = 0;
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





    });


      


    
    



        





    
    



























         
         
    


       


}