import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import {
  LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
   ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService
 } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  comics: any[] = [];
  numberOfComics: string = '';
  urlOfComics: any;

  displayBasic: boolean = false;

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

  openComics(comics: any) {
    this.displayBasic = true;

    this.numberOfComics = comics.section;
    this.urlOfComics = comics.path;
    console.log(this.urlOfComics);
  }
  downloadComics(url: string) {
    console.log(url);
  }
}
