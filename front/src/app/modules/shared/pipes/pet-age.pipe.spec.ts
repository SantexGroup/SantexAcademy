import { PetAgePipe } from './pet-age.pipe';

describe('PetAgePipe', () => {
  it('create an instance', () => {
    const pipe = new PetAgePipe();
    expect(pipe).toBeTruthy();
  });
});
