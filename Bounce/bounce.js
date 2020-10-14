"use strict"

const board = require('./ExamInput.js').board;

class BouncingBall {
    constructor(board) {
        this.board = board;
        this.vector = { x: 1, y: 1 };
        this.ballPosition = {};
        this.newPosition;
        this.moveCount = 0;
        this.startPosition;
    }
    gameStart() {
        this.whereIsBall();
        this.startPosition = this.ballPosition;
        console.log("Let's play a game.")
        console.table(this.board);
        this.moveTheBall();
        while (this.ballPosition.x !== this.startPosition.x ||
            this.ballPosition.y !== this.startPosition.y) {
            this.moveTheBall();
        }
        this.gameOver();
    }
    whereIsBall() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j] === "1") {
                    this.ballPosition.x = j;
                    this.ballPosition.y = i;
                }
            }
        }
    }
    moveTheBall() {
        this.newPosition = {
            x: this.ballPosition.x + this.vector.x,
            y: this.ballPosition.y + this.vector.y
        }

        if (this.board[this.newPosition.y][this.newPosition.x] === "X") {
            this.changeVector();
            this.moveTheBall();
        } else {
            this.board[this.ballPosition.y][this.ballPosition.x] = "0";
            this.ballPosition = this.newPosition;
            this.board[this.ballPosition.y][this.ballPosition.x] = "1";
            this.moveCount++;
            console.log(`vector ${this.vector.x}, ${this.vector.y}`);
            console.log(`position: ${this.ballPosition.y}, ${this.ballPosition.x}`);
            console.table(this.board);
        }
    }
    changeVector() {
        if (this.board[this.newPosition.y][this.ballPosition.x] === "X") {
            this.vector.y = -this.vector.y;
        } else if (this.board[this.ballPosition.y][this.newPosition.x] === "X") {
            this.vector.x = -this.vector.x;
        }

    }
    gameOver() {
        console.log(`The ball is back`);
        console.log(`The ball moved ${this.moveCount} times`);
    }
}

const bounce = new BouncingBall(board);
bounce.gameStart();