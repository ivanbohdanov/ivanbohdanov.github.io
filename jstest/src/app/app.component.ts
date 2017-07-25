import { Component } from '@angular/core';
import { Questions } from '../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {}

  public window = window as any;
  public questions = Questions;
  public userName: string;

  ngAfterViewInit() {
    this.window.initHighlightingOnLoad();
  }

  downloadFile() {
    let parsedResponse = 'test';
    let blob = new Blob([parsedResponse], { type: 'text/csv' });
    let url = window.URL.createObjectURL(blob);

    if(navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, `Answers_from_${this.userName.replace('/ /g', '_')}.json`);
    } else {
        let a = document.createElement('a');
        a.href = url;
        a.download = `Answers_from_${this.userName.replace('/ /g', '_')}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }

}
