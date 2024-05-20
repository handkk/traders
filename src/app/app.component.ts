import { Component, OnInit } from '@angular/core';
import { MainService } from './pages/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSpinning = false;

  constructor(
    private mainService: MainService
  ) {
    this.mainService.spinning.subscribe(loading => {
      this.isSpinning = loading;
    });
  }

  ngOnInit() {
    
  }
}
