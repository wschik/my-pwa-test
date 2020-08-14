import { Injectable } from '@angular/core';
import {SwUpdate, UpdateAvailableEvent} from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {

  private intervalTimer = 1000;
  private updateAvailableEvent: UpdateAvailableEvent;

  constructor(
    private swUpdate: SwUpdate
  ) { }

  public initialize(): void {
    this.swUpdate.available.subscribe( (update) => {
      this.updateAvailableEvent = update;
    });

    setInterval(() => {
      if (this.updateAvailableEvent) {
        window.location.reload();
      }
    }, this.intervalTimer);
  }
}
