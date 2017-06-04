import { Minesweeper } from './minesweeper';
import { MapCreator } from './mapcreator';
import { Point } from './point';

describe('踩地雷', () => {
    function createMap(rows: number, cols: number) {
        const map = (new Array(rows)).fill(null).map(() => (new Array(cols)).fill(false));
        map[1][3] = true;
        map[2][6] = true;
        map[4][4] = true;

        return map.slice().map((col, x) => {
            return col.map((row, y) => {
                return new Point(x, y, map);
            }
        });
    }

    it('點擊地圖', () => {
        const cols = 8;
        const rows = 5;
        const mines = 3;
        const fakeMap = createMap(cols, rows);

        const creator = new MapCreator();
        spyOn(creator, 'create').and.returnValue(fakeMap);

        const game = new Minesweeper(creator);
        game.start(cols, rows, mines);

        expect(creator.create).toHaveBeenCalled();
        expect(game.click(1, 3)).toBe(true);
        expect(game.click(2, 6)).toBe(true);
        expect(game.click(4, 4)).toBe(true);

        expect(game.click(0, 0)).toBe(false);
        expect(game.click(3, 3)).toBe(false);

        expect(game.getPoint(1, 3).isClick()).toBe(true);
        expect(game.getPoint(2, 6).isClick()).toBe(true);
        expect(game.getPoint(4, 4).isClick()).toBe(true);

        expect(game.getPoint(0, 0).isClick()).toBe(true);
        expect(game.getPoint(3, 3).isClick()).toBe(true);
    });
});
