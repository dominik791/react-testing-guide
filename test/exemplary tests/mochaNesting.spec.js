describe('top level describe', () => {
  describe('middle describe', () => {
    it('should return 4', () => {
      let square = 2 * 2;

      expect(square).to.equal(4);
    });
    describe('low level describe', () => {
      it('should be emtpy', () => {
        expect('').to.be.empty;
      });
    });
  });
});
