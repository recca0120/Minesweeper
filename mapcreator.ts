'use strict';

import { Point } from './point';

export class MapCreator {
    public create(cols: number, rows: number, mines: number) {
        const map = [];
        for (let i = 0; i < rows; i++) {
            map[i] = [];
            for (let j = 0; j < cols; j++) {
                map[i][j] = false;
            }
        }

        let counts = 0;
        while (counts < mines) {
            const x = this.random(rows);
            const y = this.random(cols);
            if (map[x][y] === false) {
                map[x][y] = true;
                counts++;
            }
        }

        return this.transformPoint(map);
    }

    protected transformPoint(map: Array<Array<boolean>>) {
        return map.map(col => col.map(row => new Point(row)));
    }

    protected random(n: number) {
        return Math.floor(Math.random() * n);
    }
}
