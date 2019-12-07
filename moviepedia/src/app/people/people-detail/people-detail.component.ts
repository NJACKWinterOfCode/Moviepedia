import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  people: any;
  crews: any;


  constructor(private router: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['peopleID'];
      this.peopleService.getDetail(id).subscribe(data => {
        this.people = data;
      });
      this.peopleService.getCrew(id).subscribe(data => {
        this.crews = data['cast'];
      });
    });
  }

}
