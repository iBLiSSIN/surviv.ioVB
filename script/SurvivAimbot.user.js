// ==UserScript==
// @name     	Surviv.io AIMBOT mods by VN BPM
// @description Support aimbot for surviv.io
// @namespace    https://greasyfork.org/scripts/419689-surviv-io-aim-assist-by-vn-bpm/code/Survivio%20aim%20assist%20by%20VN%20BPM.user.js
// @version  	2.0
// @grant    	unsafeWindow
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
// @require      http://code.jquery.com/jquery-3.3.1.js 
// ==/UserScript==
 
(function() {
    'use strict';
    var detectEnimies = function () {
        var selfId = game[obfuscate.activeId];
        var selfTeamId = game[obfuscate.playerBarn][obfuscate.playerInfo][game[obfuscate.activeId]].teamId;
        var objectIds = Object.keys(game[obfuscate.objectCreator].idToObj);
        var playerIds = Object.keys(game[obfuscate.playerBarn][obfuscate.playerInfo]);
        var allPlayers = game[obfuscate.playerBarn][obfuscate.playerInfo];
        var firstPlayerId = Object.keys(allPlayers)[0];
        var firstPlayerObj = game[obfuscate.objectCreator].idToObj[firstPlayerId];
        var allPlayerDict = {};

        var isTeammate = function (plrId, plrObj) {
            var isTmmt = game[obfuscate.playerBarn][obfuscate.playerInfo][plrId].teamId == selfTeamId;
            plrObj.teammate = isTmmt;
            return isTmmt;
        }

        var isUnderground = function (plrObj) {
            if(plrObj[obfuscate.netData][obfuscate.layer] == 0 && curPlayer[obfuscate.netData][obfuscate.layer] == 1){
                return true
            }
            if(plrObj[obfuscate.netData][obfuscate.layer] == 1 && curPlayer[obfuscate.netData][obfuscate.layer] == 0){
                return true
            }

        }

        return playerIds
            .filter(function (id) {
                var playerObject = game[obfuscate.objectCreator].idToObj[id];
                return playerObject &&
                    (!isTeammate(id, playerObject)) &&
                    (!playerObject[obfuscate.netData][obfuscate.dead]) &&
                    (!playerObject[obfuscate.netData][obfuscate.downed]) &&
                    (!isUnderground(playerObject)) &&
                    id != selfId;
            })
            .map(function (id) {
                return game[obfuscate.objectCreator].idToObj[id];
                    }
    }
})
})();
