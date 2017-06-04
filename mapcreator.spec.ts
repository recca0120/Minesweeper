import { MapCreator } from './mapcreator';

describe('地圖', () => {
    it('建立地圖', () => {
        const cols = 8;
        const rows = 5;
        const mines = 10;
        const creator = new MapCreator();
        const map = creator.create(cols, rows, mines);
        let counts = 0;
        map.forEach((rows) => {
            rows.forEach((item) => {
                if (item.isMine() == true) {
                    counts++;
                }
            });
        });
        expect(map).toEqual(expect.any(Array));
        expect(map[0].length).toEqual(cols);
        expect(map.length).toEqual(rows);
        expect(counts).toEqual(mines);
    });
});
