"use strict";

var sleepTecApp = angular.module('sleepTec', ['n3-line-chart']);

/**
 * Create a controller named 'MainController'.  The array argument specifies the controller
 * function and what dependencies it has.  We specify the '$scope' service so we can have access
 * to the angular scope of view template.
 */
sleepTecApp.controller('MainController', ['$scope', function($scope) {

  $scope.main = {};
  $scope.main.title = 'SleepTec';
  console.log("testing");

  $scope.data = {
    dataset0: [{
      x: 0,
      val_0: 0
    }, {
      x: 1,
      val_0: 0.993
    }, {
      x: 2,
      val_0: 1.947
    }, {
      x: 3,
      val_0: 2.823
    }, {
      x: 4,
      val_0: 3.587
    }, {
      x: 5,
      val_0: -4.207
    }, {
      x: 6,
      val_0: 4.66
    }, {
      x: 7,
      val_0: 4.927
    }, {
      x: 8,
      val_0: 0
    }]
  };

  $scope.data2 = {
    dataset0: [{
      x: 0,
      val_0: 0
    }, {
      x: 1,
      val_0: 0.993
    }, {
      x: 2,
      val_0: 1.947
    }, {
      x: 3,
      val_0: 2.823
    }, {
      x: 4,
      val_0: 3.587
    }, {
      x: 5,
      val_0: -4.207
    }, {
      x: 6,
      val_0: 4.66
    }, {
      x: 7,
      val_0: 4.927
    }, {
      x: 8,
      val_0: 0
    }]
  };

  $scope.options = {
    series: [{
      axis: "y",
      dataset: "dataset0",
      key: "val_0",
      label: "An area series",
      color: "#1f77b4",
      type: ['column'],
      id: 'mySeries0'
    }],
    axes: {
      x: {
        key: "x",
        min: 0.5,
        max: 7.5,
        tickFormat: function(value, index) {
          return "3/" + (10 - index);
        }
      },
      y: {
        min: -7,
        max: 7,
      }
    }
  };
  $scope.options2 = {
    series: [{
      axis: "y",
      dataset: "dataset0",
      key: "val_0",
      label: "lable",
      color: "#1f77b4",
      type: ['dot','line'],
      id: 'mySeries0'
    }],
    axes: {
      x: {
        key: "x",
        min: 0.5,
        max: 7.5,
        tickFormat: function(value, index) {
          if (index < 3) return ((8 + 2*index)+" pm");
          else return ((index - 2)*2+" am");
        }
      },
      y: {
        min: -7,
        max: 7,
      }
    }
  };


}]);
