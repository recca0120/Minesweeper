import { Minesweeper } from './minesweeper';
import { MapCreator } from './mapcreator';

describe('踩地雷', () => {
    it('建立新遊戲', () => {
        const cols = 8;
        const rows = 5;
        const mines = 10;
        const sweeper = new Minesweeper(new MapCreator);
        const map = sweeper.start(cols, rows, mines).getMap();
        let counts = 0;
        map.forEach((rows) => {
            rows.forEach((item) => {
                if (item == true) {
                    counts++;
                }
            });
        })

        expect(map).toEqual(expect.any(Array));
        expect(map.length).toEqual(cols);
        expect(map[0].length).toEqual(rows);
        expect(counts).toEqual(mines);
    });
});
