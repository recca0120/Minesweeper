'use strict';

import { MapCreator } from './mapcreator';

export class Minesweeper
{
    private map: Array<Array<boolean>>;

    public constructor(private mapCreator: MapCreator) {}

    public start(cols: number, rows: number, mines: number)
    {
        this.map = this.mapCreator.create(cols, rows, mines);

        return this;
    }

    public click(x: number, y:number) {
        return this.map[x][y].isMine();
    }
}
