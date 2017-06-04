'use strict';

export class Point {

    private _isMine: boolean;

    private _isClick = false;

    constructor(private x, private y, private map: Array<Array<boolean>>) {
        this._isMine = this.map[x][y];
    }

    public isMine() {
        return this._isMine;
    }

    public getNumber() {
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
            console.log(this.getPosition(x, y), x, y);
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

    protected getPosition(x: number, y: number) {
        if (this.map[x] === undefined || this.map[x][y] === undefined) {
            return null;
        }

        return this.map[x][y];
    }
}
