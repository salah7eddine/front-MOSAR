import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  langs: any = [
    { value: 'en', viewValue: 'English' },
    { value: 'fr', viewValue: 'French' },
    // { value: 'de', viewValue: 'German' },
    // { value: 'it', viewValue: 'Italian' },
    // { value: 'ja', viewValue: 'Japanese' },
  ];
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
