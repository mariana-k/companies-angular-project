(function(){

  angular
       .module('companies')
       .controller('CompaniesController', [
        '$mdSidenav', '$http',
          CompaniesController
       ]);

  /**
   * Main Controller for the Companies App
   * @param $mdSidenav
   * @constructor
   */
  function CompaniesController($mdSidenav, $http) {
    var self = this;

    self.search = [];
    self.selected = null;
    self.companies = [];
    self.selectCompany = selectCompany;
    self.toggleList = toggleFiltersSidenav;
    self.addCompany = addCompany;

    // Load all registered companies
    $http.get('src/companies/data/companies.json').success(
      function(data) {
        var companies = data;
        self.companies = [].concat(companies);
        self.selected = companies[0];
      }
    );

    // *********************************
    // Internal methods
    // *********************************

    /**
     * hide or Show the 'filters' sideNav area
     */
    function toggleFiltersSidenav() {
        $mdSidenav('left').toggle();
    }

    /**
     * Select the current logos
     */
    function selectCompany(company) {
      self.selected = angular.isNumber(company) ? $scope.companies[company] : company;
    }

    function addCompany() {
      var newCompany = {
        "name": self.companyname,
        "logo": "svg-1",
        "services": self.companyservice,
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet lacinia erat in placerat. Sed aliquam, lorem eu fringilla tristique, enim neque iaculis augue."
      };

      if (document.getElementById("companyname").value || document.getElementById("companyservice").value) {
        self.companies.push(newCompany);
      }
    }

  }

})();
