describe('testing stubs', () => {

  it('should force function to throw an error', () => {
    const car = {
      name: 'Audi',
      saveCarInDb: () => {}
    };

    let saveStub = sinon.stub(car, 'saveCarInDb');
    saveStub.throws('save fail'); // force saveCarInDb to throw an error without waiting for server response etc.

    try {
      car.saveCarInDb();
    } catch (err) {
      console.log(err.name); // 'save fail'
    }

    saveStub.restore();
  });

});
