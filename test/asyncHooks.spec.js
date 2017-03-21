describe('using async hooks', () => {

  let arr = [];

  before((done) => {
    setTimeout(() => {
      arr.push('elem');
      done();
    }, 1000);
  });

  describe('testing find', () => {
    it('should add elem', (done) => {
      expect(arr).to.have.length(1);
      done();
    });
  });

});
