'use strict';

/**
* @ngdoc service
* @name homepageApp.balatonSp
* @description
* # balatonSp
* Service in the homepageApp.
*/
angular.module('rs.balaton')
.service('balatonSp', function balatonSp() {

    this.allgemeines = function (){
        var allgemeines = [
            'Salatkräuter',
            'Dressing',
            'Essig',
            'Öl',
            'Zucker',
            'Gemüsebrühe',
            'zimt',
            'Vanillezucker',
            'Parmesan',
            'Mondamin',
            'Spülmittel',
            'Spüllappen',
            'MetallSpüler',
            'Mülltüten',
            'gr. Müllsäcke',
            'Gefrierbeutel',
            'Gummis',
            'Zewa',
            'Zahnstocher (f. Wraps)',
            'Wäscheklammern',
            'Geschirrtücher',
            'Feuerzeug / Streichhölzer',
            'Geburtstagskuchen',
        ];
        return allgemeines;
    };

    this.get = function () {
        var tn = 18;
        var dauer = 13;
        var days = [
            {
                'date': new Date('01/01/2015'),
                'gericht': 'Frühstück (täglich)',
                'rezept': '' + tn + ' Personen 14x Frühstück ',
                'zutaten': [
                    {
                        'name': 'Brot anfang',
                        'menge': '20',
                        'quelle': 'Nagel'
                    },
                    {
                        'name': 'Brot',
                        'menge': '?? Stück',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Marmelade',
                        'menge': Math.round(tn*dauer*0.04) + ' Gläser',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Nutella',
                        'menge': Math.round(tn*dauer*0.04) + ' Gläser',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Honig',
                        'menge': Math.round(tn*dauer*0.01) + ' Gläser',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Margarine',
                        'menge': Math.round(tn*dauer*0.04) + ' Stk',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Milch Frühstück',
                        'menge': Math.round(tn*dauer*0.25) + ' l',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Kaba',
                        'menge': Math.round(tn*dauer*0.005) + ' Pkg',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Müsli',
                        'menge': Math.round(tn*dauer*0.03) + ' Pkg',
                        'quelle': 'Magde'
                    },
                    {
                        'name': 'Cornflakes',
                        'menge': Math.round(tn*dauer*0.04) + ' Pkg',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Haferflocken',
                        'menge': Math.round(tn*dauer*0.02) + ' Pkg',
                        'quelle': 'schaper'
                    }
                ]
            },
            {
                'date': new Date('01/02/2015'),
                'gericht': 'Vesper (täglich)',
                'rezept': '' + tn + ' Personen 14x Vesper ',
                'zutaten': [
                    {
                        'name': 'Brot',
                        'menge': '?? Stück',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Käse',
                        'menge': tn*40/100 + ' kg',
                        'quelle': 'Kienzle'
                    },
                    {
                        'name': 'Wurst für Vesper',
                        'menge': '',
                        'quelle': 'Kienzle'
                    },
                    {
                        'name': 'Karotten Vesper Tag 1-3',
                        'menge': '3 kg',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Gurken Vesper Tag 1-3',
                        'menge': '12 Stk',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Tomaten Vesper Tag 1-3',
                        'menge': '9 kg',
                        'quelle': 'Gemüse'
                    }
                ]
            },
            {
                'date': new Date('08/25/2015'),
                'gericht': 'Vesper',
                'rezept': 'Vesper für die Fahrt im Infobrief, erste Mahlzeit ist Frühstück am Balaton. <br> Für MA: Vesper zentral besorgen??',
                'zutaten': [
                    {
                        'name': 'Hefezopf',
                        'menge': '?? Stück',
                        'quelle': 'Nagel'
                    },
                    {
                        'name': 'Nusszopf',
                        'menge': '?? Stück',
                        'quelle': 'Nagel'
                    }
                ]
            },
            {
                'date': new Date('08/26/2015'),
                'gericht': 'Rinderburger',
                'verantwortlich': 'Ruben',
                'nachtisch': 'Obst',
                'rezept': '<ul><li>2 Burger pro Person</li></ul>',
                'zutaten': [
                    {
                        'name': 'Rinderburger',
                        'menge': '50 Stück',
                        'quelle': 'Waldhof'
                    },
                    {
                        'name': 'Tafelbrötchen',
                        'menge': '50 Stück',
                        'quelle': 'Nagel'
                    },
                    {
                        'name': 'Eissalat',
                        'menge': '2 Stück',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Tomaten',
                        'menge': '1 kg',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Gurke',
                        'menge': '1 Stück',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Zwiebel',
                        'menge': '250 g',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Ketchup',
                        'menge': '500 ml',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Burgersoße',
                        'menge': '500 ml',
                        'quelle': 'schaper'
                    }
                ],
                'zutatenNt':[
                    {
                        'name': 'Äpfel',
                        'menge': '25 Stück',
                        'quelle': 'Gemüse'
                    }
                ]
            },
            {
                'date': new Date('08/27/2015'),
                'verantwortlich': 'Phillip',
                'gericht': 'Maultaschen, Kartoffelsalat, gr. Salat',
                'nachtisch': 'Doppelkekse',
                'rezept': 'Maultaschen aus der brühe <br> Kartoffelsalat verfeinern mit Zwiebel und Gemüsebrühe',
                'zutaten': [
                    {
                        'name': 'Maultaschen ' + 'gerollt: ' + tn*3 + ' kleine: ' + tn*4,
                        'menge': '',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Maultaschen glutenfrei' ,
                        'menge': '3 stück',
                        'quelle': 'Ruben'
                    },
                    {
                        'name': 'Kartoffelsalat',
                        'menge': '5 kg',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'gr. Salat (Eisbergsalat)',
                        'menge': '2 Stk',
                        'quelle': 'Gemüse'
                    }
                ],
                'zutatenNt': [
                    {
                        'name': 'Doppelkekse',
                        'menge': '3 Pkg',
                        'quelle': 'schaper'
                    }
                ]
            },
            {
                'date': new Date('08/28/2015'),
                'verantwortlich': 'Rebecca',
                'gericht': 'Käsespätzle Salat',
                'nachtisch': 'Pudding',
                'rezept': 'Spätzle kochen (genügend Salz!) <br> Spätzle, Käse, Sahne und Zwiebel im Topf schichten (muss heiß sein)',
                'zutaten': [
                    {
                        'name': 'Spätzle',
                        'menge': '2,5 kg',
                        'quelle': 'Fenchelhof'
                    },
                    {
                        'name': 'Spätzle glutenfrei',
                        'menge': '200 g',
                        'quelle': 'Ruben'
                    },
                    {
                        'name': 'Käse für Käsespätzle',
                        'menge': '500 g',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Röstzwiebel f. Käsespätzle',
                        'menge': '2 Pkg',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Zwiebel',
                        'menge': '5 Stk',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Sahne',
                        'menge': '1 l',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Eisbergsalat',
                        'menge': '1 Stk',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Gurke',
                        'menge': '2 Stk',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Tomate',
                        'menge': '1 kg',
                        'quelle': 'Gemüse'
                    }
                ],
                'zutatenNt': [
                    {
                        'name': 'Puddingpulver',
                        'menge': 'f. 2l Milch',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Milch',
                        'menge': '2 l',
                        'quelle': 'schaper'
                    }
                ]
            },
            {
                'date': new Date('08/29/2015'),
                'verantwortlich': 'Valentin',
                'gericht': 'Gulasch mit Reis',
                'nachtisch': 'Joghurt',
                'rezept': '!!!!!EINKAUFEN GEHEN!!!! <br><br>' +
                '<h4>Gulasch</h4>' +
                '<ul>' +
                '<li>Fleisch in Daumendicke Würfel schneiden</li>' +
                '<li>Zwiebel fein scheiden</li>' +
                '<li>Fleisch gut anbraten (durchbraten!). Nicht alles auf einmal, lieber in Etappen. Muss scharf angebraten werden!</li>' +
                '<li>Zwiebel und weiteres Gemüse zugeben</li>' +
                '<li>ablöschen mit Wasser</li>' +
                '<li>erst jetzt würzen!!</li>' +
                '<li>garen (mind 1h damit das Fleisch weich wird)</li>' +
                '<li>abschmecken mit Rotwein</li>' +
                '<li>ggf binden mit Mondamin</li>' +
                '</ul>' +
                '<br>' +
                'evtl. Reis für Reissalat Samstag schon mitkochen'
                ,
                'zutaten': [
                    {
                        'name': 'Fleisch',
                        'menge': '' + tn*0.1 + ' kg',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Zwiebel',
                        'menge': '5 Stück',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Tomaten',
                        'menge': '500 g',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Paprika',
                        'menge': '5 Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Reis',
                        'menge': '' + 50*tn + ' g',
                        'quelle': 'Ruben'
                    },
                    {
                        'name': 'Maggifix Gulasch',
                        'menge': '20 Portionen',
                        'quelle': 'schaper'
                    }
                ],
                'zutatenNt':[
                    {
                        'name': 'Joghurt',
                        'menge': tn + ' Stück',
                        'quelle': 'ungarn'
                    }
                ]
            },
            {
                'date': new Date('08/30/2015'),
                'verantwortlich': 'Phillip',
                'gericht': 'Grillen (Würstle, Feta, Zucchini, Reissalat, gemischter Salat)',
                'nachtisch': 'Stockbrot',
                'rezept': 'Maultaschen aus der brühe <br> Kartoffelsalat verfeinern mit Zwiebel und Gemüsebrühe',
                'zutaten': [
                    {
                        'name': 'Würstle',
                        'menge': 1.5*tn + 'Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Feta',
                        'menge': 0.5*tn + 'Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Zucchini',
                        'menge': '5 große',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Reis',
                        'menge': '500 g',
                        'quelle': 'Ruben'
                    },
                    {
                        'name': 'Mais',
                        'menge': '2 kl Dosen',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Paprika',
                        'menge': '5 Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Karotten Erbsen Dose (Reissalat)',
                        'menge': '1 Stk',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Mayonaise',
                        'menge': '500 g',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'saure Sahne',
                        'menge': '500 g',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'gemischter Salat (Gurke/Paprika/...',
                        'menge': '',
                        'quelle': 'ungarn'
                    }
                ],
                'zutatenNt': [
                    {
                        'name': 'Mehl',
                        'menge': '1 kg',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Hefe',
                        'menge': '2 Würfel',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Margarine',
                        'menge': '100 g',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Milch',
                        'menge': '1/2 l',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Salz',
                        'menge': '3-4 TL',
                        'quelle': 'schaper'
                    }
                ]
            },
            {
                'date': new Date('08/31/2015'),
                'verantwortlich': 'Ruben',
                'gericht': 'Linsen mit Spätzle',
                'nachtisch': 'Obst',
                'rezept': 'Linsen morgens einlegen zum aufquellen<br>' +
                'Zuerst wird die gewürfelte Zwiebel angedünstet, dann das Gemüse (mit Kartoffel). ' +
                'Dann wird der Speck mit angebraten, dann die Linsen hinzugeben. Es können eingeweichte Linsen sein, müssen aber nicht. ' +
                'Jetzt gießen wir die Brühe (ca 4l Gemüsebrühe) an und bei eingeweichten Linsen ca. 15 Minute kochen, bei trockenen Linsen entsprechend länger. ' +
                'Die meisten angebotenen Linsen können ohne Einweichen gekocht werden. ' +
                ' Wenn die Linsen gar sind mit den Gewürzen abschmecken. Auch dann den Essig zugeben.',
                'zutaten': [
                    {
                        'name': 'Linsen',
                        'menge': '750 g',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Spätzle',
                        'menge': '1,5 kg',
                        'quelle': 'Fenchelhof'
                    },
                    {
                        'name': 'Zwiebel',
                        'menge': '5 Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Lauch',
                        'menge': '5 Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Bauchspeck vakuumiert',
                        'menge': '1 kg',
                        'quelle': 'Kienzle'
                    },
                    {
                        'name': 'Kartoffeln',
                        'menge': '500 g',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Karotten',
                        'menge': '500 g',
                        'quelle': 'Gemüse'
                    }
                ],
                'zutatenNt': [
                    {
                        'name': 'Obst',
                        'menge': tn*1.5 + ' Stk',
                        'quelle': 'ungarn'
                    }
                ]
            },
            {
                'date': new Date('09/01/2015'),
                'verantwortlich': 'Johanna',
                'gericht': 'Salatteller, Kartoffelsuppe',
                'nachtisch': 'Milchreis',
                'rezept': 'Kartoffelsuppe<br>mit weniger als 10l Wasser anfangen und ggf noch dazu geben',
                'zutaten': [
                    {
                        'name': 'Kartoffel',
                        'menge': '1,5 kg',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Wasser',
                        'menge': '10 l',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Karotten',
                        'menge': '500 g',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Lauch',
                        'menge': '2 Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Kohlrabi',
                        'menge': '2 Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Salat für Salatteller',
                        'menge': '??',
                        'quelle': 'ungarn'
                    }
                ],
                'zutatenNt': [
                    {
                        'name': 'Milchreis',
                        'menge': '500 g',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Milch',
                        'menge': '2 l',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Apfelmus',
                        'menge': '4 Gläser',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Kirschen',
                        'menge': '4 Gläser',
                        'quelle': 'schaper'
                    }
                ]
            },
            {
                'date': new Date('09/02/2015'),
                'verantwortlich': 'Rebecca + Johanna',
                'gericht': 'Nudeln mit Tomatensoße und Käse-Sahne Soße',
                'nachtisch': 'Eis',
                'rezept': 'Maultaschen aus der brühe <br> Kartoffelsalat verfeinern mit Zwiebel und Gemüsebrühe',
                'zutaten': [
                    {
                        'name': 'Spirelli',
                        'menge': '2,5 kg',
                        'quelle': 'Fenchelhof'
                    },
                    {
                        'name': 'passierte Tomaten gewürzt',
                        'menge': '3 l',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Soja-Hack nach belieben',
                        'menge': '',
                        'quelle': 'Johanna'
                    },
                    {
                        'name': 'Sahne',
                        'menge': '0,5 l',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Milch',
                        'menge': '1,5 l',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Sahne',
                        'menge': '0,5 l',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Schmelzkäse',
                        'menge': '4 Pkg',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Zwiebel',
                        'menge': '4 Stk',
                        'quelle': 'Gemüse'
                    }
                    ,
                    {
                        'name': 'Bauchspeck',
                        'menge': '500 g',
                        'quelle': 'Kienzle'
                    }
                ],
                'zutatenNt': [
                ]
            },
            {
                'date': new Date('09/03/2015'),
                'verantwortlich': 'Ruben',
                'gericht': 'Wraps',
                'nachtisch': 'Obst (evtl in Schokolade eintunken)',
                'rezept': 'Wraps werden frisch an der Bar zubereitet',
                'zutaten': [
                    {
                        'name': 'Brot (große)',
                        'menge': tn*3 + ' Stk',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Joghurt / Zatziki',
                        'menge': '2 kg',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Kidney-Bohnen',
                        'menge': '2 Dosen',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Mais',
                        'menge': '2 Dosen',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Karotten (geraspelt)',
                        'menge': '1 kg',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Tomaten',
                        'menge': '2 kg',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Gurke',
                        'menge': '2 Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Fleisch wenns geschickt ist, sonst Feta',
                        'menge': tn*0.1 + ' kg',
                        'quelle': 'schaper'
                    }
                ],
                'zutatenNt': [
                    {
                        'name': 'Obst',
                        'menge': tn*1.5 + ' Stk',
                        'quelle': 'ungarn'
                    }
                ]
            },
            {
                'date': new Date('09/04/2015'),
                'verantwortlich': 'Rebecca',
                'gericht': 'Reis mit Gemüse',
                'nachtisch': 'Paradiescreme',
                'rezept': 'Reis und Gemüse extra kochen. Erst mischen wenn beides fertig ist. Dann auch Feta + Sahne zugeben.' +
                '<br>Gemüse kann variiert werden. Insgesamt ca. 3kg Gemüse verwenden',
                'zutaten': [
                    {
                        'name': 'Reis',
                        'menge': '1 kg',
                        'quelle': 'Ruben'
                    },
                    {
                        'name': 'Mais',
                        'menge': '2 Dosen',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Kidney-Bohnen',
                        'menge': '2 Dosen',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Zucchini',
                        'menge': '5 Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Paprika',
                        'menge': '8 Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Aubergine',
                        'menge': '3 Stk',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Feta',
                        'menge': '500 g',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Saure Sahne',
                        'menge': '500 g',
                        'quelle': 'schaper'
                    }
                ],
                'zutatenNt': [
                    {
                        'name': 'Paradiescreme',
                        'menge': 'f. 3l Milch',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Milch',
                        'menge': '3 l',
                        'quelle': 'schaper'
                    }
                ]
            },
            {
                'date': new Date('09/05/2015'),
                'verantwortlich': 'Phillip',
                'gericht': 'Grillen',
                'nachtisch': 'Marshmallows',
                'rezept': '',
                'zutaten': [
                    {
                        'name': 'Grillfleisch',
                        'menge': '',
                        'quelle': 'ungarn'
                    },
                    {
                        'name': 'Kartoffeln',
                        'menge': '5 kg',
                        'quelle': 'Gemüse'
                    },
                    {
                        'name': 'Zutaten f. gem. Salat',
                        'menge': '',
                        'quelle': 'ungarn'
                    }
                ],
                'zutatenNt': [
                    {
                        'name': 'Marshmallows',
                        'menge': '',
                        'quelle': 'schaper'
                    }
                ]
            },
            {
                'date': new Date('09/06/2015'),
                'verantwortlich': 'Johanna',
                'gericht': 'Chilli',
                'nachtisch': 'Joghurt',
                'rezept': '',
                'zutaten': [
                    {
                        'name': 'Tomaten passiert gewürzt',
                        'menge': '10 l',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Soja Hack',
                        'menge': '',
                        'quelle': 'Johanna'
                    },
                    {
                        'name': 'Tomaten passiert gewürzt',
                        'menge': '10 l',
                        'quelle': 'schaper'
                    },
                    {
                        'name': 'Brot / Baguette',
                        'menge': '',
                        'quelle': 'ungarn'
                    }
                ],
                'zutatenNt': [
                    {
                        'name': 'Joghurt',
                        'menge': tn + ' Stk',
                        'quelle': 'ungarn'
                    }
                ]
            },
            {
                'date': new Date('09/07/2015'),
                'verantwortlich': 'Ruben',
                'gericht': 'Resteessen',
                'nachtisch': '',
                'rezept': 'Einmal Küche zusammenfegen, scharf anbraten, Ketchup drüber. Fertig!',
                'zutaten': [
                    {
                        'name': 'Besen, Kehrwisch, Kutterschaufel',
                        'menge': '',
                        'quelle': ''
                    }
                ],
                'zutatenNt': [
                ]
            }
        ];

        return days;
    };
});
