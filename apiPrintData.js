var apiPrintData;
apiPrintData = (function() {
  function apiPrintData(bitcoin) {
    this.bitcoin = bitcoin;
  }
  apiPrintData.prototype.getDataJson = function(done) {
    return this.bitcoin.findAll().then(function(dataPoints) {
      dataPoints = dataPoints.map(function(d) {
        return d.get(null, {
          plain: true
        });
      });
      return done(null, JSON.stringify(dataPoints));
    });
  };
  return apiPrintData;
})();

module.exports = apiPrintData;