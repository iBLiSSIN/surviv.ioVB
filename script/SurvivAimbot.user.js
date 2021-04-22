// ==UserScript==
// @name     	Surviv.io AIMBOT mods by VN BPM
// @description Support aimbot for surviv.io
// @namespace    https://github.com/iBLiSSIN
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
var processEnemy = function (enemy) {
        if (!enemy)
            return;
 
        enemy.prediction = { x: 0.0, y: 0.0 };
 
        curPosX = 0
        curPosY = 0
 
        enemyPosX = 0
        enemyPosY = 0
 
        timeDiff1 = 0
        distDiffX1 = 0
        distDiffY1 = 0
        dirX1 = 0
        dirY1 = 0
 
        timeDiff2 = 0
        distDiffX2 = 0
        distDiffY2 = 0
        dirX2 = 0
        dirY2 = 0
 
        timeDiff3 = 0
        distDiffX3 = 0
        distDiffY3 = 0
        dirX3 = 0
        dirY3 = 0
 
        avgSpeedX = 0
        avgSpeedY = 0
        avgDirX = 0
        avgDirY = 0
 
        processes.unshift(
            {
                pos: enemy.pos,
                curPos: curPlayer.pos,
                time: window.performance.now() / 1000,
                dir: enemy.dir
            })
 
        if (processes.length > 2) {
            {
                curPosX = (processes[0].curPos.x)
                curPosY = (processes[0].curPos.y)
                enemyPosX = (processes[0].pos.x)
                enemyPosY = (processes[0].pos.y)
 
                timeDiff1 = processes[0].time - processes[1].time
                distDiffX1 = processes[0].pos.x - processes[1].pos.x
                distDiffY1 = processes[0].pos.y - processes[1].pos.y
 
                timeDiff2 = processes[1].time - processes[2].time
                distDiffX2 = processes[1].pos.x - processes[2].pos.x
                distDiffY2 = processes[1].pos.y - processes[2].pos.y
 
                avgSpeedX =
                    ((distDiffX1 + distDiffX2) / 2) / ((timeDiff1 + timeDiff2) / 2)
 
                avgSpeedY =
                    ((distDiffY1 + distDiffY2) / 2) / ((timeDiff1 + timeDiff2) / 2)
 
                avgDirX = (dirX1)
                avgDirY = (dirY1)
            }
        }
        if (curBulletSpeed == 0){
            enemy.prediction = {
                x: 0,
                y: 0
            };
            return;
        }
 
        else {
            var bulletReachTime = getDistance2(curPosX, curPosY, enemyPosX, enemyPosY) / curBulletSpeed
            // if (window.menu.UserSetting.shoot.autoAimPingCorrectionEnabled) {
            //     bulletReachTime += window.gameVars.Perfomance.lastLAT / 2000;
            // }
 
            enemy.prediction = {
                x:
                    (avgSpeedX * bulletReachTime * (window.menu.UserSetting.shoot.autoAimSpeedInertia))
                ,
 
                y:
                    (avgSpeedY * bulletReachTime * (window.menu.UserSetting.shoot.autoAimSpeedInertia))
        }
 
 
    }
}
})
})();
