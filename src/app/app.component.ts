import {Component, OnInit} from '@angular/core';
import {ServiceWorkerService} from './services/service-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-pwa';

  constructor(
    private serviceWorkerService: ServiceWorkerService
  ) {
  }

  public ngOnInit(): void {
    this.serviceWorkerService.initialize();
  }

}
