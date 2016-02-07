'use strict';


angular.module('rs.putzplan', [])
.controller('PutzplanCtrl', ['$scope', function ($scope) {

  $scope.onPdf = function () {
    console.log('create pdf putzplan');

    /*jshint newcap: false */
    var pdf = new jsPDF('landscape');

    pdf.setFontSize(22);
    pdf.text(50,15, 'Putzplan ' + $scope.year);

    var x = 5;
    var y = 50;
    var xOffset = 24;
    var yOffset = 5;

    // iterate over month
    for(var month = 0; month<$scope.month.length; month++){
      y = 30;


      pdf.setFontSize(12);
      pdf.text(x,y, $scope.month[month]);

      // horizontal line around month names
      pdf.line(x-1,y-5,x+xOffset-1,y-5);
      pdf.line(x-1,y+1,x+xOffset-1,y+1);
      y = 35;


      // vertical lines
      pdf.line(x-1,y-10,x-1,y + 30*yOffset +1);

      // iterate over days in month
      for(var day=0; day<$scope.daysInMonth(month+1); day++){

        // horizontal lines
        pdf.line(x-1,y+1,x+xOffset-1,y+1);

        pdf.setFontSize(6);
        pdf.text(x,y, $scope.nameOfDay(day+1, month+1) + ', ' +  (day+1) + '.' + (month+1) + '.');

        if($scope.nameOfDay(day+1, month+1) === 'Sa'){
          pdf.setFontSize(8);
          pdf.text((x+10),y, $scope.workers[$scope.KalenderWoche(day+1, month+1) % $scope.workers.length]);
        }
        y += yOffset;
      }

      x += xOffset;
    }

    // last vertical line
    y = 35;
    pdf.line(x-1,y-10,x-1,y + 30*yOffset +1);

    pdf.save('putzplan.pdf');
  };

  $scope.daysInMonth = function (month) {
    return new Date($scope.year, month, 0).getDate();
  };

  $scope.nameOfDay = function (day, month) {
    var ArrayTage = [
    'So','Mo','Di','Mi','Do','Fr','Sa'];
    var weekDay = new Date($scope.year, month-1, day).getDay();
    return ArrayTage[weekDay];
  };

  // calculate weeks since 1.1.1970
  $scope.KalenderWoche = function (day, month) {

    var KWDatum = new Date($scope.year, month-1, day);
    var DonnerstagDat = new Date(KWDatum.getTime() + (3-((KWDatum.getDay()+6) % 7)) * 86400000);

    var secPerWeek = 1000*60*60*24*7;
    var KW = Math.floor(DonnerstagDat.getTime()/secPerWeek);

    return KW;

  };

  $scope.workers = ['Pilaftsis', 'Kilic', 'Schwarz'];

  $scope.month = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember'
  ];

  $scope.putzplan = [];

  // functions

  // actual day and year
  var d = new Date();
  $scope.currentDay = d.getDate();
  $scope.currentMonth = d.getMonth() + 1;
  $scope.year = d.getFullYear();

  // iterate over month
  for(var month = 0; month<$scope.month.length; month++){
    // iterate over days in month
    for(var day=0; day<$scope.daysInMonth(month+1); day++){
      if(!$scope.putzplan[day]){
        $scope.putzplan[day] = [];
      }
      $scope.putzplan[day][month] = {};
      $scope.putzplan[day][month].day = day+1;
      $scope.putzplan[day][month].month = month+1;
      $scope.putzplan[day][month].name = $scope.nameOfDay(day+1, month+1);

      if($scope.nameOfDay(day+1, month+1) === 'Sa'){
        $scope.putzplan[day][month].job = $scope.workers[$scope.KalenderWoche(day+1, month+1) % $scope.workers.length];
      }
    }
  }

}]);
