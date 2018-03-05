import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['Sara White party 02/22/2018', 'Tom Smith party 02/23/2018', 'Cessilia Rodriges Birth Day Party 02/24/2018 ']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
    //comment
  }

}
