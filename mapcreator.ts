'use strict';

export class MapCreator
{
    public create(cols: number, rows: number, mines: number)
    {
        const map = [];
        for (let i = 0; i < cols; i++) {
            map[i] = [];
            for (let j = 0; j < rows; j++) {
                map[i][j] = false;
            }
        }

        let counts = 0;
        while (counts < mines) {
            const x = this.random(cols);
            const y = this.random(rows);
            if (map[x][y] === false) {
                map[x][y] = true;
                counts++;
            }
        }

        return map;
    }

    protected random(n: number)
    {
        return Math.floor(Math.random()*n);
    }
}
