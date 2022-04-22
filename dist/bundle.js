/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Balloon.ts":
/*!************************!*\
  !*** ./src/Balloon.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Balloon": () => (/* binding */ Balloon)
/* harmony export */ });
var Direction;
(function (Direction) {
    Direction[Direction["LEFT"] = 0] = "LEFT";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
})(Direction || (Direction = {}));
;
class Balloon {
    constructor(instance, x, y) {
        this.balloonImgWidth = 50;
        this.balloonImgHeight = 80;
        this.balloonSpeed = 7;
        this.balloonLerpValue = 0.7;
        this.Direction = Direction;
        this.instance = instance;
        this.pos = this.instance.createVector(x - (this.balloonImgWidth / 2), y);
    }
    moveRight() {
        if (!this.checkConstrain(this.pos.x, Direction.RIGHT))
            this.pos.x = this.instance.lerp(this.pos.x, this.pos.x + this.balloonSpeed, this.balloonLerpValue);
    }
    moveLeft() {
        if (!this.checkConstrain(this.pos.x, Direction.LEFT))
            this.pos.x = this.instance.lerp(this.pos.x, this.pos.x - this.balloonSpeed, this.balloonLerpValue);
    }
    show(balloonImg) {
        this.instance.noFill();
        this.instance.strokeWeight(4);
        this.instance.image(balloonImg, this.pos.x, this.pos.y, this.balloonImgWidth, this.balloonImgHeight);
    }
    checkConstrain(posValue, direction) {
        if (direction === Direction.RIGHT && posValue + this.balloonSpeed > this.instance.width - this.balloonImgWidth)
            return true;
        else if (direction === Direction.LEFT && posValue - this.balloonSpeed < 0)
            return true;
        else
            return false;
    }
}


/***/ }),

/***/ "./src/Coin.ts":
/*!*********************!*\
  !*** ./src/Coin.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Coin": () => (/* binding */ Coin)
/* harmony export */ });
class Coin {
    constructor(instance, x, y, size) {
        this.coinSpeed = 4;
        this.instance = instance;
        this.spawnPos = this.instance.createVector(x, y);
        this.size = size;
    }
    update() {
        this.spawnPos.y += this.coinSpeed;
    }
    show(coinImg) {
        this.instance.image(coinImg, this.spawnPos.x, this.spawnPos.y, this.size, this.size);
    }
    offScreen() {
        return this.spawnPos.y > this.instance.height;
    }
    hit(ballon) {
        return this.instance.collideRectRect(this.spawnPos.x, this.spawnPos.y, this.size, this.size, ballon.pos.x, ballon.pos.y, ballon.balloonImgWidth, ballon.balloonImgHeight);
    }
}


/***/ }),

/***/ "./src/ScoreSystem.ts":
/*!****************************!*\
  !*** ./src/ScoreSystem.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreSystem": () => (/* binding */ ScoreSystem)
/* harmony export */ });
class ScoreSystem {
    constructor(instance) {
        this.score = 0;
        this.instance = instance;
    }
    showGameOver() {
        this.instance.fill(255);
        this.instance.textSize(32);
        let highScore = `High Score = ${localStorage.getItem('HighScore')}`;
        let curretScore = `Socre = ${this.score}`;
        this.instance.text("Game over", this.instance.width - 300, this.instance.width / 2);
        this.instance.text(highScore, this.instance.width - 300, this.instance.width / 2 + 40);
        this.instance.text(curretScore, this.instance.width - 300, this.instance.width / 2 + 75);
    }
    show() {
        this.instance.fill(255);
        this.instance.textSize(20);
        let toShow = `Score ${this.score}`;
        this.instance.text(toShow, 10, 25);
    }
}


/***/ }),

/***/ "./src/Spike.ts":
/*!**********************!*\
  !*** ./src/Spike.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spike": () => (/* binding */ Spike)
