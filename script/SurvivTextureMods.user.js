// ==UserScript==
// @name         A Custom Texture Mod
// @namespace    https://ytiridium77.github.io/
// @version      2.6
// @description  A small decoration features for surviv.io
// @author       VN BPM on YouTube
// @match        *://surviv.io/*
// @match        *://surviv2.io/*
// @match        *://2dbattleroyale.com/*
// @match        *://2dbattleroyale.org/*
// @match        *://piearesquared.info/*
// @match        *://thecircleisclosing.com/*
// @match        *://parmainitiative.com/*
// @match        *://ot38.club/*
// @match        *://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/*
// @match        *://*.c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/*
// @match        *://twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/*
// @match        *://*.twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/*
// @match        https://www.twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/panel
// @grant        GM_xmlHttpRequest
// ==/UserScript==


(function(){
    'use strict';

    var startoverlay = document.getElementById("start-overlay");
var startrowheader = document.getElementById("start-row-header");

startoverlay.style.backgroundImage = "url('https://static-cdn.jtvnw.net/jtv_user_pictures/67c7a3e6-1b7c-4bd3-97c5-953307470f70-profile_image-300x300.png')";
startoverlay.style.backgroundColor = "black";

startrowheader.style.backgroundImage = "url('')";

var loop = setInterval(function(){
    if(document.getElementsByClassName('ui-stats-table-content').size <= 2){
       var stats = document.getElementsByClassName('ui-stats-table-row ui-stats-current')[0];
	   var clone = stats.cloneNode(true);
			var ui = document.getElementsByClassName('ui-stats-table-content')[0];
			ui.parentNode.insertBefore(clone, ui);
    }
    }, 500);

    document.getElementById("start-bottom-middle").innerHTML = "<a href='https://discord.gg/J8kBwk9' target='_blank'>Made by Philipp</a><a href='https://www.youtube.com/channel/UCRJIEWtHtxwql2KuUchPc2A' target='_blank'>YTIridium77 Mod</a>";

    var o = document.createElement("a");
	o.setAttribute("id","my_Heart");
    o.style.fontSize = "25px";
	o.style.color = "#4287f5";
    o.style.display = "block";
    document.getElementById("ui-boost-counter").parentNode.appendChild(o);
    var reference = document.getElementById('ui-boost-counter');
    reference.parentNode.insertBefore(o, reference);

	setInterval(function(){
		o.innerHTML = "HP: " + Math.round(document.getElementById("ui-health-actual").style.width.slice(0, -1))
	}, 500);

    const getBoost = () => {
    let boostActualWidth = 0;

    let boosts = document.querySelectorAll(`.ui-boost-base .ui-bar-inner`);
    boosts.forEach((boost, i) => {
        if(i <= 1) boostActualWidth += parseInt(boost.style.width.slice(0, boost.style.width.length - 1)) / 4;
        else if(i == 2) boostActualWidth += parseInt(boost.style.width.slice(0, boost.style.width.length - 1)) / 2.5;
        else if(i == 3) boostActualWidth += parseInt(boost.style.width.slice(0, boost.style.width.length - 1)) / 10;
    });


    return Math.round(boostActualWidth);
}
    let boostCounter = document.querySelector(`#ui-boost-counter`);
    let botWrapper = document.createElement(`div`);
    botWrapper.id = `numWrapper`;
    document.querySelector(`#ui-bottom-center-0`).insertBefore(botWrapper, boostCounter);

const createElements = () => {
let adWrapper = document.createElement(`div`);
    adWrapper.classList.add(`box-container`);
    adWrapper.id = `btWrapper`;

    let adTxt = document.createElement(`span`);
    adTxt.style.fontSize = "25px";
	adTxt.style.color = "#4287f5";
    adTxt.style.display = "block";
    setInterval(() => (adTxt.innerHTML = `AD: ${getBoost()}`));
    adWrapper.appendChild(adTxt);
    botWrapper.appendChild(adWrapper);
}
createElements();

var elems = document.getElementsByClassName('ui-weapon-name')
    console.log(elems);
    for (var ii = 0; ii < elems.length; ii++) {
        elems[ii].addEventListener('DOMSubtreeModified', function() {
            var weaponName = this.textContent;
            var border = 'solid';
            var background = 'solid';
            switch (weaponName) {
                    // <---------- Default ----------> \\
                default:
                    border = '#FFFFFF';
                    border = 'solid';
                    background = '#5e5e5e';
                    background = '#5e5e5e';
                    break;
// <------------------------------MELEES------------------------------> \\
                case "Fists":
                    border += '#000000';
                    background += '#5e5e5e';
                    break;
                    // <-----Karmabit----->
                case "Karambit":
                    border +='#76787A';
                    background += '#5e5e5e';
                    break;
                case "Karambit Rugged":
                    border +='#16163B';
                    background += '#5e5e5e';
                    break;
                case "Karmabit Prismatic":
                    border +='#34D682';
                    background += '#5e5e5e';
                    break;
                case "Karmabit Drowned":
                    border +='#0CBCCC';
                    background += '#5e5e5e';
                    break;
                    // <-----Bayonet----->
                case "Bayonet":
                    border +='#76787A';
                    background += '#5e5e5e';
                    break;
                case "Bayonet Rugged":
                    border +='#76787A';
                    background += '#5e5e5e';
                    break;
                case "Bayonet Woodland":
                    border +='#5AA415';
                    background += '#5e5e5e';
                    break;
                    // <-----Huntsman----->
                case "Huntsman":
                    border +='#76787A';
                    background += '#5e5e5e';
                    break;
                case "Huntsman Rugged":
                    border +='#A0441E';
                    background += '#5e5e5e';
                    break;
                case "Huntsman Burnished":
                    border +='#DACF76';
                    background += '#5e5e5e';
                    break;
                    // <-----Bowie----->
                case "Bowie":
                    border +='#76787A';
                    background += '#5e5e5e';
                    break;
                case "Bowie Vintage":
                    border +='#B6B6B6';
                    background += '#5e5e5e';
                    break;
                case "Bowie Frontier":
                    border +='#BA4B2E';
                    background += '#5e5e5e';
                    break;
                    // <-----Axe----->
                case "Wood Axe":
                    border +='#95500E';
                    background += '#5e5e5e';
                    break;
                case "Blood Axe":
                    border +='#568A09';
                    background += '#5e5e5e';
                    break;
                case "Fire Axe":
                    border +='#B40000';
                    background += '#5e5e5e';
                    break;
                    // <-----Katana----->
                case "Katana":
                    border +='#858585';
                    background += '#5e5e5e';
                    break;
                case "Katana Rusted":
                    border +='#875F37';
                    background += '#5e5e5e';
                    break;
                case "Katana Orchid":
                    border +='#C189CB';
                    background += '#5e5e5e';
                    break;
                    // <-----Naginata----->
                case 'Naginata':
                    border += '#3C3C3C';
                    background += '#5e5e5e';
                    break;
                    // <-----Machetes----->
                case "Machete": //Machete Taiga
                    border +='#685F40';
                    background += '#5e5e5e';
                    break;
                case "Kukri": //Tallow's Kukri
                    border +='#685F40';
                    background += '#5e5e5e';
                    break;
                    // <-----Hammers----->
                case "Stone Hammer":
                    border +='#585A5C';
                    background += '#5e5e5e';
                    break;
                case "Sledgehammer":
                    border +='#585A5C';
                    background += '#5e5e5e';
                    break;
                    // <-----Hook----->
                case "Hook":
                    border +='#888A8B';
                    background += '#5e5e5e';
                    break;
                    // <-----Pan----->
                case "Pan":
                    border +='#484848';
                    background += '#5e5e5e';
                    break;
                    // <-----Knuckles----->
                case "Knuckles":
                    border +='#63452D';
                    background += '#5e5e5e';
                    break;
                case "Knuckles Rusted":
                    border +='#63452D';
                    background += '#5e5e5e';
                    break;
                case "Knuckles Heroic":
                    border +='#90700D';
                    background += '#5e5e5e';
                    break;
                    // <-----Saw----->
                case "Bonesaw": //Bonesaw Rusted
                    border += '#461904';
                    background += '#5e5e5e';
                    break;
                    // <-----Cobalt----->
                case "Spade": //Trench Spade
                    border +='#DACF59';
                    background += '#5e5e5e';
                    break;
                case "Crowbar": //Scouting Crowbar
                    border +='#ACD563';
                    background += '#5e5e5e';
                    break;
                case "Kukri": //Marksman's Recurve
                    border +='#8DCEDB';
                    background += '#5e5e5e';
                    break;
                case "Bonesaw": //The Separator
                    border +='#DC79DC';
                    background += '#5e5e5e';
                    break;
                case "Katana": //Hakai no Katana
                    border +='#C76A67';
                    background += '#5e5e5e';
                    break;
                case "War Hammer": //Panzerhammer
                    border +='#EAB963';
                    background += '#5e5e5e';
                    break;
                    // <===GUNS===>
                    // <---------- YELLOW: 9mm ----------> \\
                case 'CZ-3A1':
                case 'G18C':
                case 'M9':
                case 'M93R':
                case 'MAC-10':
                case 'MP5':
                case 'P30L':
                case 'Dual P30L':
                case 'UMP9':
                case 'Vector':
                case 'VSS':
                    border += '#FFAE00';
                    background += '#5e5e5e';
                    break;
                    // <---------- RED: 12 Gauge ----------> \\
                case 'M1100':
                case 'M870':
                case 'MP220':
                case 'Saiga-12':
                case 'SPAS-12':
                case 'Super 90':
                case 'USAS-12':
                    border += '#FF0000';
                    background += '#5e5e5e';
                    break;
                    // <---------- BLUE: 7.62 mm ----------> \\
                case 'AK-47':
                case 'AN-94':
                case 'BAR M1918':
                case 'BLR 81':
                case 'DP-28':
                case 'Groza':
                case 'Groza-S':
                case 'M1 Garand':
                case 'M39 EMR':
                case 'Mosin-Nagant':
                case 'OT-38':
                case 'OTs-38':
                case 'PKP Pecheneg':
                case 'SCAR-H':
                case 'SV-98':
                case 'SVD-63':
                    border += '#0066FF';
                    background += '#5e5e5e';
                    break;
                    // <---------- GREEN: 5.56mm ----------> \\
                case 'FAMAS':
                case 'L86A2':
                case 'M249':
                case 'M416':
                case 'M4A1-S':
                case 'Mk 12 SPR':
                case 'QBB-97':
                case 'Scout Elite':
                    border += '#039E00';
                    background += '#5e5e5e';
                    break;
                    // <---------- Purple: .45 ACP ----------> \\
                case 'M1911':
                case 'M1A1':
                case 'Mk45G':
                case 'Model 94':
                case 'Peacemaker':
                case 'Vector 45':
                    border += '#7900FF';
                    background += '#5e5e5e';
                    break;
                    // <---------- FLARE ----------> \\
                case 'Flare Gun':
                    border += '#D44600';
                    background += '#5e5e5e';
                    break;
                    // <---------- .50 AE ----------> \\
                case 'DEagle 50':
                    border += '#292929';
                    background += '#5e5e5e';
                    break;
                    // <---------- .308 Subsonic ----------> \\
                case 'AWM-S':
                case 'Mk 20 SSR':
                    border += '#465000';
                    background += '#5e5e5e';
                    break;
                    // <---------- Potato ----------> \\
                case 'Potato Cannon':
                case 'Spud Gun':
                    border += '#935924';
                    background += '#5e5e5e';
                    break;
                    // <---------- CURSED: 9 mm ----------> \\
                case 'M9 Cursed':
                    border += '#323232';
                    background += '#5e5e5e';
                    break;
                    // <---------- Bugle ----------> \\
                case 'Bugle':
                    border += '#F2BC21';
                    background += '#5e5e5e';
                    break;
                    // <---------- Trowables ----------> \\
                case 'Frag':
                    border += '#837516';
                    background += '#5e5e5e';
                    break;
                case 'MIRV':
                    border += '#940000';
                    background += '#5e5e5e';
                    break;
                case 'Potato':
                    border += '#958359';
                    background += '#5e5e5e';
                    break;
                case 'Smoke':
                    border += '#DDDDDD';
                    background += '#5e5e5e';
                    break;
                case 'Snowball':
                    border += '#74D4F8';
                    background += '#5e5e5e';
                    break;
                case 'Strobe':
                    border += '#FFF205';
                    background += '#5e5e5e';
                    break;
                case 'Iron Bomb':
                    border += '#00FF00';
                    background += '#5e5e5e';
                    break;
            }
            // <---------- GUN END ----------> \\
            console.log(border);
            this.parentNode.style.border = border;
        }, false);
    }


var el = document.createElement("p");
var el2 = document.getElementsByClassName("ui-team-member ui-bg-standard")[0];
el2.parentNode.appendChild(el);
el2.parentNode.insertBefore(el,el2);

const getPing = () => {

let ping = new Date;

    let request = new XMLHttpRequest();
    request.open(`GET`, window.location.href, true);

    request.onload = (() => {
        el.innerHTML = ` Ping: ${new Date - ping}`;
        setTimeout(getPing, 500);
    });
    request.send();
};

getPing();

//custom background

document.getElementById('modal-settings-body').innerHTML += '<h2>YTIridium77 Mod Menü</h2> <h2>Background Image</h2> <button class="backbutton">Iridium</button> <button class="backbutton">Tankalty YT</button> <button class="backbutton">GAMERIO</button> <button class="backbutton">Zmedo</button> <button class="backbutton">iWolf</button> <button class="backbutton">g0dak</button> <button class="backbutton">Jtrick</button> <button class="backbutton">JoLe</button>';


function Iridium() {
var startoverlay = document.getElementById("start-overlay"); startoverlay.style.backgroundImage = "url('https://static-cdn.jtvnw.net/jtv_user_pictures/67c7a3e6-1b7c-4bd3-97c5-953307470f70-profile_image-300x300.png')";
startoverlay.style.backgroundSize = "auto";
};
function Tankalty() {
    var startoverlay = document.getElementById("start-overlay"); startoverlay.style.backgroundImage = "url('https://cdn.discordapp.com/avatars/534413834455220224/670b7f91aaa4b54368cd6fafb54609c7.png?size=256')";
    startoverlay.style.backgroundSize = "auto";
};
function Gamerio() {
    var startoverlay = document.getElementById("start-overlay"); startoverlay.style.backgroundImage = "url('https://cdn.discordapp.com/avatars/527111830406037514/c43abb91cb654867b60edbc5f3ed99d3.png?size=256')";
    startoverlay.style.backgroundSize = "auto";
};
function Zmedo() {
    var startoverlay = document.getElementById("start-overlay"); startoverlay.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/749714154864246846/762309098557014066/-CC9A.jpeg')";
    startoverlay.style.backgroundSize = "auto";
};
function iWolf() {
    var startoverlay = document.getElementById("start-overlay"); startoverlay.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/749714154864246846/762309907344261150/image0.png')";
    startoverlay.style.backgroundSize = "100%";
    startoverlay.style.backgroundPositionY = "-175px";
};
function g0dak() {
    var startoverlay = document.getElementById("start-overlay"); startoverlay.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/749712706210234448/762630592479100958/image0.gif')";
    startoverlay.style.backgroundSize = "auto";
};
function Jtrick() {
    var startoverlay = document.getElementById("start-overlay"); startoverlay.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/727538758055886849/763789074611830834/Screenshot_20201008-174406_Google.jpg')";
    startoverlay.style.backgroundSize = "100%";
};
function JoLe() {
    var startoverlay = document.getElementById("start-overlay"); startoverlay.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/759861463690379344/764867341418627092/ServerIcon_Not_Animated.png')";
    startoverlay.style.backgroundSize = "auto";
};
function Colorchange(element){
    element.style.color = "white";
};

var backbutton = document.getElementsByClassName('backbutton');
backbutton[0].addEventListener("click", Iridium);
backbutton[1].addEventListener("click", Tankalty);
backbutton[2].addEventListener("click", Gamerio);
backbutton[3].addEventListener("click", Zmedo);
backbutton[4].addEventListener("click", iWolf);
backbutton[5].addEventListener("click", g0dak);
backbutton[6].addEventListener("click", Jtrick);
backbutton[7].addEventListener("click", JoLe);

var i;

for(i = 0; i <= backbutton.length; i++){
backbutton[i].style.backgroundColor = "green";
backbutton[i].style.margin = "5px";
backbutton[i].style.borderColor = "white";
backbutton[i].style.borderRadius = "5px";
};

})();
