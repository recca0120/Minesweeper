'use strict';

export class Point {

    private _isBomb = false;

    private _isClick = false;

    private _isFlag = false;

    constructor(private x, private y, private map: Array<Array<boolean>>) {
        this._isBomb = this.map[x][y];
    }

    public isBomb() {
        return this._isBomb;
    }

    public bombCounts() {
        const positions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ];

        return positions.map(([x, y]) => {
            return this.getPosition(x, y);
        }).filter(x => x === true).length;
    }

    public click(click = true) {
        this._isClick = click;

        return this;
    }

    public isClick() {
        return this._isClick;
    }

    public flag(flag = true) {
        this._isFlag = flag;

        return this;
    }

    public isFlag() {
        return this._isFlag;
    }

    protected getPosition(x: number, y: number) {
        if (this.map[x] === undefined || this.map[x][y] === undefined) {
            return null;
        }

        return this.map[x][y];
    }
}
