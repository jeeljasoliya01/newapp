import { GigabyteToMegabytePipe } from './gigabyte-to-megabyte.pipe';

describe('GigabyteToMegabytePipe', () => {
  it('create an instance', () => {
    const pipe = new GigabyteToMegabytePipe();
    expect(pipe).toBeTruthy();
  });
});
