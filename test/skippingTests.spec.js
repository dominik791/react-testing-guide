describe.skip('skip tests suite', () => {
  it('this will not run', () => {
    expect(1).to.equal(2);
  });
});

describe('introducing only()', () => {
  it('only this test will run', () => {
    expect(true + true).to.equal(2);
  });
  it('this will not run', () => {
    expect([]).to.have.length(0);
  });
  it('this will not run as well', () => {
    expect([1]).to.have.length(1);
  });
});
