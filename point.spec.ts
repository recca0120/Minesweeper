import { Point } from './point';

describe('點', () => {
    function createMap() {
        const rows = 5;
        const cols = 5;
        const map = (new Array(rows)).fill(null).map(() => (new Array(cols)).fill(false));
        map[1][3] = true;
        map[2][1] = true;
        map[2][3] = true;
        map[3][1] = true;
        map[3][2] = true;
        map[3][3] = true;
        map[4][4] = true;

        return map;
    }

    it('是炸彈', () => {
        const fakeMap = createMap();
        expect(new Point(1, 3, fakeMap).isMine()).toBe(true);
        expect(new Point(2, 1, fakeMap).isMine()).toBe(true);
        expect(new Point(4, 4, fakeMap).isMine()).toBe(true);
    });

    it('非炸彈', () => {
        const fakeMap = createMap();
        expect(new Point(1, 4, fakeMap).isMine()).toBe(false);
        expect(new Point(2, 4, fakeMap).isMine()).toBe(false);
        expect(new Point(3, 4, fakeMap).isMine()).toBe(false);
    });

    it('計算炸彈數', () => {
        const fakeMap = createMap();
        const point = new Point(2, 2, fakeMap);

        expect(point.isMine()).toBe(false);
        expect(point.getNumber()).toEqual(6);
    });

    it('改變點擊狀態', () => {
        const fakeMap = createMap();
        const point = new Point(2, 2, fakeMap);

        expect(point.isClick()).toBe(false);
        point.click();
        expect(point.isClick()).toBe(true);
    });
});
