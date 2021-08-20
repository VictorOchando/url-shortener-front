import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  newUrl: String = '';

  constructor(private urlsService: UrlsService) {}

  ngOnInit(): void {}

  addUrl() {
    console.log(this.newUrl);
    this.urlsService.addUrl(this.newUrl).then((r) => {
      console.log('new url added');
      console.log(r);
    });
  }
}
