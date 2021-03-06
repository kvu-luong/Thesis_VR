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
    //Change Background with thumbnail image
    var thumb_gate = document.getElementById("thumb-gate");
    var thumb_inside_gate = document.getElementById("thumb-inside_gate");
    var thumb_step_inside_gate = document.getElementById("thumb-step_inside_gate");
    var thumb_intersection = document.getElementById("thumb-intersection");
    var thumb_first_case = document.getElementById("thumb-first_case");
    var thumb_butterfly = document.getElementById("thumb-butterfly");
    var background = document.getElementById("bg"); //sky tag

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

        lion_image.setAttribute('visible', 'true');
        deer_image.setAttribute('visible', 'true');
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
        first_case.setAttribute('position', '-6 0 8'); //update
        first_case.setAttribute('rotation', '0 190 0');
        step_inside_gate.setAttribute('visible', 'true'); //need new position
        step_inside_gate.setAttribute('position', '6 -1 -1');
        step_inside_gate.setAttribute('rotation', '180 0 180');

        butterfly.setAttribute('visible', 'false');
        inside_gate.setAttribute('visible', 'false');
        deer2.setAttribute('visible', 'false');
        deer1.setAttribute('visible', 'false');
    });
    thumb_first_case.addEventListener("click", function () {
        background.setAttribute("src", "#first_case");
        intersection.setAttribute('visible', 'true'); //update new position for intersection
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
    //full screen
    var full = document.getElementById("b-full");
    if (full) {
        full.addEventListener("click", function () {
            var el = document.body;
            toggleFullScreen(el);
        });
    }

    function toggleFullScreen(el) {
        if (document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
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
    window.addEventListener("keydown", function (event) {
        checkKeyPress(event);
    });
    function checkKeyPress(event) {
        var key = event.keyCode;
        if (key == "37" || key == "65") { //left
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
        if (key == "39" || key == "68") { //right
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
        if (key == "38" || key == "87") { //up
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
        if (key == "40" || key == "83") { //downa
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

    //map
    //1. lion
    let de1 = document.getElementById("deer1");
    let de2 = document.getElementById("deer2");
    $("#lionA").click(function () {
        console.log("change lion image");
        let background = document.getElementById("bg"); //sky tag
        background.setAttribute("src", "img/zoo/lion.jpg");
        de1.setAttribute("visible", "false");
        de2.setAttribute("visible", "false");
    });
    //2.deer
    $("#deerA").click(function () {
        console.log("change deer iamge");
        let background = document.getElementById("bg"); //sky tag
        background.setAttribute("src", "img/zoo/deer.jpg");
        de1.setAttribute("visible", "false");
        de2.setAttribute("visible", "false");
    });


    //Add new animal

    function add_Animal(link, material, position, rotation, id) {
        var s = document.querySelector("a-scene");
        var animalContain = document.createElement("a-entity");
        var animal = document.createElement("a-obj-model");
        animalContain.setAttribute("position", {
            x: position.x,
            y: position.y,
            z: position.z,
        });

        animal.setAttribute("src", "obj/" + link);
        animal.setAttribute("mtl", "obj/" + material);
        animal.setAttribute("click-drag", "");
        animal.setAttribute("position", {
            x: position.x,
            y: position.y,
            z: 1
        });
        animal.setAttribute("rotation", {
            x: rotation.x,
            y: rotation.y,
            z: rotation.z
        });
        animal.setAttribute("scale", "0.2 0.2 0.2");
        animal.setAttribute("id", id);
        animal.setAttribute("checked", "off");
        animal.appendChild(scale_animal_mouse_action("mouseenter", "0.2 0.2 0.2"));
        animal.appendChild(scale_animal_mouse_action("mouseleave", "0.1 0.1 0.1"));
        animal.appendChild(rotation_animal_mouseleave());
        animalContain.appendChild(animal);
        s.appendChild(animalContain);
    }


    $("#add_new_3d").on("click", function(el){
        console.log("add new");
        $("#file-input").trigger("click");

            var link_object = "";
            var object_material = "";
            //after select file
            $("#file-input").on('change',function(e){
                var link_of_object = $("#file-input").val();
                let id = "";
                if(link_of_object != ""){//prevent empty input
                    console.log(link_of_object);
                    var files = e.target.files;

                    for(var i=0; i<files.length; i++) {
                        var f = files[i];

                        if(f.name.split(".")[1] === "obj"){
                            link_object = f.name;
                        }else if(f.name.split(".")[1] === "mtl"){
                            object_material = f.name;
                        }else{
                            alert("You should select files: obj or mtl");
                        }  
                    }
                    id = f.name.split(".")[0];
                    $("#file-input").val("");
                }
                let position = {
                    x: -2,
                    y: -0.5,
                    z: -2
                }
                let rotation = {
                    x: 0,
                    y: 70,
                    z: 0
                }
                console.log(link_object+"-"+object_material+"-"+id);
                add_Animal(link_object, object_material, position, rotation, id);
            });        
    });

    $("#add_lion_3d").on("click", function () {
        let obj_link = "lion.obj";
        let mtl_link = "lion.mtl";
        let position = {
            x: -2,
            y: -0.5,
            z: -2
        }
        let rotation = {
            x: 0,
            y: 70,
            z: 0
        }
        let id = "lion"
        add_Animal(obj_link, mtl_link, position, rotation, id);
    });
    $("#add_deer_3d").on("click", function () {
        let obj_link = "deer.obj";
        let mtl_link = "deer.mtl";
        let position = {
            x: -2,
            y: -0.5,
            z: -2
        }
        let rotation = {
            x: 0,
            y: 70,
            z: 0
        }
        let id = "deer_no1";
        add_Animal(obj_link, mtl_link, position, rotation, id);
    });

    $("#add_elephant_3d").on("click", function () {
        let obj_link = "elephant.obj";
        let mtl_link = "elephant.mtl";
        let position = {
            x: -2,
            y: -0.5,
            z: -2
        }
        let rotation = {
            x: 0,
            y: 70,
            z: 0
        }
        let id = "elephant_no1";
        add_Animal(obj_link, mtl_link, position, rotation, id);
    });

    $("#add_hippo_3d").on("click", function () {
        let obj_link = "hippo.obj";
        let mtl_link = "hippo.mtl";
        let position = {
            x: -2,
            y: -0.5,
            z: -2
        }
        let rotation = {
            x: 0,
            y: 70,
            z: 0
        }
        let id = "hippo_no1";
        add_Animal(obj_link, mtl_link, position, rotation, id);
    });

    $("#add_giraffe_3d").on("click", function () {
        let obj_link = "Giraffe.obj";
        let mtl_link = "Giraffe.mtl";
        let position = {
            x: -2,
            y: -0.5,
            z: -2
        }
        let rotation = {
            x: 0,
            y: 70,
            z: 0
        }
        let id = "giraffe_no1";
        add_Animal(obj_link, mtl_link, position, rotation, id);
    });

    function scale_animal_mouse_action(mouse_action, value) {
        let animation_tag = document.createElement("a-animation");
        animation_tag.setAttribute("attribute", "scale");
        animation_tag.setAttribute("begin", mouse_action);
        animation_tag.setAttribute("to", value);
        return animation_tag;
    }

    function rotation_animal_mouseleave() {
        let animation_tag = document.createElement("a-animation");
        animation_tag.setAttribute("attribute", "rotation");
        animation_tag.setAttribute("begin", "click");
        animation_tag.setAttribute("to", "0 360 0");
        animation_tag.setAttribute("dur", 1000);
        animation_tag.setAttribute("direction", "alternate-reverse");
        return animation_tag;
    }
    //remove animal 2D image
    $("#deer_img_display").on("click", function () {
        console.log("hello world removing deer");
        var deer_image = document.getElementById("deer_img_display");
        deer_image.parentNode.removeChild(deer_image);
        console.log("remove deer image success");
    });
    $("#lion_img_display").on("click", function () {
        var lion_image = document.getElementById("lion_img_display");
        lion_image.parentNode.removeChild(lion_image);
        console.log("remove lion image success");
    });



    //add animal menu
    $("#action_menu").hide();
    $("#add_animal_btn").on("click", function () {
        $("#action_menu").toggle();
    });

    //play and pause background music
    var play = document.getElementById('music_play');
    var pause = document.getElementById('music_pause');
    var music = document.querySelector('#nhac');
    play.addEventListener('click', function () {
        music.components.sound.playSound();
        $("#music_play").css({
            "z-index": 0,
            "display": "none"
        });
        $("#music_pause").css({
            "z-index": 1,
            "display": "unset"
        });
    }, false);
    pause.addEventListener('click', function () {
        console.log("hello brother");
        music.components.sound.stopSound();
        $("#music_play").css({
            "z-index": 1,
            "display": "unset"
        });
        $("#music_pause").css({
            "z-index": 0,
            "display": "none"
        });
    }, false);


      //paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
});