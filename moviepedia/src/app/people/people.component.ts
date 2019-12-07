import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people_list: any;
  search_result: any;
  person: any;

  constructor(public peopleService: PeopleService) {

    this.peopleService.getPeople().subscribe(data => {
      this.people_list = data['results'];
    });
   }

  ngOnInit() {
  }

  searchpeople() {
    this.peopleService.searchPerson(this.person).subscribe(data => {
      this.search_result = data['results'];
    });
  }
}
