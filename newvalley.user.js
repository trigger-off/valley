// ==UserScript==
// @name         TEST
// @namespace    http://tampermonkey.net/
// @version      2024-06-01
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
    function executeScript() {
        try {
        document.querySelector("#bottomMenu > div > div.button.settings > div").style['background-image'] = "url(https://raw.githubusercontent.com/trigger-off/valley/main/settings.png)";
        window.User.prototype.removeLifeOnStartGame = function() {
            var e = {
                actionName: "start game",
                actionEpisode: episode.getNumForStatistics(),
                actionLevel: application.level.num,
                actionPrice: 0
            };
            return 1 === episode.get("num") && 1 === application.level.num && firstSessionLogger.logEvent("start 1st game"),
            user.get("firstTime") || 1 !== episode.get("num") || 0 !== episode.scores.length || 1 !== application.level.num || (e.actionName = "not first #1"),
            goods.checkProduct("unlimitedLifes") ? (this.set(e),
            !0) : (this.get("lives") == Config.maxLives ? (e.livesLastRestored = application.getCurrentServerTime(),
            e.lives = this.get("lives")) : e.lives = this.get("lives"),
            this.set(e, {
                validate: !0
            }))
        };
        window.NewLivesSystem.prototype.removeLifeOnStartGame = function() {
            var e = {
                actionName: "start game",
                actionEpisode: episode.getNumForStatistics(),
                actionLevel: application.level.num,
                actionPrice: 0
            };
            return 1 === episode.get("num") && 1 === application.level.num && firstSessionLogger.logEvent("start 1st game"),
            user.get("firstTime") || 1 !== episode.get("num") || 0 !== episode.scores.length || 1 !== application.level.num || (e.actionName = "not first #1"),
            goods.checkProduct("unlimitedBwLives") ? (user.set(e),
            !0) : (this.gameIsStarted = !0,
            user.get("bwnewlives") == Config.maxLives ? (e.bwNewLivesLastRestored = application.getCurrentServerTime(),
            e.bwnewlives = user.get("bwnewlives")) : e.bwnewlives = user.get("bwnewlives"),
            user.set(e, {
                validate: !0
            }))
        };
        window.EventLivesSystem.prototype.removeLifeOnStartGame = function() {
            if (this.isOnRestoreMode())
                return !1;
            var e = {
                actionName: "start game",
                actionEpisode: episode.getNumForStatistics(),
                actionLevel: application.level.num,
                actionPrice: 0
            };
            return user.set(e, {
                validate: !0
            }),
            this.gameIsStarted = !0
        };
        window.User.prototype.addAndRemoveLifeOnLoseGame = function() {
            var e = {
                actionName: "lose game",
                actionEpisode: episode.getNumForStatistics(),
                actionLevel: application.level.num,
                actionPrice: 0,
                lives: this.get("lives"),
                livesLastRestored: this.get("livesLastRestored"),
                withoutLoseSeria: 0
            };
            this.countLose(),
            this.countNealyWin(),
            goods.checkProduct("unlimitedLifes") ? this.set(e) : (e.lives < Config.maxLives && e.lives++,
            e.lives == Config.maxLives && (e.livesLastRestored = application.getCurrentServerTime()),

            this.set(e, {
                validate: !0
            }))
        };
        window.NewLivesSystem.prototype.addAndRemoveLifeOnLoseGame = function() {
            var e = {
                actionName: "lose game",
                actionEpisode: episode.getNumForStatistics(),
                actionLevel: application.level.num,
                actionPrice: 0,
                bwnewlives: user.get("bwnewlives"),
                bwNewLivesLastRestored: user.get("bwNewLivesLastRestored"),
                withoutLoseSeria: 0
            };
            this.countLose(),
            this.countNealyWin(),
            goods.checkProduct("unlimitedBwLives") ? user.set(e) : (e.bwnewlives < this.livesAmount && e.bwnewlives++,
            e.bwnewlives === this.livesAmount && (e.bwNewLivesLastRestored = application.getCurrentServerTime()),
            this.gameIsStarted = !1,
            user.set(e, {
                validate: !0
            }))
        };
        window.EventLivesSystem.prototype.addAndRemoveLifeOnLoseGame = function() {
            var e = {
                actionName: "lose game",
                actionEpisode: episode.getNumForStatistics(),
                actionLevel: application.level.num,
                actionPrice: 0,
                withoutLoseSeria: 0
            };
            user.set(e, {
                validate: !0
            }),
            this.gameIsStarted = !1,
            this.addLife(!0)
        }
    } catch (e){
        console.error(e);
    }
}
    // Your code here...
    if (window.location.host === "localhost"){
        var needUrl = document.querySelector("iframe").src;
        window.location.replace(needUrl);
    } else {
        waitForElm('#bottomMenu > div > div.button.settings > div').then((elm) => {
            console.log('Script is ready');
            executeScript();
        });

    }
})();
