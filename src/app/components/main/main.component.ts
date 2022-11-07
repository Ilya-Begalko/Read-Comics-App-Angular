import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  comics: any[] = [];

  constructor(private http: HttpClient) {
    this.initComics();
  }

  initComics() {
    this.http
      .get<any>('../../assets/data/spider-man.json')
      .subscribe((data) => {
        this.comics = data;
        console.log(this.comics);
      });
  }

  openComics(url: string) {
    console.log(url);
    window.open(url, '_blank');
  }
  downloadComics(url: string) {
    console.log(url);
  }
}
