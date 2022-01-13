
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}

//After the HTML is fully, loaded
window.onload = () => {

    

    //Create Pixi App
    var loaded = false;
    const app = new PIXI.Application({ 
        view: document.getElementById("appcanvas"),
        //width: window.innerWidth,         
        //height: window.innerHeight,        
        antialias: true,
        transparent: true,
        resolution: 1,
        //autoDensity: true,
        //autoResize: true,
        //resizeTo: window,
    });
    
    app.renderer.autoResize = true;
    app.renderer.plugins.interaction.autoPreventDefault = false;
    app.renderer.view.style.touchAction = 'auto';
    


    // Check for mobile / desktop devices
    var mobiledev;

    if (window.innerWidth <= window.innerHeight){
        mobiledev = true;
        app.renderer.resize(window.innerWidth, window.innerHeight + (((((window.innerWidth * 100) / window.innerHeight) / 100) - 0.5) * window.innerWidth));
    }
    else{
        mobiledev = false;
        app.renderer.resize(window.innerWidth, window.innerHeight - (((((window.innerHeight * 100) / window.innerWidth) / 100) - 0.65) * window.innerWidth));
    }
    


    // Create a new container as a stage for Pixi App
    var containerstg = new PIXI.Container();
    containerstg.width = app.renderer.width;
    containerstg.height = app.renderer.height
    app.stage.addChild(containerstg);



    





    //Loading all assets
    var container1, back, fore, bolo, bol, veg, slo, ls, lh, lo1, lw1, ld, lo2, lw2, ln, mdj;
    var container2, whl, whlf0, whlf1, whlf2, whlf3, mrk, btn, btn2, pback, prz, spin = false, whlzones = 4, rigmin = 0, rigmax = 0, rigangle = 0, prizewin = false;
    
    const loader = app.loader
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
    .add('back2', '../images/wheel/back.png')
    .add('whl', '../images/wheel/wheelmarked.png')
    .add('whlf0', '../images/wheel/wheelframe.png')
    .add('whlf1', '../images/wheel/wheelframe1.png')
    .add('whlf2', '../images/wheel/wheelframe2.png')
    .add('whlf3', '../images/wheel/wheelframe3.png')
    .add('mrk', '../images/wheel/marker.png')
    .add('btn', '../images/wheel/btn-spin.png')
    .add('btn2', '../images/wheel/btn2-spin.png')
    .add('ban1', '../images/wheel/ban1.png')
    .add('pback', '../images/wheel/pback.png')
    .add('prz', '../images/wheel/p.png')
    .add('p1', '../images/wheel/p1.png')
    .add('p2', '../images/wheel/p2.png')
    .add('p3', '../images/wheel/p3.png')
    .add('p4', '../images/wheel/p4.png')
    //When all assets have been loaded
    .load(onAssetsLoaded);

    //While assets are being loaded
    loader.onLoad.add(() => {prog();});
    //After assets have been loaded
    loader.onComplete.add(() => {postload();});





    //PreLoader progress function
    var progressbar = document.getElementsByClassName('progress-bar')[0];
    var preloadercont = document.getElementsByClassName('preloader-back')[0];
    var preloader = document.getElementsByClassName('preloader')[0];
    var preloader2 = document.getElementsByClassName('preloader2')[0];
    var progressed = 0, opac = 0, loadr = false, splsh = false;

    function prog() {
        
        progressed += Math.floor(Math.random() * 3) + 1;

        if (progressed >= 100){
            progressed += Math.floor(Math.random() * 80) + 50;
        }
        
        progressbar.style.width = progressed + "%";

        return;
    }



    //Loading complete function 1
    function postload() {
        
        progressed = 100;
        progressbar.style.width = progressed + "%";
        opac = 2;
        var progressint = setInterval(opacdown, 50);
        
        function opacdown() {
            
            if (opac > 0){
                preloader.style.opacity = opac;
                opac -= 0.05;
            }
            else{
                clearInterval(progressint);
                preloader.style.display = 'none';
                preloader2.style.display = 'block'
                postload2();
            }
        }
        

        return;
    }


    //Loading complete function 2
    function postload2(){

        opac = 0;
        var progressint = setInterval(opacup, 50);
        
        function opacup() {
            
            if (opac < 1){
                preloader2.style.opacity = opac;
                opac += 0.05;
            }
            else{
                clearInterval(progressint);
                postload3();
                
            }
        }
            
        return;
    }


    //Loading complete function 3
    function postload3(){

        opac = 2;
        var progressint = setInterval(opacdown, 50);
        
        function opacdown() {
            
            if (opac > 0){
                preloader2.style.opacity = opac;
                opac -= 0.05;
            }
            else{
                clearInterval(progressint);
                preloader2.style.display = 'none';
                preloadercont.style.display = 'none';
                app.view.style.opacity = '1';
                document.getElementById("container-main").style.backgroundImage = 'linear-gradient(#140D3D, #140D3D, #140D3D, #0E1D56, #0E1D56)';
                document.body.style.overflowY = 'scroll';
                loaded = true;
                animate1();
                animate2();
            }
        }
            
        return;
    }






    //Stage assets function
    function onAssetsLoaded() {
        
        // Create a new container as a stage for app 1
        var container1 = new PIXI.Container();
        if (mobiledev == true){
            container1.width = app.renderer.width;
            container1.height = app.renderer.height*0.45;
        }
        else{
            container1.width = app.renderer.width;
            container1.height = app.renderer.height*0.33;
        }
        containerstg.addChild(container1);
                
        // Create a new texture for background
        back = new PIXI.Sprite(loader.resources.back.texture);
        if (mobiledev == true){
            back.width = app.renderer.width;
            back.height = app.renderer.height*0.45;
        }
        else{
            back.width = app.renderer.width;
            back.height = app.renderer.height*0.33;
        }
        container1.addChild(back);

        // Create a new texture for foreground
        fore = new PIXI.Sprite(loader.resources.fore.texture);
        if (mobiledev == true){
            fore.width = app.renderer.width;
            fore.height = fore.width/3;
            fore.x = app.renderer.width*0.005;
            fore.y = app.renderer.height*0.05;
        }
        else{
            fore.width = app.renderer.width*0.6;
            fore.height = fore.width/3;
            fore.x = app.renderer.width*0.21;
            fore.y = app.renderer.height*0.05;
        }
        container1.addChild(fore);

        // Create a new texture for Lightning Bolt Off
        bolo = new PIXI.Sprite(loader.resources.bolo.texture);
        bolo.width = fore.width;
        bolo.height = fore.height;
        bolo.x = fore.x;
        bolo.y = fore.y;
        bolo.alpha = 0;
        container1.addChild(bolo);
        
        // Create a new texture for Lightning Bolt
        bol = new PIXI.Sprite(loader.resources.bol.texture);
        bol.width = fore.width;
        bol.height = fore.height;
        bol.x = fore.x;
        bol.y = fore.y;
        bol.alpha = 0;
        container1.addChild(bol);
        
        // Create a new texture for Vegas
        veg = new PIXI.Sprite(loader.resources.veg.texture);
        veg.width = fore.width;
        veg.height = fore.height;
        veg.x = fore.x;
        veg.y = fore.y;
        veg.alpha = 0;
        container1.addChild(veg);

        // Create a new texture for Slots
        slo = new PIXI.Sprite(loader.resources.slo.texture);
        slo.width = fore.width;
        slo.height = fore.height;
        slo.x = fore.x;
        slo.y = fore.y;
        slo.alpha = 0;
        container1.addChild(slo);

        // Create a new texture for letter S
        ls = new PIXI.Sprite(loader.resources.ls.texture);
        ls.width = fore.width;
        ls.height = fore.height;
        ls.x = fore.x;
        ls.y = fore.y;
        ls.alpha = 0;
        container1.addChild(ls);

        // Create a new texture for letter h
        lh = new PIXI.Sprite(loader.resources.lh.texture);
        lh.width = fore.width;
        lh.height = fore.height;
        lh.x = fore.x;
        lh.y = fore.y;
        lh.alpha = 0;
        container1.addChild(lh);

        // Create a new texture for letter o-1
        lo1 = new PIXI.Sprite(loader.resources.lo1.texture);
        lo1.width = fore.width;
        lo1.height = fore.height;
        lo1.x = fore.x;
        lo1.y = fore.y;
        lo1.alpha = 0;
        container1.addChild(lo1);

        // Create a new texture for letter w-1
        lw1 = new PIXI.Sprite(loader.resources.lw1.texture);
        lw1.width = fore.width;
        lw1.height = fore.height;
        lw1.x = fore.x;
        lw1.y = fore.y;
        lw1.alpha = 0;
        container1.addChild(lw1);

        // Create a new texture for letter d
        ld = new PIXI.Sprite(loader.resources.ld.texture);
        ld.width = fore.width;
        ld.height = fore.height;
        ld.x = fore.x;
        ld.y = fore.y;
        ld.alpha = 0;
        container1.addChild(ld);

        // Create a new texture for letter o-2
        lo2 = new PIXI.Sprite(loader.resources.lo2.texture);
        lo2.width = fore.width;
        lo2.height = fore.height;
        lo2.x = fore.x;
        lo2.y = fore.y;
        lo2.alpha = 0;
        container1.addChild(lo2);

        // Create a new texture for letter w-2
        lw2 = new PIXI.Sprite(loader.resources.lw2.texture);
        lw2.width = fore.width;
        lw2.height = fore.height;
        lw2.x = fore.x;
        lw2.y = fore.y;
        lw2.alpha = 0;
        container1.addChild(lw2);

        // Create a new texture for letter n
        ln = new PIXI.Sprite(loader.resources.ln.texture);
        ln.width = fore.width;
        ln.height = fore.height;
        ln.x = fore.x;
        ln.y = fore.y;
        ln.alpha = 0;
        container1.addChild(ln);

        // Create a new texture for must drop jackpots
        mdj = new PIXI.Sprite(loader.resources.mdj.texture);
        mdj.width = fore.width;
        mdj.height = fore.height;
        mdj.x = fore.x;
        mdj.y = fore.y;
        mdj.alpha = 0;
        container1.addChild(mdj);





        // Create a new container as a stage for app 2
        var container2 = new PIXI.Container();
        if (mobiledev == true){
            container2.width = app.renderer.width;
            container2.height = app.renderer.height*0.5;
            container2.y = app.renderer.height*0.25;
        }
        else{
            container2.width = app.renderer.width;
            container2.height = app.renderer.height*0.6;
            container2.y = app.renderer.height*0.2;
        }
        containerstg.addChild(container2);

        // Create a new texture for background
        back2 = new PIXI.Sprite(loader.resources.back2.texture);
        if (mobiledev == true){
            back2.width = app.renderer.width;
            back2.height = app.renderer.height*0.5;
            back2.y = app.renderer.height*0.25;
        }
        else{
            back2.width = app.renderer.width;
            back2.height = app.renderer.height*0.6;
            back2.y = app.renderer.height*0.2;
        }
        back2.alpha = 0;
        container2.addChild(back2);

        // Create a new texture for wheel
        whl = new PIXI.Sprite(loader.resources.whl.texture);
        if (mobiledev == true){
            whl.width = app.renderer.width/1.5;
            whl.height = whl.width;
            whl.x = app.renderer.width*0.5;
            whl.y = app.renderer.height*0.3;
        }
        else{
            whl.width = app.renderer.width/3.5;
            whl.height = whl.width;
            whl.x = app.renderer.width*0.7;
            whl.y = app.renderer.height*0.5;
        }
        whl.anchor.set(0.5);
        whl.angle = Math.floor(Math.random() * 360)
        whl.alpha = 0;
        container2.addChild(whl);

        // Create a new texture for wheel frame 0
        whlf0 = new PIXI.Sprite(loader.resources.whlf0.texture);
        whlf0.width = whl.width + (whl.width*0.075);
        whlf0.height = whl.height + (whl.height*0.075);
        whlf0.x = whl.x;
        whlf0.y = whl.y;
        whlf0.anchor.set(0.5);
        whlf0.alpha = 0;
        container2.addChild(whlf0);
        
        // Create a new texture for wheel frame 1
        whlf1 = new PIXI.Sprite(loader.resources.whlf1.texture);
        whlf1.width = whl.width + (whl.width*0.075);
        whlf1.height = whl.height + (whl.height*0.075);
        whlf1.x = whl.x;
        whlf1.y = whl.y;
        whlf1.anchor.set(0.5);
        whlf1.alpha = 0;
        container2.addChild(whlf1);

        // Create a new texture for wheel frame 2
        whlf2 = new PIXI.Sprite(loader.resources.whlf2.texture);
        whlf2.width = whl.width + (whl.width*0.075);
        whlf2.height = whl.height + (whl.height*0.075);
        whlf2.x = whl.x;
        whlf2.y = whl.y;
        whlf2.anchor.set(0.5);
        whlf2.alpha = 0;
        container2.addChild(whlf2);

        // Create a new texture for wheel frame 3
        whlf3 = new PIXI.Sprite(loader.resources.whlf3.texture);
        whlf3.width = whl.width + (whl.width*0.075);
        whlf3.height = whl.height + (whl.height*0.075);
        whlf3.x = whl.x;
        whlf3.y = whl.y;
        whlf3.anchor.set(0.5);
        whlf3.alpha = 0;
        container2.addChild(whlf3);

        // Create a new texture for marker
        mrk = new PIXI.Sprite(loader.resources.mrk.texture);
        if (mobiledev == true){
            mrk.width = whl.width/5.5;
            mrk.height = mrk.width*2;
            mrk.x = whl.x;
            mrk.y = whl.y-(whl.height/1.9);
        }
        else{
            mrk.width = whl.width/5.5;
            mrk.height = mrk.width*2;
            mrk.x = whl.x+(whl.width/1.9);
            mrk.y = whl.y;
            mrk.angle = 90;
        }
        mrk.anchor.set(0.5);
        mrk.alpha = 0;
        container2.addChild(mrk);

        // Create a new texture for banner
        ban1 = new PIXI.Sprite(loader.resources.ban1.texture);
        if (mobiledev == true){
            ban1.visible = false;
        }
        else{
            ban1.width = whl.width;
            ban1.height = ban1.width/1.5;
            ban1.x = whl.x+(whl.width / (-0.8));
            ban1.y = whl.y/1.3;
        }
        ban1.anchor.set(0.5);
        ban1.alpha = 0;
        container2.addChild(ban1);

        // Create a new texture for spin button
        btn = new PIXI.Sprite(loader.resources.btn.texture);
        if (mobiledev == true){
            btn.width = whl.width/1.3;
            btn.height = btn.width*0.3;
            btn.x = whl.x;
            btn.y = whl.y+(whl.height/1.25);
        }
        else{
            btn.width = whl.width/1.3;
            btn.height = btn.width*0.3;
            btn.x = whl.x+(whl.width / (-0.8));
            btn.y = whl.y/0.8;
        }
        btn.anchor.set(0.5);
        btn.interactive = true;
        btn.buttonMode = true;
        btn.alpha = 0;
        container2.addChild(btn);
        btn.on('pointerdown', onClickSpin);

        btn2 = new PIXI.Sprite(loader.resources.btn2.texture);
        btn2.width = btn.width;
        btn2.height = btn.height;
        btn2.x = btn.x;
        btn2.y = btn.y;
        btn2.anchor.set(0.5);
        btn2.alpha = 0;
        container2.addChild(btn2);

        // Create a new texture for prize background
        pback = new PIXI.Sprite(loader.resources.pback.texture);
        pback.width = app.renderer.width;
        pback.height = app.renderer.height*2;
        pback.y = app.renderer.height*(-0.25);
        pback.visible = false;
        container2.addChild(pback);
        pback.on('pointerdown', prizeoff);

        // Create a new texture for prize
        prz = new PIXI.Sprite(loader.resources.prz.texture);
        if (mobiledev == true){
            prz.width = app.renderer.width/1.5;
            prz.height = prz.width;
            prz.x = app.renderer.width/2;
            prz.y = app.renderer.height/4.5;
        }
        else{
            prz.width = app.renderer.width/3.5;
            prz.height = prz.width;
            prz.x = app.renderer.width/2;
            prz.y = app.renderer.height/3;
        }
        prz.anchor.set(0.5, 0.5);
        prz.interactive = true;
        prz.buttonMode = true;
        prz.visible = false;
        container2.addChild(prz);
        prz.on('pointerdown', prizeoff);
        
        


        return;
    }





    //Animation function for app 1
    function animate1(){
        var boltimer = 0;
        var animtimer = 0;
        var animfinished1 = false;

        app.ticker.add((delta) => {
            
            boltimer += delta;

            if (boltimer >= 30){
                bolo.alpha = 1;

                if (boltimer >= 110){
                    bol.alpha = 1;
                    bolo.alpha = 0;
                    
                    if (boltimer >= 115){
                        bol.alpha = 0;
                        bolo.alpha = 1;

                        if (boltimer >= 120){
                            bol.alpha = 1;
                            bolo.alpha = 0;

                            if (boltimer >= 125){
                                bol.alpha = 0;
                                bolo.alpha = 1;

                                if (boltimer >= 130)
                                {
                                    bol.alpha = 1;
                                    bolo.alpha = 0;

                                    if (boltimer >= 140){
                                        bol.alpha = 0;
                                        bolo.alpha = 1;

                                        if (boltimer >= 145){
                                            bol.alpha = 1;
                                            bolo.alpha = 0;

                                            if (boltimer >= 150){
                                                bol.alpha = 0;
                                                bolo.alpha = 1;

                                                if (boltimer >= 155){
                                                    bol.alpha = 1;
                                                    bolo.alpha = 0;

                                                    if (boltimer >= 160){
                                                        bol.alpha = 0;
                                                        bolo.alpha = 1;

                                                        if (boltimer >= 165){
                                                            bol.alpha = 1;
                                                            bolo.alpha = 0;

                                                            if (boltimer >= 175){
                                                                bol.alpha = 0;
                                                                bolo.alpha = 1;

                                                                if (boltimer >= 180){
                                                                    bol.alpha = 1;
                                                                    bolo.alpha = 0;

                                                                    if (boltimer >= 185){
                                                                        bol.alpha = 0;
                                                                        bolo.alpha = 1;

                                                                        if (boltimer >= 190){
                                                                            bol.alpha = 1;
                                                                            bolo.alpha = 0;

                                                                            if (boltimer >= 195){
                                                                                bol.alpha = 0;
                                                                                bolo.alpha = 1;

                                                                                if (boltimer >= 200){
                                                                                    bol.alpha = 1;
                                                                                    bolo.alpha = 0;

                                                                                    if (boltimer >= 210){
                                                                                        bol.alpha = 0;
                                                                                        bolo.alpha = 1;

                                                                                        if (boltimer >= 215){
                                                                                            bol.alpha = 1;
                                                                                            bolo.alpha = 0;

                                                                                            if (boltimer >= 220){
                                                                                                bol.alpha = 0;
                                                                                                bolo.alpha = 1;

                                                                                                if (boltimer >= 225){
                                                                                                    bol.alpha = 1;
                                                                                                    bolo.alpha = 0;

                                                                                                    if (boltimer >= 230){
                                                                                                        bol.alpha = 0;
                                                                                                        bolo.alpha = 1;

                                                                                                        if (boltimer >= 235){
                                                                                                            bol.alpha = 1;
                                                                                                            bolo.alpha = 1;

                                                                                                            if (boltimer >= 805){
                                                                                                                boltimer = 0;
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





    //Animation function for app 2
    function animate2(){

        var whltimer = 0;
        var bantimer = 0;
        var animfinished2 = false;
        var spntimer = 0;
        var spntimertmp = 0;
        var rot = 0;
        var stp = false;
        animfinished3 = false;

        app.ticker.add((delta) => {
            
            if (animfinished2 == false){

                whltimer += delta;

                if (whltimer >= 90){
                    whl.alpha = 0.2;
                    mrk.alpha = 0.2;
                    btn.alpha = 0.2;
                    whlf0.alpha = 0.2;
                    
                    if (whltimer >= 95){
                        whl.alpha = 0.4;
                        mrk.alpha = 0.4;
                        btn.alpha = 0.4;
                        whlf0.alpha = 0.4;

                        if (whltimer >= 100){
                            whl.alpha = 0.6;
                            mrk.alpha = 0.6;
                            btn.alpha = 0.6;
                            whlf0.alpha = 0.6;

                            if (whltimer >= 105){
                                whl.alpha = 0.8;
                                mrk.alpha = 0.8;
                                btn.alpha = 0.8;
                                whlf0.alpha = 0.8;

                                if (whltimer >= 110)
                                {
                                    ban1.alpha = 1;
                                    whl.alpha = 1;
                                    mrk.alpha = 1;
                                    btn.alpha = 1;
                                    whlf0.alpha = 1;
                                    whltimer = 0;
                                    animfinished2 = true;
                                    
                                }
                            }
                        }
                    }
                }
            }


            if (animfinished2 == true && spin == false){
                whltimer += delta;
                
                if (whltimer >= 60){
                    whlf1.alpha = 0;
                    whlf2.alpha = 1;

                    if (whltimer >= 120){
                        whlf1.alpha = 1;
                        whlf2.alpha = 0;
                        whltimer = 0;
                    }
                }
            }


            if (animfinished2 == true){
                bantimer += delta;
                
                if (bantimer >= 30){
                    ban1.alpha = 0;

                    if (bantimer >= 60){
                        ban1.alpha = 1;
                        bantimer = 0;
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
                    whlf1.alpha = 0;
                    whlf2.alpha = 0;
                    
                    if (spntimer >= 45){
                        rot = 30;
                        whlf3.alpha = 1;

                        if (spntimer >= 60){
                            rot = 28;
                            whlf3.alpha = 0;

                            if (spntimer >= 75){
                                rot = 26;
                                whlf3.alpha = 1;

                                if (spntimer >= 90){
                                    rot = 24;
                                    whlf3.alpha = 0;

                                    if (spntimer >= 105){
                                        rot = 22;
                                        whlf3.alpha = 1;

                                        if (spntimer >= 120){
                                            rot = 20;
                                            whlf3.alpha = 0;

                                            if (spntimer >= 135){
                                                rot = 18;
                                                whlf3.alpha = 1;

                                                if (spntimer >= 150){
                                                    rot = 16;
                                                    whlf3.alpha = 0;

                                                    if (spntimer >= 175){
                                                        rot = 14;
                                                        whlf3.alpha = 1;

                                                        if (spntimer >= 190){
                                                            rot = 12;
                                                            whlf3.alpha = 0;

                                                            if (spntimer >= 205){
                                                                rot = 10;
                                                                whlf3.alpha = 1;

                                                                if (spntimer >= 220){
                                                                    rot = 8;
                                                                    whlf3.alpha = 0;

                                                                    if (spntimer >= 235){
                                                                        rot = 6;
                                                                        whlf3.alpha = 1;

                                                                        if (spntimer >= 250){
                                                                            rot = 4;
                                                                            whlf3.alpha = 0;

                                                                            if ( (whl.angle >= rigmin && whl.angle <= rigmax) && stp == false){
                                                                                rot = 2;
                                                                                whlf3.alpha = 1;

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
                                                                                                        whlf3.alpha = false;
                                                                                                        prizeon();
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
        
		if (!spin && !prizewin){
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
			
			if (mobiledev == true){
				rigmin = ( (rigvalue-1) * (360/whlzones) ) + 5;
				rigmax = ( rigvalue * (360/whlzones) ) - 5;
			}
			else {
				rigmin = ( ( ( (rigvalue-1) * (360/whlzones) ) + 5 )+ 90 ) %360;
				rigmax = ( ( ( rigvalue * (360/whlzones) ) - 5 ) + 90 ) %360;
			}

			rigangle = Math.floor(Math.random() * (rigmax - rigmin) ) + rigmin;
			spin = true;
		}

        
        return;
    }





    //Prize function
    function prizeon(){
        
        if (jsonObject.POSITION == 1){
            prz.texture = loader.resources.p1.texture;
        }
        else if (jsonObject.POSITION == 2){
            prz.texture = loader.resources.p2.texture;
        }
        else if (jsonObject.POSITION == 3){
            prz.texture = loader.resources.p3.texture;
        }
        else if (jsonObject.POSITION == 4){
            prz.texture = loader.resources.p4.texture;
        }

        prizewin = true;
		pback.visible = true;
        prz.visible = true;

    }





    //Prize function 2
    function prizeoff(){
        pback.visible = false;
        prz.visible = false;
        prz.texture = loader.resources.prz.texture;
        prizewin = false;
    }





    //Key press function
    document.addEventListener("keydown", function(event) {
       
        if (loaded == true){
            // event.preventDefault();
            switch (event.which) {
                case 13:
                    if (!spin && !prizewin){
                        onClickSpin();
                    }
                    if (!spin && prizewin){
                        prizeoff();
                    }
                break;
                case 32:
                    if (!spin && !prizewin){
                        onClickSpin();
                    }
                    if (!spin && prizewin){
                        prizeoff();
                    }
                break;
            }
        }

        return;
    });
      






}