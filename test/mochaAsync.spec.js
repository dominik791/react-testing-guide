describe('testing async', () => {

  // the following produces error
  it('where we forget the done() callback!', function (done) {
    setTimeout(function () {
      console.log('Test');
    }, 200);
  });

  // and this is ok
  it('where we forget the done() callback!', function (done) {
    setTimeout(function () {
      console.log('Test');
      done();
    }, 200);
  });

});
