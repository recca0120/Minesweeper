'use strict';

export class Point {

    private _isMine: boolean;

    constructor(private x, private y, private map: Array<Array<boolean>>) {
        this._isMine = this.map[x][y] === true;
    }

    isMine() {
        return this._isMine;
    }
}
