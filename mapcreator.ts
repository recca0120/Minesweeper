'use strict';

export class MapCreator
{
    constructor(private cols: number, private rows: number, private mines: number){}

    public create()
    {
        const map = [];
        for (let i = 0; i < this.cols; i++) {
            map[i] = [];
            for (let j = 0; j < this.rows; j++) {
                map[i][j] = false;
            }
        }

        let counts = 0;
        while (counts < this.mines) {
            const x = this.random(this.cols);
            const y = this.random(this.rows);
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
