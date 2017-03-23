describe('some spy examples', () => {
  let car = {
    name: 'Audi',
    changeName: function (name) {
      this.name = name;
      return name;
    }
  };

  let carSpy = sinon.spy(car, 'changeName');

  car.changeName('BMW');
  car.changeName('Ford');

  it('should count proper number of calls', () => {
    expect(carSpy).to.have.been.calledTwice;
  });

  it('should be called with proper arguments', () => {
    expect(carSpy.firstCall).to.have.been.calledWith('BMW');
    expect(carSpy.secondCall).to.have.been.calledWith('Ford');
    expect(carSpy.lastCall).to.have.been.calledWith('Ford');
  });

  it('should return proper value', () => {
    expect(carSpy.firstCall).to.have.returned('BMW');
    expect(carSpy.lastCall).to.have.returned('Ford');
  });

  carSpy.restore();

});
