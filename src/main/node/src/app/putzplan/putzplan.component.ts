import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-putzplan',
  templateUrl: './putzplan.component.html',
  styleUrls: ['./putzplan.component.css']
})
export class PutzplanComponent implements OnInit {
  init: boolean;
  month: string[];
  putzplan: string[];
  private year: number;
  private currentDay: number;
  private currentMonth: number;
  private workers: [string, string, string];

  constructor() {
    const d = new Date();
    this.currentDay = d.getDate();
    this.currentMonth = d.getMonth() + 1;
    this.year = d.getFullYear();
    this.month = [
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

    this.workers = ['Rasha/Idris', 'Kilic', 'Schwarz'];
    this.putzplan = [];

    // create putzplan
    // iterate over month

    for ( let day = 0; day < 31; day++){
      const row = [];
      for (let month = 0; month < this.month.length; month++){
        const currDay = {};
        currDay.day = day + 1;
        currDay.month = month + 1;
        currDay.name = '';
        currDay.job = '';
        if ( day < this.daysInMonth(month + 1)){
          currDay.name = this.nameOfDay(day + 1, month + 1);
        }

        if (this.nameOfDay(day + 1, month + 1) === 'Sa'){
          currDay.job = this.workers[this.KalenderWoche(day + 1, month + 1) % this.workers.length];
        }

        row.push(currDay);
      }

      this.putzplan.push(row);
    }
  }

  onPdf() {
    console.log('create pdf putzplan');

    /*jshint newcap: false */
    const pdf = new jsPDF('landscape');

    pdf.setFontSize(22);
    pdf.text(50, 15, 'Putzplan ' + this.year);

    let x = 5;
    let y = 50;
    const xOffset = 24;
    const yOffset = 5;

    // iterate over month
    for (let month = 0; month < this.month.length; month++){
      y = 30;


      pdf.setFontSize(12);
      pdf.text(x, y, this.month[month]);

      // horizontal line around month names
      pdf.line(x - 1, y - 5, x + xOffset - 1, y - 5);
      pdf.line(x - 1, y + 1, x + xOffset - 1, y + 1);
      y = 35;


      // vertical lines
      pdf.line(x - 1, y - 10, x - 1, y + 30 * yOffset + 1);

      // iterate over days in month
      for (let day = 0; day < this.daysInMonth(month + 1); day++){

        // horizontal lines
        pdf.line(x - 1, y + 1, x + xOffset - 1, y + 1);

        pdf.setFontSize(6);
        pdf.text(x, y, this.nameOfDay(day + 1, month + 1) + ', ' +  (day + 1) + '.' + (month + 1) + '.');

        if (this.nameOfDay(day + 1, month + 1) === 'Sa'){
          pdf.setFontSize(8);
          pdf.text((x + 10), y, this.workers[this.KalenderWoche(day + 1, month + 1) % this.workers.length]);
        }
        y += yOffset;
      }

      x += xOffset;
    }

    // last vertical line
    y = 35;
    pdf.line(x - 1, y - 10, x - 1, y + 30 * yOffset + 1);

    pdf.save('putzplan.pdf');
  }

  daysInMonth (month) {
    return new Date(this.year, month, 0).getDate();
  }
  nameOfDay (day, month) {
    const ArrayTage = [
      'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const weekDay = new Date(this.year, month - 1, day).getDay();
    return ArrayTage[weekDay];
  }

  // calculate weeks since 1.1.1970
  KalenderWoche (day, month) {

    const KWDatum = new Date(this.year, month - 1, day);
    const DonnerstagDat = new Date(KWDatum.getTime() + (3 - ((KWDatum.getDay() + 6) % 7)) * 86400000);

    const secPerWeek = 1000 * 60 * 60 * 24 * 7;
    const KW = Math.floor(DonnerstagDat.getTime() / secPerWeek);

    return KW;

  }

  ngOnInit() {
    this.init = true;
  }



}
