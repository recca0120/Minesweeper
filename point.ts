'use strict';

export class Point {

    private _isBomb = false;

    private _isOpen = false;

    private _isFlag = false;

    public positions: Array<Array<number>>;

    public _bombCounts: number;

    constructor(private x, private y, private map: Array<Array<boolean>>) {
        this._isBomb = this.map[x][y];
        this.positions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ].filter(([x, y]) => this.map[x] !== undefined && this.map[x][y] !== undefined);
        this._bombCounts = this.positions.map(([x, y]) => {
            return this.getPosition(x, y);
        }).filter(x => x === true).length
    }

    public isBomb() {
        return this._isBomb;
    }

    public bombCounts() {
        return this._bombCounts;
    }

    public click(click = true) {
        this._isOpen = click;

        return this;
    }

    public isOpen() {
        return this._isOpen;
    }

    public flag(flag = true) {
        this._isFlag = flag;

        return this;
    }

    public isFlag() {
        return this._isFlag;
    }

    protected getPosition(x: number, y: number) {
        return this.map[x][y];
    }
}
