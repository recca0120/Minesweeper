'use strict';

import { Point } from './point';

export class MapCreator {
    public create(cols: number, rows: number, mines: number) {
        return this.transformPoint(
            this.randomMine(
                (new Array(rows)).fill(null).map(() => (new Array(cols)).fill(false)),
                mines,
            ),
        );
    }

    protected randomMine(map: Array<Array<boolean>>, mines) {
        let counts = 0;
        while (counts < mines) {
            const x = this.random(map.length);
            const y = this.random(map[0].length);
            if (map[x][y] === false) {
                map[x][y] = true;
                counts++;
            }
        }

        return map;
    }

    protected transformPoint(map: Array<Array<boolean>>) {
        return map.map(col => col.map(row => new Point(row)));
    }

    protected random(n: number) {
        return Math.floor(Math.random() * n);
    }
}
