import { PetGenderPipe } from './pet-gender.pipe';

describe('PetGenderPipe', () => {
  it('create an instance', () => {
    const pipe = new PetGenderPipe();
    expect(pipe).toBeTruthy();
  });
});
