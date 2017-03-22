describe('present some Chai examples', () => {
  it('should all pass', () => {
    expect(1).to.equal(1);
    expect(1).to.not.equal(2);

    expect([1, 2, 3]).to.have.length(3);
    expect([1, 2, 3]).to.eql([1, 2, 3]);

    expect('test').to.be.a('string');
    expect({ foo: 'bar' }).to.be.an('object');
    expect(null).to.be.a('null');
    expect(undefined).to.be.an('undefined');
    expect(new Error()).to.be.an('error');

    expect([1, 2, 3]).to.include(2);
    expect('foobar').to.contain('foo');

    // ok == truthy
    expect('everything').to.be.ok;
    expect(1).to.be.ok;
    expect(false).to.not.be.ok;
    expect(undefined).to.not.be.ok;
    expect(null).to.not.be.ok;

    expect(true).to.be.true;
    expect(false).to.be.false;

    expect([]).to.be.empty;
    expect('').to.be.empty;
    expect({}).to.be.empty;

    let foo = 'something';
    let bar;
    expect(foo).to.exist;
    expect(bar).to.not.exist;

    // ...and many others
  });
});
