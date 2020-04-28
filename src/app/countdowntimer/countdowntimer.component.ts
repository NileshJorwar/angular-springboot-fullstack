import {Component, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.css']
})
export class CountdowntimerComponent implements OnInit {
  private diff: number;
  eventtext: string;
  eventdate: string;
  eventtime: string;
  currentdate: string;
  timeremaining: string;
  private count$: Observable<number>;
  private subs: Subscription;

  constructor() {
  }

  ngOnInit(): void {

  }

  public startEvent() {
    this.currentdate = new Date().toISOString().slice(0, 10);

    if (this.eventdate != null && this.eventtime == null) {
      this.diff = Math.floor(((new Date(this.eventdate).getTime() + 18000000) - new Date().getTime()) / 1000);
    }

    const ts = interval(1000);
    ts.subscribe(x => {
      this.diff = Math.floor(((new Date(this.eventdate).getTime() + 18000000) - new Date().getTime()) / 1000);
      this.test(this.diff);
    });

    // setInterval(() => {
    //   this.diff = Math.floor(((new Date(this.eventdate).getTime() + 18000000) - new Date().getTime()) / 1000);
    //   this.test(this.diff);
    // }, 1000);

  }

  test(differ) {
    let t, days, hours, minutes, seconds;
    t = differ;
    days = Math.floor(t / 86400);
    t = t - days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t = t - hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t = t - minutes * 60;
    seconds = t % 60;
    this.timeremaining = days + ' Days ' + hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds to go.......';
    return days + ' Days ' + hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds to go.......';
  }

}
