import {ApplicationRef, Injectable} from '@angular/core';
import {SwUpdate, UpdateAvailableEvent} from '@angular/service-worker';
import {concat, interval} from 'rxjs';
import {first} from 'rxjs/operators';

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
      console.log('Check for updates!');
      this.checkForUpdatesAndReloadOnNewVersion();
    }, this.intervalTimer);
  }

  public checkForUpdatesAndReloadOnNewVersion(): void {
    this.swUpdate.checkForUpdate().then(
      () => {
        if (this.updateAvailableEvent) {
          window.location.reload();
          console.log('App updated');
        }
      }
    );
  }
}