/* harmony export */ });
class Spike {
    constructor(instance) {
        this.spawnYOffset = -10;
        this.spikeSpeed = 4;
        this.spikeImgHeight = 8;
        this.spikeMinLength = 100;
        this.instance = instance;
        this.spikeMaxLength = this.instance.width / 2;
        this.spawnPos = this.instance.createVector(this.instance.random(0, this.spikeMaxLength), this.spawnYOffset);
        this.spikeImgWidth = this.getLength();
    }
    update() {
        this.spawnPos.y += this.spikeSpeed;
    }
    show(spikeImg) {
        this.instance.image(spikeImg, this.spawnPos.x, this.spawnPos.y, this.spikeImgWidth, this.spikeImgHeight);
    }
    getLength() {
        return this.instance.random(this.spikeMinLength, this.spikeMaxLength);
    }
    offScreen() {
        return this.spawnPos.y > this.instance.height;
    }
    hit(ballon) {
        return this.instance.collideRectRect(this.spawnPos.x, this.spawnPos.y, this.spikeImgWidth, this.spikeImgHeight, ballon.pos.x, ballon.pos.y, ballon.balloonImgWidth, ballon.balloonImgHeight);
    }
}


/***/ }),

/***/ "./assets/Balloon.png":
/*!****************************!*\
  !*** ./assets/Balloon.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7888a0e3f9da7c6e06e8.png";

/***/ }),

/***/ "./assets/Coin.png":
/*!*************************!*\
  !*** ./assets/Coin.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f8f267546764b108cfe9.png";

/***/ }),

/***/ "./assets/Spike.png":
/*!**************************!*\
  !*** ./assets/Spike.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/210c9bc9c672b19d178b.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/sketch.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Balloon */ "./src/Balloon.ts");
/* harmony import */ var _Coin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coin */ "./src/Coin.ts");
/* harmony import */ var _Spike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spike */ "./src/Spike.ts");
/* harmony import */ var _ScoreSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScoreSystem */ "./src/ScoreSystem.ts");
/* harmony import */ var _assets_Balloon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/Balloon.png */ "./assets/Balloon.png");
/* harmony import */ var _assets_Coin_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Coin.png */ "./assets/Coin.png");
/* harmony import */ var _assets_Spike_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/Spike.png */ "./assets/Spike.png");







