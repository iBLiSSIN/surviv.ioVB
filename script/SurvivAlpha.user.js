// ==UserScript==
// @name         Surviv.IO Transparent Mods by VN BPM
// @namespace    https://github.com/iBLiSSIN
// @version      1.0.0
// @description  Mods for surviv.io. Aim Bot will coming soon. If do during transparency doesn't work, tell me.
// @author       VN BPM
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
            ceilings[key].ceiling.imgs[ceilImg].sprite = "https://surviv.io/img/question.svg"
        }
    }
})
})();
