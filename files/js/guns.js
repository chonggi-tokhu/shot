
        var shootinggamegame = {
            willshootinggamemove: false,
            objects: {
                shootinggame: document.getElementById("shootinggame"),
                yongjang: document.getElementById("yongjang"),
                weaponselect:document.getElementById("weaponchanger"),
                weapons: {
                    _m1911: {
                        weapon: document.getElementById("m1911pistolgr"),
                        weaponparts: {
                            slide: document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0],
                            frame: document.getElementById("m1911pistolgr").getElementsByClassName("frame_1")[0],
                            hammer: document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0],
                            magazine:document.getElementById("m1911pistolgr").getElementsByClassName("magazine")[0],
                            muzzleflash: document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0],
                            cartridge: document.getElementById("m1911pistolgr").getElementsByClassName("shell")[0],
                            barrel: document.getElementById("m1911pistolgr").getElementsByClassName("frame_2")[0],
                        },
                        imgsrc() {
                            this.weaponparts.slide.src = `./files/img/guns/_m1911/slide_3.png`;
                            this.weaponparts.frame.src = `./files/img/guns/_m1911/frame_1_1.png`;
                            this.weaponparts.barrel.src = `./files/img/guns/_m1911/frame_2.png`;
                            this.weaponparts.hammer.src = `./files/img/guns/_m1911/m1911_hammer.png`;
                            this.weaponparts.magazine.src = `./files/img/guns/_m1911/m1911_magazine_loaded.png`;
                            this.weaponparts.cartridge.src = `./files/img/guns/_m1911/45탄피.png`;
                            this.weapon.setAttribute("data-img-gun", "_m1911");
                        },
                        infos: {
                            name:"Colt M1911",
                            koreanname: "콜트 M1911A1",
                            rounds: 7,
                        },
                        firingfunction() {
                            
            if (shootinggamegame.inloadingtomagazine==false){

                if (shootinggamegame.rounds > 0) {
                    shootinggamegame.rounds -= 1;
                    shootinggamegame.inloadingtomagazine=true;
                    if (shootinggamegame.rounds <= 0) {
                        shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weaponparts.magazine.src = "./files/img/guns/_m1911/m1911_magazine.png";
                    }
                    shootinggamegame.willshootinggamemove = false;
                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.animation = "muzzleflash 0.1425s 1";
                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.display = "block";
                    }, 17.5);
                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "loadinground 0.25s 1";
                        document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "hammeranie 0.25s 1";
                    }, 25);


                    window.setTimeout(function () {
                        document.getElementById("m1911pistolgr").getElementsByClassName("shell")[0].style.animation = "cartridge 0.5s 1";
                    }, 140);
                    //슬라이드가 완전히 뒤로 후퇴했을때는 loadinground 애니메이션의 정확히 중간이니까 0.25초동안 슬라이드가 움직인다고 했고,슬라이드 장전 모션은 뒤로 25밀리초부터 시작하니까 0.25초의 반이 125밀리초이므로 정확하겐 150을 써놓아야 하지만,탄피가 약간 늦으므로 10밀리초 땡겨서 140밀리초에 작동.
                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.display = "none";
                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.animation = "";
                    }, 150);
                    //얘는 정확히 125+25해서 150밀리초에 끝나야함.

                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "";

                        document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "";
                                        document.getElementById("m1911pistolgr").getElementsByClassName("shell")[0].style.animation = "";
                                        shootinggamegame.firing();
                                        shootinggamegame.inloadingtomagazine=false;
                                    }, 625);
                                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weapon.focus();

                                } else {
                                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weapon.blur();
                                    var reloadingrounds = confirm(`${shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].infos.koreanname}의 ${shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].infos.rounds}발탄창 안에 든 총알을 다 썼습니다. 재장전하시겠습니까?`);
                                    if (reloadingrounds == true) {
                                        shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weaponloading(function (param1) { param1.rounds = 7; });

                                    }
                                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weapon.blur();
                                }
                            }
                        },
            weaponloading(callback){
                this.inloadingtomagazine=true;
                window.setTimeout(function(){
                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weaponparts.magazine.style.animation="loadingtomagazine 0.95s 1";
                },50);
                window.setTimeout(function(){
                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weaponparts.magazine.src="./files/img/guns/_m1911/m1911_magazine_loaded.png";
                },400);
                window.setTimeout(function(){
                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weaponparts.magazine.style.animation="";
                },1500);
                window.setTimeout(function () {

                    document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "loadinground 0.5s 1";
                    document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "hammeranie 0.5s 1";
                }, 1525);
                window.setTimeout(function () {

                    document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "";

                    document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "";
                    callback(shootinggamegame);
                    shootinggamegame.inloadingtomagazine=false;
                }, 2125);
            },
                    },
                    _PPK: {
                        weapon: document.getElementById("m1911pistolgr"),
                        weaponparts: {
                            slide: document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0],
                            frame: document.getElementById("m1911pistolgr").getElementsByClassName("frame_1")[0],
                            hammer: document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0],
                            magazine:document.getElementById("m1911pistolgr").getElementsByClassName("magazine")[0],
                            muzzleflash: document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0],
                            cartridge: document.getElementById("m1911pistolgr").getElementsByClassName("shell")[0],
                            barrel: document.getElementById("m1911pistolgr").getElementsByClassName("frame_2")[0],
                        },
                        imgsrc() {
                            this.weaponparts.slide.src = `./files/img/guns/_PPK/slide.png`;
                            this.weaponparts.frame.src = `./files/img/guns/_PPK/frame.png`;
                            this.weaponparts.hammer.src = `./files/img/guns/_PPK/hammer.png`;
                            this.weaponparts.magazine.src = `./files/img/guns/_PPK/PPK_magazine_loaded.png`;
                            this.weaponparts.cartridge.src = `./files/img/guns/_PPK/32ACPcartridge.png`;
                            this.weapon.setAttribute("data-img-gun", "_PPK");
                        },
                        infos: {
                            name:"Walther PolizeiPistole Kurz",
                            koreanname: "발터 페페카(Walther PPK,발터 경찰용 권총 단축형)",
                            rounds: 7,
                        },
                        firingfunction() {
                            
            if (shootinggamegame.inloadingtomagazine==false){

                if (shootinggamegame.rounds > 0) {
                    shootinggamegame.rounds -= 1;
                    shootinggamegame.inloadingtomagazine=true;
                    if (shootinggamegame.rounds <= 0) {
                        shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weaponparts.magazine.src = "./files/img/guns/_PPK/PPK_magazine.png";
                    }
                    shootinggamegame.willshootinggamemove = false;
                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.animation = "_PPK_muzzleflash 0.1425s 1";
                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.display = "block";
                    }, 17.5);
                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "PPK_loadinganie 0.25s 1";
                        document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "_PPK_hammer 0.25s 1";
                    }, 25);


                    window.setTimeout(function () {
                        document.getElementById("m1911pistolgr").getElementsByClassName("shell")[0].style.animation = "_32ACPcartridge 0.5s 1";
                    }, 140);
                    //슬라이드가 완전히 뒤로 후퇴했을때는 loadinground 애니메이션의 정확히 중간이니까 0.25초동안 슬라이드가 움직인다고 했고,슬라이드 장전 모션은 뒤로 25밀리초부터 시작하니까 0.25초의 반이 125밀리초이므로 정확하겐 150을 써놓아야 하지만,탄피가 약간 늦으므로 10밀리초 땡겨서 140밀리초에 작동.
                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.display = "none";
                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.animation = "";
                    }, 150);
                    //얘는 정확히 125+25해서 150밀리초에 끝나야함.

                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "";

                        document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "";
                                        document.getElementById("m1911pistolgr").getElementsByClassName("shell")[0].style.animation = "";
                                        shootinggamegame.firing();
                                        shootinggamegame.inloadingtomagazine=false;
                                    }, 625);
                                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weapon.focus();

                                } else {
                                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weapon.blur();
                                    var reloadingrounds = confirm(`${shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].infos.koreanname}의 ${shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].infos.rounds}발탄창 안에 든 총알을 다 썼습니다. 재장전하시겠습니까?`);
                                    if (reloadingrounds == true) {
                                        shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weaponloading(function (param1) { param1.rounds = 7; });

                                    }
                                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weapon.blur();
                                }
                            }
                        },
            weaponloading(callback){
                this.inloadingtomagazine=true;
                window.setTimeout(function(){
                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weaponparts.magazine.style.animation="PPK_loadingtomagazine 0.95s 1";
                },50);
                window.setTimeout(function(){
                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weaponparts.magazine.src="./files/img/guns/_PPK/PPK_magazine_loaded.png";
                },475);
                window.setTimeout(function(){
                    shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weaponparts.magazine.style.animation="";
                },1000);
                window.setTimeout(function () {

                    document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "PPK_loadinganie 0.5s 1";
                    document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "_PPK_hammer 0.5s 1";
                }, 1525);
                window.setTimeout(function () {

                    document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "";

                    document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "";
                    callback(shootinggamegame);
                    shootinggamegame.inloadingtomagazine=false;
                }, 2125);
            },
                    },
                    onweaponchange(event) {
                        if (!event) {
                            shootinggamegame.weaponnamenow = "_PPK";
                        } else {
                            shootinggamegame.weaponnamenow = event.target.value;
                        }
                        shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].imgsrc();
                        shootinggamegame.roundsf();
                    },
                },
                
            },
            start(callback){
                if (this.willshootinggamemove == false){
                    this.willshootinggamemove = true;
                    document.getElementById("startBtn").innerHTML="게임 끝내기";
                } else {
                    this.willshootinggamemove=false;
                    
                    document.getElementById("startBtn").innerHTML="플레이하기";
                }
                if (this.gameoverv == false) {
                    this.gameoverv = true;
                } else {
                    this.gameoverv = false;
                }
                callback(this);
            },
            shootinggamemovepr(to,speed) {
                this.objects.shootinggame.style.top = (`calc(var(--displaywidth) * ${to.y * speed})`);
            },
            msgs:{
                yongjang:`<p><span style="font-size: 200%;">메롱 날 맞힐수 있냐 병☆신아 조까라 으하하하하</span><span>-목표물-</span></p>`,
                pok4:`<p><img src="./files/img/fuckedshootinggame.png" width="300" style="background:url('./files/img/pokpal.gif')"><br> <span style="font-size:250%;">목표물 총맞고 폭☆4</span></p>`,
            },
            shootinggamemove2(from, plus) {
                if (this.willshootinggamemove == true) {
                    if (from.x + plus.x < 0 || from.y + plus.y < 0) {
                        if (from.x + plus.x < 0 && from.y + plus.y >= 0) {

                            function myfunction(timestamp) { shootinggamegame.shootinggamemovepr({ x: 0, y: from.y + plus.y }) }
                            requestAnimationFrame(myfunction);
                        } else if (from.x + plus.x < 0 && from.y + plus.y < 0) {

                            function myfunction(timestamp) {  shootinggamegame.shootinggamemovepr({ x: 0, y: 0 }) }
                            requestAnimationFrame(myfunction);
                        } if (from.x + plus.x >= 0 && from.y + plus.y < 0) {

                            function myfunction(timestamp) {  shootinggamegame.shootinggamemovepr({ x: from.x + plus.x, y: 0 }) }
                            requestAnimationFrame(myfunction);
                        }
                    } if (from.x + plus.x > window.innerWidth || from.y + plus.y > window.innerHeight) {
                        if (from.x + plus.x > window.innerWidth && from.y + plus.y <= window.innerHeight) {

                            function myfunction(timestamp) { shootinggamegame.shootinggamemovepr({ x: 0, y: from.y + plus.y }) };

                            requestAnimationFrame(myfunction);
                        } else if (from.x + plus.x > window.innerWidth && from.y + plus.y > window.innerHeight) {

                            function myfunction(timestamp) {shootinggamegame.shootinggamemovepr({ x: 0, y: 0 }) };
                            requestAnimationFrame(myfunction);
                        } if (from.x + plus.x <= window.innerWidth && from.y + plus.y > window.innerHeight) {

                            function myfunction(timestamp) {  shootinggamegame.shootinggamemovepr({ x: from.x + plus.x, y: 0 }) }
                            requestAnimationFrame(myfunction);
                        }
                    } else {
                        function myfunction(timestamp) {  shootinggamegame.shootinggamemovepr({ x: from.x + plus.x, y: from.x + plus.y }) };
                        requestAnimationFrame(myfunction);
                    }
                    return true;
                } else {
                    return false;
                }
            },
            panghyang:-1,
            numbers:{
                x:0,
                y:0,
            },
            returnposnumber(timestamp,xy){
                this.numbers.x+=this.panghyang;
                this.numbers.y+=this.panghyang;
                return { x: (xy.x + this.panghyang-20), y:(xy.y + this.panghyang-20) };
            },
            levels:{
                0:{
                    levelname:"난이도0",
                    desc:`속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 10분의1만큼 바뀌는 속도로, 매우 느림. 이 난이도는 정말정말 쉽게 깰수 있다.`,
                    speed: 1 / 10,
                },
                1:{
                    levelname: "난이도1",
                    desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 8분의1만큼 바뀌는 속도로, 느림. 이 난이도는 정말 쉽게 깰수 있다.`,
                    speed: 1 / 8,
                },
                2:{
                    levelname: "난이도2",
                    desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 5분의1만큼 바뀌는 속도로,약간 느림.  이 난이도는 꽤 쉽게 깰수 있다.`,
                    speed: 1 / 5,
                },
                3:{
                    levelname: "난이도3",
                    desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 4분의1만큼 바뀌는 속도로, 보통. 이 난이도는 대충 쉽게 깰수 있을것이다.`,
                    speed:1 / 4,
                },
                4:{
                    levelname: "난이도4",
                    desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 2분의1만큼 바뀌는 속도로, 약간 빠름. 이 난이도는 그래도 깨는데 아무리 늦어도 2분이상의 노력이 필요하지 않을것이다..`,
                    speed:1 / 2,
                },
                5:{
                    levelname: "난이도5",
                    desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값만큼 바뀌는 속도로, 빠름. 아주 어렵다. 이 난이도는 힘들게 깰수 있다.`,
                    speed:1,
                },
                6:{
                    levelname: "난이도 목표물이 우사인볼트가 된 난이도",
                    desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 2배만큼 바뀌는 속도로, 매우 빠름. 이 난이도까지 깨고 누구나 만렙을 달성할수 있다는건 보장 못하지만,우사인볼트의 속도를 체감할수 있다는건 믿을수 있게 보장한다.`,
                    speed:2,
                }
            },
            levelnow:0,
            timeslll:0,
            shootinggamemove(from, plus) {
                    function myfunction(timestamp){
                        if (shootinggamegame.willshootinggamemove) {
                            
                        if (Math.floor(shootinggamegame.timeslll) % 120 == 0) {
                            shootinggamegame.panghyang = 1;
                        }
                        if (Math.floor(shootinggamegame.timeslll) % 120 == 60) {
                            shootinggamegame.panghyang = -1;
                        }
                        shootinggamegame.shootinggamemovepr(shootinggamegame.returnposnumber(timestamp,{x:shootinggamegame.numbers.x,y:shootinggamegame.numbers.y}), shootinggamegame.levels[shootinggamegame.levelnow].speed);
                            requestAnimationFrame(myfunction);
                        }
                        shootinggamegame.timeslll+=1;
                    }
                    requestAnimationFrame(myfunction);
                
            },
            weaponnamenow:`_m1911`,
            roundsf() {
                this.rounds = this.objects.weapons[this.weaponnamenow].infos.rounds;
                return this.objects.weapons[this.weaponnamenow].infos.rounds;
            },
            rounds:0,
            play() {
                shootinggamegame.shootinggamemove({ x: this.objects.shootinggame.style.left.replace(/calc\(var\(--displaywidth\) \* (.*)\)/gi, Number((/$1/ + "").replace(`/`, ``).replace(`/`, ``))), y: this.objects.shootinggame.style.top.replace(/calc\(var\(--displaywidth\) \* (.*)\)/gi, Number((/$1/ + "").replace(`/`, ``).replace(`/`, ``))), }, { x: 5, y: 5 });
            },
            kutkonpok4(param1){
                this.alimchang(this.msgs["pok4"] + param1);
            },
            alimchang(msg){
                document.getElementsByClassName("gameovermodalbg")[0].style.display="block";
                document.getElementById("yongjang").innerHTML = msg;
            },
            gameoverv:true,
            firing(){
                if (this.gameoverv == false){
                        
                        if (this.objects.weapons[this.weaponnamenow].weapon.offsetTop >= (this.objects.shootinggame.offsetTop) && (this.objects.shootinggame.offsetTop + (this.objects.shootinggame.offsetHeight)) >= (this.objects.weapons[this.weaponnamenow].weapon.offsetTop+(this.objects.weapons[this.weaponnamenow].weapon.offsetHeight))) {
                            console.log(this.objects.shootinggame.offsetTop);
                            shootinggamegame.objects.shootinggame.src = `./files/img/fuckedshootinggame.png`
                            shootinggamegame.objects.shootinggame.style.backgroundImage = `url('./files/img/pokpal.gif')`;
                            this.gameover(true);
                            if (this.levelnow < 6)this.levelnow+=1;
                            document.getElementById("leveldiv").innerHTML = shootinggamegame.levels[shootinggamegame.levelnow].levelname;
                            document.getElementById("leveldescdiv").innerHTML = shootinggamegame.levels[shootinggamegame.levelnow].desc;
                        } else {
                            var next000 = (this.levelnow < 6) ? ` onclick="document.getElementById('startBtn').click();document.getElementById('closemodal').click()"` : ``;
                            this.alimchang(this.msgs["yongjang"] + "잘못맞혔네? 입대야!!! 하하하"+ `<p class="gameover"><span>You lost...</span><br><span ${next000}>play again | your level:${this.levels[this.levelnow].levelname}</span></p>`);
                            this.gameover(false);
                        }
                        document.getElementById("startBtn").innerHTML="게임 시작하기";

                    }
                
                
                
            },
            gameover(isitthatyouwon){
                if (!isitthatyouwon){}
                else {
                    if(isitthatyouwon ==true){
                        var gameovertext = (this.levelnow < 6)?"NEXT":"GAME OVER";
                        var next000 = (this.levelnow<6)?` onclick="document.getElementById('startBtn').click();document.getElementById('closemodal').click()"`:``;
                        this.kutkonpok4(`<p class="gameover"><span>You won!!! | your level:${this.levels[this.levelnow].levelname}</span><br><span ${next000}>${gameovertext}</span></p>`);
                    } else {
                    }
                    
                    document.getElementsByClassName("gameovermodalbg")[0].style.display = "block";
                    
                }
                this.gameoverv=true;
            },
            inloadingtomagazine:false,

        }
        $("closingmodal").click(function(e){
            $("#yongjang").html("");
        });
        function selectanel(el){
            
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(el);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        document.getElementById("m1911pistolgr").onclick = function(e){
            shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].firingfunction();
        }
        
        window.addEventListener("resize",function(e){
            document.querySelector(':root').style.setProperty("--displaywidth", window.innerWidth / 10 * 0.75 + "px");
        });
        window.addEventListener("load",function(e){
            document.querySelector(':root').style.setProperty("--displaywidth", window.innerWidth / 10 * 0.75 + "px");
            document.getElementById("leveldiv").innerHTML=shootinggamegame.levels[shootinggamegame.levelnow].levelname;
            document.getElementById("leveldescdiv").innerHTML = shootinggamegame.levels[shootinggamegame.levelnow].desc;
            shootinggamegame.objects.weapons.onweaponchange();
        });
        shootinggamegame.objects.weapons[shootinggamegame.weaponnamenow].weapon.addEventListener("focus", function(e0){
            document.activeElement.addEventListener("keyup", function (e) {
                if (e.keyCode == 13 || e.keyCode == 32) {
                    e.target.click();
                }
            });
        });
        shootinggamegame.objects.weaponselect.addEventListener("change", function (e) {
            shootinggamegame.objects.weapons.onweaponchange(e);
        });