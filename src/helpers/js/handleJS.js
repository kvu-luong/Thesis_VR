$(document).ready(function () {
//show sidebar
    var menu_thumbnail = document.getElementById("thumbnail_image");
    var menuBtn = document.getElementById("b1");
    menuBtn.addEventListener("click", function () {
        console.log("menu thumbnail click");
        if (menu_thumbnail.style.visibility == "unset") {
            menu_thumbnail.style.visibility = "hidden";
            menu_thumbnail.style.transform = "translateY(-300px)";
            menu_thumbnail.style.opacity = "0";
        } else {
            menu_thumbnail.style.visibility = "unset";
            menu_thumbnail.style.transform = "translateY(0px)";
            menu_thumbnail.style.opacity = "1";
        }

    });

//end show sidebar
//Change Background 
    var thumb_gate = document.getElementById("thumb-gate");
    var thumb_inside_gate = document.getElementById("thumb-inside_gate");
    var thumb_step_inside_gate = document.getElementById("thumb-step_inside_gate");
    var thumb_intersection = document.getElementById("thumb-intersection");
    var thumb_first_case = document.getElementById("thumb-first_case");
    var thumb_butterfly = document.getElementById("thumb-butterfly");
    var background = document.getElementById("bg");//sky tag

    //set positon of hotpot
    var deer1 = document.querySelector("#deer1");
    var deer2 = document.querySelector("#deer2");
    var gate = document.querySelector("#gatebtn");
    var inside_gate = document.querySelector("#inside_gatebtn");
    var step_inside_gate = document.querySelector("#step_inside_gatebtn");
    var intersection = document.querySelector("#intersectionbtn");
    var first_case = document.querySelector("#first_casebtn");
    var butterfly = document.querySelector("#butterflybtn");
    thumb_gate.addEventListener("click", function () {
        background.setAttribute("src", "#gate");

        inside_gate.setAttribute('visible', 'true');
        inside_gate.setAttribute('position', '-4 -1 -1');
        inside_gate.setAttribute('rotation', '0 -7 2');
        step_inside_gate.setAttribute('visible', 'false');
        deer2.setAttribute('visible', 'false');
        deer1.setAttribute('visible', 'false');
    });
    thumb_inside_gate.addEventListener("click", function () {
        background.setAttribute("src", "#inside_gate");
        inside_gate.setAttribute('visible', 'false');
        gate.setAttribute('visible', 'true');
        step_inside_gate.setAttribute('visible', 'true');
        step_inside_gate.setAttribute('position', '-11 0 -6');
        step_inside_gate.setAttribute('rotation', '180 0 180');
        intersection.setAttribute('visible', 'false');
        deer2.setAttribute('visible', 'true');
        deer1.setAttribute('visible', 'true');
    });
    thumb_step_inside_gate.addEventListener("click", function () {
        background.setAttribute("src", "#step_inside_gate");
        inside_gate.setAttribute('visible', 'true');
        inside_gate.setAttribute('position', '7 -1 -1');
        inside_gate.setAttribute('rotation', '0 180 0');
        intersection.setAttribute('visible', 'true');
        intersection.setAttribute('position', '-6 0 0');
        intersection.setAttribute('rotation', '0 14 0');

        gate.setAttribute('visible', 'false');
        first_case.setAttribute('visible', 'false');
        deer2.setAttribute('visible', 'false');
        deer1.setAttribute('visible', 'false');
    });
    thumb_intersection.addEventListener("click", function () {
        background.setAttribute("src", "#intersection");
        first_case.setAttribute('visible', 'true');
        first_case.setAttribute('position', '-6 0 8');//update
        first_case.setAttribute('rotation', '0 190 0');
        step_inside_gate.setAttribute('visible', 'true');//need new position
        step_inside_gate.setAttribute('position', '6 -1 -1');
        step_inside_gate.setAttribute('rotation', '180 0 180');

        butterfly.setAttribute('visible', 'false');
        inside_gate.setAttribute('visible', 'false');
        deer2.setAttribute('visible', 'false');
        deer1.setAttribute('visible', 'false');
    });
    thumb_first_case.addEventListener("click", function () {
        background.setAttribute("src", "#first_case");
        intersection.setAttribute('visible', 'true');//update new position for intersection
        intersection.setAttribute('position', '0 -1 6');
        intersection.setAttribute('rotation', '0 100 0');
        butterfly.setAttribute('visible', 'true');

        step_inside_gate.setAttribute('visible', 'false');
        deer2.setAttribute('visible', 'false');
        deer1.setAttribute('visible', 'false');
    });
    thumb_butterfly.addEventListener("click", function () {
        console.log("click on butterfly image thumbnail");
        background.setAttribute("src", "#butterfly");
        intersection.setAttribute('visible', 'false');
        inside_gate.setAttribute('visible', 'false');
        deer2.setAttribute('visible', 'false');
        deer1.setAttribute('visible', 'false');
    });
//End change Background
//Change background use green arrow






//full screen
    var full = document.getElementById("b-full");
    if (full) {
        full.addEventListener("click", function () {
            var el = document.body;
            toggleFullScreen(el);
        });
    }
    function toggleFullScreen(el) {
        if (document.fullscreenElement || document.mozFullScreenElement
                || document.webkitFullscreenElement ||
                document.msFullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCanceFullScreen();
            } else if (document.webkitExitFullscreen()) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            if (document.documentElement.requestFullscreen) {
                el.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                el.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                el.webkitRequestFullScreen();
            } else if (document.documentElement.msRequestFullscreen) {
                el.msRequestFullscreen();
            }
        }
    }
//end full screen function
//key control
    var x = 0;
    var y = 90;
    var Zin = 1;
    let de1check = deer1.getAttribute("checked");
    let de2check = deer2.getAttribute("checked");


    window.addEventListener("keydown", function () {
        checkKeyPress();
        if (de1check == "on") {
            console.log(de1check + "in if deer1");
            window.addEventListener("keydown", function () {
                HandleRotate(deer1);
            }, false);
        } else if (de2check == "on") {
            console.log(de1check + "in if deer2");
            window.addEventListener("keydown", function () {
                HandleRotate(deer2);
            }, false);
        }

        console.log("check KeyPress at move right and move left");
    }, false);//keydown: press and hold//keyup: press don't hold//
    function checkKeyPress() {
        var key = event.keyCode;
        if (key == "37" || key == "65") {//left
            console.log("The'left' key ");
            y = y + 5;
            console.log('click y', y);
            console.log('click x', x);
            var moveLeft = document.getElementById("camera");
            moveLeft.setAttribute('rotation', {
                x: x,
                y: y,
                z: 0
            });
        }
        if (key == "39" || key == "68") {//right
            console.log("The'right' key ");
            y = y - 5;
            console.log('click y', y);
            console.log('click x', x);
            var moveRight = document.getElementById("camera");
            moveRight.setAttribute('rotation', {
                x: x,
                y: y,
                z: 0
            });
        }
        if (key == "38" || key == "87") {//up
            console.log("The'up' key ");
            x = x + 5;
            console.log('click y', y);
            console.log('click x', x);
            var moveUp = document.getElementById("camera");
            if (x >= 90) {
                x = 90;
                moveUp.setAttribute('rotation', {
                    x: 90,
                    y: y,
                    z: 0
                });
            } else {
                moveUp.setAttribute('rotation', {
                    x: x,
                    y: y,
                    z: 0
                });
            }
        }
        if (key == "40" || key == "83") {//downa
            console.log("The'up' key ");
            x = x - 5;
            console.log('click y', y);
            console.log('click x', x);
            var moveDown = document.getElementById("camera");
            if (x <= -90) {
                x = -90;
                moveDown.setAttribute('rotation', {
                    x: -90,
                    y: y,
                    z: 0
                });
            } else {
                moveDown.setAttribute('rotation', {
                    x: x,
                    y: y,
                    z: 0
                });
            }
        }

    }
//end key control
//star move left, right, up, down
    moveAround(x, y);
    function moveAround(x, y) {
        //start left
        var left = document.getElementById("b-left");
        if (left) {
            left.addEventListener("click", function () {
                y = y + 5;
                console.log('click y', y);
                console.log('click x', x);
                //var moveLeft = document.querySelector('a-sky');
                var moveLeft = document.getElementById("camera");
                moveLeft.setAttribute('rotation', {
                    x: x,
                    y: y,
                    z: 0
                });
            });
        }
        //start right
        var right = document.getElementById("b-right");
        if (right) {
            right.addEventListener("click", function () {
                y = y - 5;
                console.log('click y', y);
                console.log('click x', x);
                var moveRight = document.getElementById("camera");
                moveRight.setAttribute('rotation', {
                    x: x,
                    y: y,
                    z: 0
                });
            });
        }
        //start up
        var up = document.getElementById("b-up");
        if (up) {
            up.addEventListener("click", function () {
                x = x + 5;
                console.log('click y', y);
                console.log('click x', x);
                var moveRight = document.getElementById("camera");
                if (x >= 90) {
                    moveRight.setAttribute('rotation', {
                        x: 90,
                        y: y,
                        z: 0
                    });
                } else {
                    moveRight.setAttribute('rotation', {
                        x: x,
                        y: y,
                        z: 0
                    });
                }
            });
        }
        var down = document.getElementById("b-down");
        if (down) {
            down.addEventListener("click", function () {
                x = x - 5;
                console.log('click y', y);
                console.log('click x', x);
                var moveRight = document.getElementById("camera");
                if (x <= -90) {
                    moveRight.setAttribute('rotation', {
                        x: -90,
                        y: y,
                        z: 0,
                    });
                } else {
                    moveRight.setAttribute('rotation', {
                        x: x,
                        y: y,
                        z: 0
                    });
                }
            });
        }
        //inital
        var inital = document.getElementById("b-initial");
        if (inital) {
            inital.addEventListener("click", function () {
                x = 0;
                y = 0;
                var sky = document.getElementById("camera");
                sky.setAttribute('rotation', {
                    x: 0,
                    y: 90,
                    z: 0
                });
                var camera = document.getElementById('camera');
                camera.setAttribute('camera', {
                    zoom: 1,
                });
                Zin = 1;
            });
        }

    }

    //end move around
    //start zoomu

    function zoom(Zin) {
        var zoomP = document.getElementById("b-plus");
        if (zoomP) {
            zoomP.addEventListener("click", function () {
                console.log("zoom", Zin);
                var camera = document.getElementById('camera');
                Zin = Zin + 0.1;
                camera.setAttribute('camera', {
                    zoom: Zin,
                });
            });
        }
        var zoomM = document.getElementById("b-minus");
        if (zoomM) {
            zoomM.addEventListener("click", function () {
                console.log("zoom", Zin);
                var camera = document.getElementById('camera');
                Zin = Zin - 0.1;
                if (Zin == 1 || Zin < 1) {
                    Zin = 1;
                    camera.setAttribute('camera', {
                        zoom: 1,
                    });
                } else {
                    camera.setAttribute('camera', {
                        zoom: Zin,
                    });
                }


            });
        }
    }
    zoom(Zin);
    //end zoom
    //select object using keydown
    deer1.addEventListener('click', function () {
        deer1.setAttribute('checked', 'on');
        deer2.setAttribute('checked', 'on');
        console.log(deer1.getAttribute('checked'));
    }, false);
    deer2.addEventListener('click', function () {
        deer2.setAttribute('checked', 'on');
        deer1.setAttribute('checked', 'off');
        console.log(deer2.getAttribute('checked'));

    }, false);
    let x1 = 0;
    let y1 = 0;

    window.addEventListener("keydown", function () {
        if (deer1.getAttribute("checked") === "on") {
            HandleRotate(deer1);
        } else if (deer2.getAttribute("checked") === "on") {
            HandleRotate(deer2);
        }
    }, false);
    function HandleRotate(myObjectHanle) {
        let key1 = event.keyCode;
        if (key1 == "75" && myObjectHanle.getAttribute("checked") === "on") {//k down
            y1 = y1 - 0.1;
            if (y1 >= 0) {
                myObjectHanle.setAttribute('position', {
                    x: x1,
                    y: y1,
                    z: 0
                });
            } else {
                y1 = 0;
                myObjectHanle.setAttribute('position', {
                    x: x1,
                    y: 0,
                    z: 0
                });
            }
        } else if (key1 == "73" && myObjectHanle.getAttribute("checked") === "on") {//i up
            y1 = y1 + 0.1;
            myObjectHanle.setAttribute('position', {
                x: x1,
                y: y1,
                z: 0
            });
        } else if (key1 == "76" && myObjectHanle.getAttribute("checked") === "on") {//l right
            x1 = x1 + 0.1;
            myObjectHanle.setAttribute('position', {
                x: x1,
                y: y1,
                z: 0
            });
        } else if (key1 == "74" && myObjectHanle.getAttribute("checked") === "on") {//j left
            x1 = x1 - 0.1;
            myObjectHanle.setAttribute('position', {
                x: x1,
                y: y1,
                z: 0
            });
        }
    }
    ;
//end rotationObject

//map
//1. lion
let de1 = document.getElementById("deer1");
let de2 = document.getElementById("deer2");
$("#lionA").click(function(){
    console.log("change lion image");
    let background = document.getElementById("bg");//sky tag
    background.setAttribute("src","img/zoo/lion.jpg");
    de1.setAttribute("visible","false");
    de2.setAttribute("visible", "false");
});
//2.deer
$("#deerA").click(function(){
    console.log("change deer iamge");
    let background = document.getElementById("bg");//sky tag
    background.setAttribute("src","img/zoo/deer.jpg");
    de1.setAttribute("visible","false");
    de2.setAttribute("visible", "false");
});


//Add new animal
$("body").on("dblclick", function(){
    alert("hello anh em double click");4
});
$("body").on("mousemove",function(){
    console.log("anh em ta la mot gia dinh");
})

});
