'use strict'

export class Point
{
    constructor(private _isMine: boolean) {}

    isMine() {
        return this._isMine;
    }
}
