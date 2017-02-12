describe('import', function () {
  it('should work', function (done) {
    return import('../src/myModule.js').then(function (result) {
      expect(result.name).toBe('a module')
      done();
    });
  });
});