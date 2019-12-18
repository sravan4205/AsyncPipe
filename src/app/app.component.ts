import { Component } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  observable: Observable<number>

  ngOnInit() {
    this.observable = Observable.create(observer => {
      let value = 0
      const interval = setInterval(() => {
        observer.next(value)
        value++
      }, 1000)

      return () => clearInterval(interval)
    })
  }
}