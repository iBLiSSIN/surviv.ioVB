// ==UserScript==
// @name         Surviv.IO Simple Cheats Auto Update
// @namespace    https://greasyfork.org/scripts/423957-surviv-io-simple-cheats/code/SurvivIO%20Simple%20Cheats.user.js
// @version      1.1.0
// @description  Mods for surviv.io. Aim Bot will coming soon. If do during transparency doesn't work, tell me.
// @author       VN BPM on YouTube
// @match        *://surviv.io/*
// @match        *://surviv2.io/*
// @match        *://2dbattleroyale.com/*
// @match        *://2dbattleroyale.org/*
// @match        *://piearesquared.info/*
// @match        *://thecircleisclosing.com/*
// @match        *://archimedesofsyracuse.info/*
// @match        *://secantsecant.com/*
// @match        *://parmainitiative.com/*
// @match        *://nevelskoygroup.com/*
// @match        *://kugahi.com/*
// @match        *://chandlertallowmd.com/*
// @match        *://ot38.club/*
// @match        *://kugaheavyindustry.com/*
// @match        *://drchandlertallow.com/*
// @match        *://rarepotato.com/*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
 
var ceilings = ""
 
// Some important shit for this whole thing to work
 
var func = {
    webpack_inject: (w, e, get) => {
        ceilings = get("03f4982a")
    },
};
 
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject"],
        func,
        [["webpack_inject"]]
    ]);
}
 
// do the magic
 
Object.keys(ceilings).forEach(function(key) {
    if(ceilings[key].type === "building") {
        for(var ceilImg in ceilings[key].ceiling.imgs) {
            ceilings[key].ceiling.imgs[ceilImg].opacity = 0.3
        }
    }
})
})();
// ==/UserScript==
 
(function() {
    'use strict';
 
var shits = ""
 
// Some important shit for this whole thing to work
 
var func = {
    webpack_inject2: (w, e, get) => {
        shits = get("03f4982a")
    },
};
 
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject2"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject2"],
        func,
        [["webpack_inject2"]]
    ]);
}
    
// do the magic
 
Object.keys(shits).forEach(function(key2) {
    if(key2.match(/tree/g)) {
        shits[key2].img.opacity = 0.3
    } else if(key2.match(/bush/g)) {
        shits[key2].img.opacity = 0.3
    } else if(key2.match(/table/g)) {
        shits[key2].img.opacity = 0.3
    }
})
})();
// ==/UserScript==
 
(function() {
    'use strict';
 
var throwables = ""
 
// Some important shit for this whole thing to work
 
var func = {
    webpack_inject1: (w, e, get) => {
        throwables = get("035f2ecb")
    },
};
 
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject1"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject1"],
        func,
        [["webpack_inject1"]]
    ]);
}
 
// do the magic
 
Object.keys(throwables).forEach(function(key1) {
    throwables[key1].worldImg.scale = .25
})
})();
// ==/UserScript==
 
(function() {
    document.querySelector('#btn-join-team').style.cssText = 'background: #272727; border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-create-team').style.cssText = 'background: #272727; border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-start-mode-0').style.cssText = 'background: #272727; border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-team-leave').style.cssText = 'background: #272727; border-bottom: #272727; box-shadow: 0 0;';
    document.querySelector('#btn-start-team').style.cssText = 'background: #272727; border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-start-team').style.cssText = 'background: #272727; border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-customize').style.backgroundColor = '#272727'
    document.querySelector('#btn-customize').style.cssText = 'border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-customize').style.backgroundColor = '#272727'
    document.querySelector('#background').style.cssText = 'background-image: url(https://cdn.discordapp.com/attachments/596811803103592576/689215613456875550/try.png)'
    document.querySelector('#start-menu').style.cssText = 'position: relative; top: 130px; box-shadow: 0 0;'
    document.querySelector('#news-block').style.cssText = 'position: relative; top: 100px'
    document.querySelector('#team-menu').style.cssText = 'display: none; top: 80px'
    document.querySelector('#ad-block-left').style.cssText = 'background-color: rgba(0,0,0,0);'
 
    let squad = document.getElementById('btn-start-mode-1');
    squad.parentNode.removeChild(squad);
 
    let squad2 = document.getElementById('btn-start-mode-2');
    squad2.parentNode.removeChild(squad2);
 
    let help = document.getElementById('btn-help');
    help.parentNode.removeChild(help);
 
    let ad = document.getElementById('surviv-io_300x250');
    ad.parentNode.removeChild(ad);
 
    let social = document.getElementById('social-share-block');
    social.parentNode.removeChild(social);
 
    let startContainer = document.querySelector('#start-menu')
    startContainer.style.boxShadow = ''
    startContainer.style.backgroundColor = '#0000'
 
    let news = document.querySelector('#news-block')
    news.style.boxShadow = ''
    news.style.backgroundColor = '#0000'
 
    let main = document.getElementById('server-select-main');
    main.parentNode.removeChild(main);
 
    let gameapp = document.getElementById('start-bottom-left');
    gameapp.parentNode.removeChild(gameapp);
 
    let streams = document.getElementById('start-top-left-desktop');
    streams.parentNode.removeChild(streams);
 
    let logo = document.getElementById('start-row-header');
    logo.parentNode.removeChild(logo);
 
    let xw = document.querySelectorAll('.btn-start-option')
 
    xw[1].style.backgroundColor = '#141414'
 
    xw[2].style.backgroundColor = '#141414'
 
    xw[3].style.backgroundColor = '#141414'
 
    xw[0].style.backgroundColor = '#141414'
})();
