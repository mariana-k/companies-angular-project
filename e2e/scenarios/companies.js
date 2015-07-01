'use strict';

var CompanyList    = require('../pages/CompanyList.js');

describe('companies app', function() {

  var companies = new CompanyList();

  beforeEach(function() {
    companies.loadAll();
  });

  it('should load a list of companies', function() {
    expect(companies.count()).toBeGreaterThan(1);
  });
});