let score = 0;
localStorage.setItem("HighScore", '0');
const sketch = (p) => {
    p.preload = () => {
        p.balloonImg = p.loadImage(_assets_Balloon_png__WEBPACK_IMPORTED_MODULE_4__);
        p.coinImg = p.loadImage(_assets_Coin_png__WEBPACK_IMPORTED_MODULE_5__);
        p.spikeImg = p.loadImage(_assets_Spike_png__WEBPACK_IMPORTED_MODULE_6__);
    };
    p.setup = () => {
        let cnv = p.createCanvas(400, 500);
        p.sore = 0;
        p.spikes = [];
        p.coins = [];
        p.balloon = new _Balloon__WEBPACK_IMPORTED_MODULE_0__.Balloon(p, p.width / 2, p.height / 2);
        p.scoreSystem = new _ScoreSystem__WEBPACK_IMPORTED_MODULE_3__.ScoreSystem(p);
    };
    p.draw = () => {
        p.background(51);
        if (p.frameCount % 50 == 0) {
            p.spikes.push(new _Spike__WEBPACK_IMPORTED_MODULE_2__.Spike(p));
        }
        if (p.frameCount % 50 == 0) {
            p.generate_random_coin(5, 18);
        }
        for (let index = p.spikes.length - 1; index >= 0; index--) {
            p.spikes[index].show(p.spikeImg);
            p.spikes[index].update();
            if (p.spikes[index].offScreen()) {
                p.spikes.splice(index, 1);
            }
            if (p.spikes[index].hit(p.balloon)) {
                if (p.scoreSystem.score > parseInt(localStorage.getItem('HighScore'))) {
                    localStorage.setItem('HighScore', JSON.stringify(p.scoreSystem.score));
                }
                p.scoreSystem.showGameOver();
                p.noLoop();
            }
        }
        for (let index = p.coins.length - 1; index >= 0; index--) {
            p.coins[index].show(p.coinImg);
            p.coins[index].update();
            if (p.coins[index].offScreen()) {
                p.coins.splice(index, 1);
            }
            if (p.coins[index].hit(p.balloon)) {
                p.scoreSystem.score++;
                p.coins.splice(index, 1);
            }
        }
        p.balloon.show(p.balloonImg);
        p.scoreSystem.show();
        p.playerControl();
    };
    p.generate_random_coin = (number_of_coin, radius) => {
        for (let i = 0; i < number_of_coin; i++) {
            let temp_r = radius;
            let x;
            let y;
            let r;
            let cir = {
                x: p.random(radius, p.width - radius),
                y: p.random(-150, 0),
                r: temp_r
            };
            let overlap = false;
            for (let j = 0; j < p.coins.length; j++) {
                let other = p.coins[j];
                if (p.dist(cir.x, cir.y, other.spawnPos.x, other.spawnPos.y) < other.size + cir.r + 5) {
                    i--;
                    overlap = true;
                    break;
                }
            }
            if (!overlap)
                p.coins.push(new _Coin__WEBPACK_IMPORTED_MODULE_1__.Coin(p, cir.x, cir.y, cir.r));
        }
    };
    p.playerControl = () => {
        if (p.keyIsDown(p.LEFT_ARROW)) {
            p.balloon.moveLeft();
        }
        if (p.keyIsDown(p.RIGHT_ARROW)) {
            p.balloon.moveRight();
        }
    };
};
const mySketch = new p5(sketch);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3QtYWlyLWJhbGxvb24vLi9zcmMvQmFsbG9vbi50cyIsIndlYnBhY2s6Ly9ob3QtYWlyLWJhbGxvb24vLi9zcmMvQ29pbi50cyIsIndlYnBhY2s6Ly9ob3QtYWlyLWJhbGxvb24vLi9zcmMvU2NvcmVTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vaG90LWFpci1iYWxsb29uLy4vc3JjL1NwaWtlLnRzIiwid2VicGFjazovL2hvdC1haXItYmFsbG9vbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob3QtYWlyLWJhbGxvb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hvdC1haXItYmFsbG9vbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2hvdC1haXItYmFsbG9vbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvdC1haXItYmFsbG9vbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvdC1haXItYmFsbG9vbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ob3QtYWlyLWJhbGxvb24vLi9zcmMvc2tldGNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImVudW0gRGlyZWN0aW9ue0xFRlQsUklHSFR9O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhbGxvb257XHJcblx0XHJcblx0cG9zOiBhbnk7IC8vcG9zIHZhbHVlIG9mIHRoZSBiYWxsb29uXHJcblx0aW5zdGFuY2U6IGFueTsgLy8gcDUgaW5zdGFuY2VcclxuXHRyZWFkb25seSBiYWxsb29uSW1nV2lkdGggPSA1MDsgLy9CYWxsb29uIGltYWdlIHdpZHRoXHJcblx0cmVhZG9ubHkgYmFsbG9vbkltZ0hlaWdodCA9IDgwOyAvL0JhbGxvb24gaW1hZ2UgaGVpZ2h0XHJcblx0cmVhZG9ubHkgYmFsbG9vblNwZWVkID0gNzsgLy8gQmFsbG9vbiBzcGVlZFxyXG5cdHJlYWRvbmx5IGJhbGxvb25MZXJwVmFsdWUgPSAwLjc7IC8vIEJhbGxvb24gbW92ZW1lbnQgbGVycCB2YWx1ZVxyXG5cdHJlYWRvbmx5IERpcmVjdGlvbiA9IERpcmVjdGlvbjsgLy8gQmFsbG9vbiBkaXJlY3Rpb24gb2YgbW92ZW1lbnRcclxuXHJcblx0Y29uc3RydWN0b3IoaW5zdGFuY2U6IGFueSwgeDpudW1iZXIsIHk6bnVtYmVyKXtcclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHRcdHRoaXMucG9zID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVWZWN0b3IoeCAtICh0aGlzLmJhbGxvb25JbWdXaWR0aC8yKSAseSk7XHJcblx0fVxyXG5cclxuXHRtb3ZlUmlnaHQoKXtcclxuXHRcdGlmKCF0aGlzLmNoZWNrQ29uc3RyYWluKHRoaXMucG9zLngsRGlyZWN0aW9uLlJJR0hUKSl0aGlzLnBvcy54ID0gdGhpcy5pbnN0YW5jZS5sZXJwKHRoaXMucG9zLngsdGhpcy5wb3MueCArIHRoaXMuYmFsbG9vblNwZWVkLCB0aGlzLmJhbGxvb25MZXJwVmFsdWUpO1xyXG5cdH1cclxuXHJcblx0bW92ZUxlZnQoKXtcclxuXHRcdGlmKCF0aGlzLmNoZWNrQ29uc3RyYWluKHRoaXMucG9zLngsRGlyZWN0aW9uLkxFRlQpKXRoaXMucG9zLnggPSB0aGlzLmluc3RhbmNlLmxlcnAodGhpcy5wb3MueCx0aGlzLnBvcy54IC0gdGhpcy5iYWxsb29uU3BlZWQsIHRoaXMuYmFsbG9vbkxlcnBWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRzaG93PFQ+KGJhbGxvb25JbWc6IFQpe1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5ub0ZpbGwoKTtcclxuXHRcdHRoaXMuaW5zdGFuY2Uuc3Ryb2tlV2VpZ2h0KDQpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5pbWFnZShiYWxsb29uSW1nLHRoaXMucG9zLngsdGhpcy5wb3MueSx0aGlzLmJhbGxvb25JbWdXaWR0aCx0aGlzLmJhbGxvb25JbWdIZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjaGVja0NvbnN0cmFpbihwb3NWYWx1ZTpudW1iZXIsIGRpcmVjdGlvbjogRGlyZWN0aW9uKXtcclxuXHRcdGlmKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlJJR0hUICYmIHBvc1ZhbHVlICsgdGhpcy5iYWxsb29uU3BlZWQgPiB0aGlzLmluc3RhbmNlLndpZHRoIC0gdGhpcy5iYWxsb29uSW1nV2lkdGgpcmV0dXJuIHRydWU7XHJcblx0XHRlbHNlIGlmKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxFRlQgJiYgcG9zVmFsdWUgLSB0aGlzLmJhbGxvb25TcGVlZCA8IDApcmV0dXJuIHRydWU7XHJcblx0XHRlbHNlIHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIENvaW57XHJcblx0aW5zdGFuY2U6IGFueSA7IFxyXG5cdHNwYXduUG9zOiBhbnk7XHJcblx0c2l6ZTogbnVtYmVyO1xyXG5cdGNvaW5TcGVlZCA9IDQ7XHJcblx0Y29uc3RydWN0b3IoaW5zdGFuY2U6YW55LHg6bnVtYmVyLHk6bnVtYmVyLCBzaXplOm51bWJlcil7XHJcblx0XHR0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcblx0XHR0aGlzLnNwYXduUG9zID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVWZWN0b3IoeCx5KTtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKXtcclxuXHRcdHRoaXMuc3Bhd25Qb3MueSArPSB0aGlzLmNvaW5TcGVlZDtcclxuXHR9XHJcblxyXG5cdHNob3c8VD4oY29pbkltZzogVCl7XHJcblx0XHR0aGlzLmluc3RhbmNlLmltYWdlKGNvaW5JbWcsdGhpcy5zcGF3blBvcy54LHRoaXMuc3Bhd25Qb3MueSwgdGhpcy5zaXplLHRoaXMuc2l6ZSk7XHJcblx0fVxyXG5cclxuXHRvZmZTY3JlZW4oKXtcclxuXHRcdHJldHVybiB0aGlzLnNwYXduUG9zLnkgPiB0aGlzLmluc3RhbmNlLmhlaWdodDtcclxuXHR9XHJcblxyXG5cdGhpdChiYWxsb246YW55KXtcclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlLmNvbGxpZGVSZWN0UmVjdCh0aGlzLnNwYXduUG9zLngsdGhpcy5zcGF3blBvcy55LHRoaXMuc2l6ZSx0aGlzLnNpemUsYmFsbG9uLnBvcy54LGJhbGxvbi5wb3MueSxiYWxsb24uYmFsbG9vbkltZ1dpZHRoLGJhbGxvbi5iYWxsb29uSW1nSGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdFxyXG59IiwiZXhwb3J0IGNsYXNzIFNjb3JlU3lzdGVte1xyXG5cdGluc3RhbmNlOmFueTtcclxuXHRzY29yZTogbnVtYmVyID0gMDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihpbnN0YW5jZTphbnkpe1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0c2hvd0dhbWVPdmVyKCl7XHJcblx0XHR0aGlzLmluc3RhbmNlLmZpbGwoMjU1KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudGV4dFNpemUoMzIpO1xyXG5cdFx0bGV0IGhpZ2hTY29yZSA9IGBIaWdoIFNjb3JlID0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnSGlnaFNjb3JlJyl9YDtcclxuXHRcdGxldCBjdXJyZXRTY29yZSA9IGBTb2NyZSA9ICR7dGhpcy5zY29yZX1gO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50ZXh0KFwiR2FtZSBvdmVyXCIsdGhpcy5pbnN0YW5jZS53aWR0aCAtMzAwICx0aGlzLmluc3RhbmNlLndpZHRoLzIpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50ZXh0KGhpZ2hTY29yZSx0aGlzLmluc3RhbmNlLndpZHRoIC0zMDAgLHRoaXMuaW5zdGFuY2Uud2lkdGgvMiArIDQwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudGV4dChjdXJyZXRTY29yZSx0aGlzLmluc3RhbmNlLndpZHRoIC0zMDAgLHRoaXMuaW5zdGFuY2Uud2lkdGgvMiArIDc1KTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0c2hvdygpe1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5maWxsKDI1NSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRleHRTaXplKDIwKTtcclxuXHRcdGxldCB0b1Nob3cgPSBgU2NvcmUgJHt0aGlzLnNjb3JlfWBcclxuXHRcdHRoaXMuaW5zdGFuY2UudGV4dCh0b1Nob3csMTAsMjUpXHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIFNwaWtle1xyXG5cdGluc3RhbmNlOiBhbnk7XHJcblx0c3Bhd25Qb3M6YW55O1xyXG5cdHNwYXduWU9mZnNldCA9IC0xMDtcclxuXHRzcGlrZVNwZWVkID0gNDtcclxuXHRzcGlrZUltZ1dpZHRoOm51bWJlcjtcclxuXHRzcGlrZUltZ0hlaWdodCA9IDg7XHJcblx0c3Bpa2VNaW5MZW5ndGggPSAxMDA7XHJcblx0c3Bpa2VNYXhMZW5ndGg6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoaW5zdGFuY2U6YW55KXtcclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHRcdHRoaXMuc3Bpa2VNYXhMZW5ndGggPSB0aGlzLmluc3RhbmNlLndpZHRoLzI7XHJcblx0XHR0aGlzLnNwYXduUG9zID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVWZWN0b3IodGhpcy5pbnN0YW5jZS5yYW5kb20oMCx0aGlzLnNwaWtlTWF4TGVuZ3RoKSx0aGlzLnNwYXduWU9mZnNldCk7XHJcblx0XHR0aGlzLnNwaWtlSW1nV2lkdGggPSB0aGlzLmdldExlbmd0aCgpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCl7XHJcblx0XHR0aGlzLnNwYXduUG9zLnkgKz0gdGhpcy5zcGlrZVNwZWVkO1xyXG5cdH1cclxuXHJcblx0c2hvdzxUPihzcGlrZUltZzogVCl7XHJcblx0XHR0aGlzLmluc3RhbmNlLmltYWdlKHNwaWtlSW1nLHRoaXMuc3Bhd25Qb3MueCx0aGlzLnNwYXduUG9zLnksdGhpcy5zcGlrZUltZ1dpZHRoLHRoaXMuc3Bpa2VJbWdIZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRMZW5ndGgoKTpudW1iZXJ7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZS5yYW5kb20odGhpcy5zcGlrZU1pbkxlbmd0aCx0aGlzLnNwaWtlTWF4TGVuZ3RoKTtcclxuXHR9XHJcblxyXG5cdG9mZlNjcmVlbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuc3Bhd25Qb3MueSA+IHRoaXMuaW5zdGFuY2UuaGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0aGl0KGJhbGxvbjphbnkpe1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2UuY29sbGlkZVJlY3RSZWN0KHRoaXMuc3Bhd25Qb3MueCx0aGlzLnNwYXduUG9zLnksdGhpcy5zcGlrZUltZ1dpZHRoLHRoaXMuc3Bpa2VJbWdIZWlnaHQsYmFsbG9uLnBvcy54LGJhbGxvbi5wb3MueSxiYWxsb24uYmFsbG9vbkltZ1dpZHRoLGJhbGxvbi5iYWxsb29uSW1nSGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImRlY2xhcmUgdmFyIHA1OiBhbnk7XHJcbi8vIGRlY2xhcmUgdmFyIHA1LmNvbGxpZGUyZDogYW55O1xyXG5pbXBvcnQgeyBCYWxsb29uIH0gZnJvbSBcIi4vQmFsbG9vblwiO1xyXG5pbXBvcnQgeyBDb2luIH0gZnJvbSBcIi4vQ29pblwiO1xyXG5pbXBvcnQgeyBTcGlrZSB9IGZyb20gXCIuL1NwaWtlXCI7XHJcbmltcG9ydCB7U2NvcmVTeXN0ZW19IGZyb20gXCIuL1Njb3JlU3lzdGVtXCI7XHJcbmltcG9ydCBiYWxsb24gZnJvbSBcIi4uL2Fzc2V0cy9CYWxsb29uLnBuZ1wiO1xyXG5pbXBvcnQgY29pbiBmcm9tIFwiLi4vYXNzZXRzL0NvaW4ucG5nXCI7XHJcbmltcG9ydCBzcGlrZSBmcm9tIFwiLi4vYXNzZXRzL1NwaWtlLnBuZ1wiO1xyXG5cclxuLy8gY29uc29sZS5sb2coY29sbGlkZTJkKTtcclxubGV0IHNjb3JlID0gMDtcclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJIaWdoU2NvcmVcIiwgJzAnKTtcclxuXHJcbmNvbnN0IHNrZXRjaCA9IChwOmFueSkgPT4ge1xyXG5cclxuXHRwLnByZWxvYWQgPSAoKSA9PiB7XHJcblx0XHRwLmJhbGxvb25JbWcgPSBwLmxvYWRJbWFnZShiYWxsb24pO1xyXG5cdFx0cC5jb2luSW1nID0gcC5sb2FkSW1hZ2UoY29pbik7XHJcblx0XHRwLnNwaWtlSW1nID0gcC5sb2FkSW1hZ2Uoc3Bpa2UpO1xyXG5cdH1cclxuXHJcblx0cC5zZXR1cCA9ICgpID0+IHtcclxuXHRcdGxldCBjbnYgPSBwLmNyZWF0ZUNhbnZhcyg0MDAsNTAwKTtcclxuXHRcdHAuc29yZSA9IDA7XHJcblx0XHRwLnNwaWtlcyA9IFtdO1xyXG5cdFx0cC5jb2lucyA9IFtdO1xyXG5cdFx0cC5iYWxsb29uID0gbmV3IEJhbGxvb24ocCwgcC53aWR0aC8yLHAuaGVpZ2h0LzIpO1xyXG5cdFx0cC5zY29yZVN5c3RlbSA9IG5ldyBTY29yZVN5c3RlbShwKTtcclxuXHR9XHJcblxyXG5cdHAuZHJhdyA9ICgpID0+IHtcclxuXHRcdHAuYmFja2dyb3VuZCg1MSk7XHJcblxyXG5cclxuXHRcdGlmKHAuZnJhbWVDb3VudCAlIDUwID09IDAgKXtcclxuXHRcdFx0cC5zcGlrZXMucHVzaChuZXcgU3Bpa2UocCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHAuZnJhbWVDb3VudCAlIDUwID09IDApe1xyXG5cdFx0XHRwLmdlbmVyYXRlX3JhbmRvbV9jb2luKDUsIDE4KTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cocC5jb2lucy5sZW5ndGgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGluZGV4ID0gcC5zcGlrZXMubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xyXG5cdFx0XHRwLnNwaWtlc1tpbmRleF0uc2hvdyhwLnNwaWtlSW1nKTtcclxuXHRcdFx0cC5zcGlrZXNbaW5kZXhdLnVwZGF0ZSgpO1x0XHJcblx0XHRcdGlmKHAuc3Bpa2VzW2luZGV4XS5vZmZTY3JlZW4oKSl7XHJcblx0XHRcdFx0cC5zcGlrZXMuc3BsaWNlKGluZGV4LDEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHAuc3Bpa2VzW2luZGV4XS5oaXQocC5iYWxsb29uKSl7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJHYW1lIG92ZXJcIik7XHJcblx0XHRcdFx0aWYocC5zY29yZVN5c3RlbS5zY29yZSA+IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWdoU2NvcmUnKSEpKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIaWdoU2NvcmUnLEpTT04uc3RyaW5naWZ5KHAuc2NvcmVTeXN0ZW0uc2NvcmUpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cC5zY29yZVN5c3RlbS5zaG93R2FtZU92ZXIoKTtcclxuXHRcdFx0XHRwLm5vTG9vcCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSBwLmNvaW5zLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcclxuXHRcdFx0cC5jb2luc1tpbmRleF0uc2hvdyhwLmNvaW5JbWcpO1xyXG5cdFx0XHRwLmNvaW5zW2luZGV4XS51cGRhdGUoKTtcdFxyXG5cdFx0XHRpZihwLmNvaW5zW2luZGV4XS5vZmZTY3JlZW4oKSl7XHJcblx0XHRcdFx0cC5jb2lucy5zcGxpY2UoaW5kZXgsMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYocC5jb2luc1tpbmRleF0uaGl0KHAuYmFsbG9vbikpe1xyXG5cdFx0XHRcdHAuc2NvcmVTeXN0ZW0uc2NvcmUrKztcclxuXHRcdFx0XHRwLmNvaW5zLnNwbGljZShpbmRleCwxKTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwLnNjb3JlU3lzdGVtLnNjb3JlKTtcclxuXHRcdFx0XHQvLyBwLm5vTG9vcCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHJcblx0XHRwLmJhbGxvb24uc2hvdyhwLmJhbGxvb25JbWcpO1xyXG5cdFx0cC5zY29yZVN5c3RlbS5zaG93KCk7XHJcblx0XHRwLnBsYXllckNvbnRyb2woKTtcclxuXHR9XHJcblxyXG5cdHAuZ2VuZXJhdGVfcmFuZG9tX2NvaW4gPSAobnVtYmVyX29mX2NvaW46bnVtYmVyLHJhZGl1czpudW1iZXIpID0+IHtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcl9vZl9jb2luOyBpKyspIHtcclxuXHRcclxuXHRcdFx0bGV0IHRlbXBfciA9IHJhZGl1cztcclxuXHRcdFx0bGV0IHg6IG51bWJlcjtcclxuXHRcdFx0bGV0IHk6IG51bWJlcjtcclxuXHRcdFx0bGV0IHI6IG51bWJlcjtcclxuXHRcdFx0Ly9DcmVhdGluZyBhIHRlbXAgY2lyY2xlIG9iamVjdCB0byBjaGVjayBpZiBpdCBvdmVybGFwcyB3aXRoIHRoZSBleGlzdGluZyBjaXJjbGUgb2JqZWN0IGluIHRoZSBjYW52YXMuXHJcblx0XHRcdGxldCBjaXIgPSB7XHJcblx0XHRcdFx0eDogcC5yYW5kb20ocmFkaXVzLCBwLndpZHRoIC0gcmFkaXVzKSxcclxuXHRcdFx0XHR5OiBwLnJhbmRvbSgtMTUwLCAwKSxcclxuXHRcdFx0XHRyOiB0ZW1wX3JcclxuXHRcdFx0fTtcclxuXHRcclxuXHRcdFx0bGV0IG92ZXJsYXAgPSBmYWxzZTtcclxuXHRcclxuXHRcdFx0Ly9DaGVja2luZyB3aXRoIHRoZSBleGlzdGluZyBjaXJjbGVzIG9iamVjdHMgaWYgaXQgb3ZlcmxhcHMuXHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcC5jb2lucy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGxldCBvdGhlciA9IHAuY29pbnNbal07XHJcblx0XHRcdFx0aWYgKHAuZGlzdChjaXIueCwgY2lyLnksIG90aGVyLnNwYXduUG9zLngsIG90aGVyLnNwYXduUG9zLnkpIDwgb3RoZXIuc2l6ZSArIGNpci5yICsgNSkge1xyXG5cdFx0XHRcdFx0aS0tO1xyXG5cdFx0XHRcdFx0b3ZlcmxhcCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly9JZiBpdCBkb2VzIG5vdCBvdmVybGFwIHRoZW4gYWRkIHRoZSB0ZW1wIGNpcmNsZSB0byB0aGUgY2lyY2xlIG9iamVjdHNcclxuXHRcdFx0aWYgKCFvdmVybGFwKSBwLmNvaW5zLnB1c2gobmV3IENvaW4ocCxjaXIueCwgY2lyLnksIGNpci5yKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRcclxuXHRcclxuXHRwLnBsYXllckNvbnRyb2wgPSAoKSA9PiB7XHJcblx0XHRpZiAocC5rZXlJc0Rvd24ocC5MRUZUX0FSUk9XKSkge1xyXG5cdFx0XHRwLmJhbGxvb24ubW92ZUxlZnQoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKHAua2V5SXNEb3duKHAuUklHSFRfQVJST1cpKSB7XHJcblx0XHRcdHAuYmFsbG9vbi5tb3ZlUmlnaHQoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbXlTa2V0Y2ggPSBuZXcgcDUoc2tldGNoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=