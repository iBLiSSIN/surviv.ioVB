// ==UserScript==
// @name     	Surviv.io aim assist by VN BPM
// @description Click z to toogle aim assist. This is aim assist, not aimbot.
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
 
//http://code.jquery.com/jquery-1.12.4.min.js
 
(function() {
	$(function() { main(); });
})();
 
 
function main() {
	var game;
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
//botLoop();
 
 
////////////////////
 
  
 
  
function initConfig() {
  botConfig = {
		enabled : true 
  }
  unsafeWindow.botConfig = botConfig;
  
 
  
  
  function toggleBot() {
		unsafeWindow.botConfig.enabled = !unsafeWindow.botConfig.enabled;
	}
  
  $(window).on('keypress', function(e) {
 
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 'z'.charCodeAt(0)) { 
    	toggleBot();
    }
 
	});
  
}
 
 
function initUi() {
 
 
  
	var uiHtml = `
<div id='botInfo'>
 
	<div>Aim Assist:<span id='botEnabled'>?</span></div>
	
 
<div>
 
<style>
#botInfo {
	z-index:  50000000;
	position: fixed;
	top: 50%;
	margin: 10px;
	padding: 15px;
	background-color: #cdcdcd;
	left: 0;
	border-style: solid;
	border-width: 5px;
	border-color:	black;
}
</style>
	`;
  
  
  function updateUi() {
  	console.log('update ui called');
    
      	
    $('#botEnabled').text(botConfig.enabled ? "true" : "false");
  }
  
	var interval = setInterval(updateUi, 500);
  
	$("body").append(uiHtml);
 
  
}
 
  
  
  
  
  
////////////////////
  
 
var _angle = 0;
function testAngle() {
	if (_angle < 360) {
		setAngle(_angle);
		_angle += 1;
		setTimeout(testAngle, 10);
	}
}
//testAngle();
 
function testLocation() {
	console.log(game.camera.pos);
	setTimeout(testLocation, 100);
}//testLocation();
  
  
}
