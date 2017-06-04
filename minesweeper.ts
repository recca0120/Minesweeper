'use strict';

import { MapCreator } from './mapcreator';

export class Minesweeper
{
    private map: Array<Array<boolean>>;

    public constructor(mapCreator: MapCreator) {
        this.map = mapCreator.create();
    }

    public getMap() {
        return this.map;
    }
}
