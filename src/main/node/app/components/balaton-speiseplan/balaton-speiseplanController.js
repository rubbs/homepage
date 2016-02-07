'use strict';

/**
* @ngdoc function
* @name homepageApp.controller:BalatonSpeiseplanCtrl
* @description
* # BalatonSpeiseplanCtrl
* Controller of the homepageApp
*/
angular.module('rs.balaton', [])
.controller('BalatonSpeiseplanCtrl', ['$scope', '$sanitize', '$filter', 'balatonSp', function ($scope, $sanitize, $filter, balatonSp) {

    $scope.status = 0;

    $scope.days = balatonSp.get();
    $scope.actDay = $scope.days[0];

    // Flache liste mit allen zutaten anlegen
    $scope.einkaufsliste = [];
    $scope.shops = [];
    for(var d=0; d<$scope.days.length; d++){
        var day = $scope.days[d];
        for(var z in day.zutaten){
            var zutat = day.zutaten[z];
            zutat.date = day.date;
            zutat.gericht = day.gericht;
            $scope.einkaufsliste.push(zutat);

            if($scope.shops.indexOf(zutat.quelle) === -1 && zutat.quelle.length > 0){
                $scope.shops.push(zutat.quelle);
            }
        }
    }
    $scope.actShop = $scope.shops[0];

    $scope.allgemeines = balatonSp.allgemeines();
    for(var a=0; a<$scope.allgemeines.length; a++){
        var allg = $scope.allgemeines[a];
        var zutat1 = {
            'name': allg,
            'quelle': 'schaper',
            'date': new Date('1/1/2000'),
            'gericht': 'allgemeines',
            'menge': ''
        };
        $scope.einkaufsliste.push(zutat1);
    }



    $scope.onDay = function(day){
        $scope.actDay = day;
    };

    $scope.onShop = function(shop){
        $scope.actShop = shop;
    };



    $scope.onSpeiseplanPdf = function () {
        var signSize = 4;

        /*jshint newcap: false */
        var pdf = new jsPDF('landscape');



        // iterate over days
        for (d in $scope.days){
            var day = $scope.days[d];
            console.log('########################');
            console.log($scope.days[d]);
            var date = $filter('date')(day.date, 'dd.MM.yy');
            console.log('########################');

            // create new site if not 1st site
            if(d > 0){
                pdf.addPage();
            }

            // write title
            pdf.setFontSize(22);
            pdf.text(20,20, 'Speiseplan ' + date);
            pdf.setFontSize(16);
            pdf.text(120,17, day.gericht);
            pdf.text(120,23, day.nachtisch || '');
            pdf.setFontSize(14);
            pdf.text(250,20, day.verantwortlich || '');

            pdf.line(10, 30, 270, 30);


            pdf.setFontSize(18);
            pdf.text(40,40, 'Zutaten');
            pdf.text(120,40, 'Nachtisch');
            pdf.text(180,40, 'Rezept');

            pdf.setFontSize(12);
            pdf.fromHTML(day.rezept, 180,50,{
                'width': 100
            });



            // Liste Zutaten
            var beginZutaten = 50;
            for( var z in day.zutaten ){
                var zutat = day.zutaten[z];
                var yval = signSize*2*z+beginZutaten;
                pdf.text(15,yval, zutat.menge);
                var lines = pdf.splitTextToSize(zutat.name, 50);
                pdf.text(40,yval, lines);
            }

            for( var n in day.zutatenNt ){
                var nt = day.zutatenNt[n];
                var y = signSize*2*n+beginZutaten;
                pdf.text(95,y, nt.menge);
                pdf.text(120,y, nt.name);
            }
        }

        pdf.save('SpeiseplanBalaton.pdf');
    };

    $scope.onPdf = function () {

        var signSize = 5;
        var offset = 40;
        var itemsPerPage = 25;

        /*jshint newcap: false */
        var pdf = new jsPDF();

        for(var s=0; s<$scope.shops.length; s++){

            // create list for actual shop
            var shop = $scope.shops[s];
            var filtered = $filter('filter')($scope.einkaufsliste, {quelle:shop});

            // create pdf
            if(s > 0){
                pdf.addPage();
            }

            pdf.setFontSize(22);
            pdf.text(20,20, 'Einkaufsliste ' + shop);

            pdf.setFontSize(14);

            for(var z=0; z<filtered.length; z++){
                var yval = signSize*2*(z%itemsPerPage)+offset;
                if(z%itemsPerPage === 0 && z !== 0){
                    pdf.addPage();
                }
                //pdf.line(10, yval - signSize/2, 15, yval - signSize/2);
                //pdf.line(10, yval - signSize*1.5, 15, yval - signSize*1.5 );
                pdf.setFontSize(14);
                pdf.text(15,yval, filtered[z].menge);
                pdf.text(40,yval, $filter('limitTo')(filtered[z].name, 50));
                pdf.setFontSize(10);
                pdf.text(130,yval, $filter('limitTo')(filtered[z].gericht, 20));
                pdf.text(180,yval, $filter('date')(filtered[z].date, 'dd.MM.'));
            }
        }
        pdf.save('EinkaufslisteBalaton.pdf');
    };




}]);
