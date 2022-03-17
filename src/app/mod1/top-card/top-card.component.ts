import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataModel } from 'src/app/services/data.model';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss'],
})
export class TopCardComponent implements OnInit, AfterViewInit {
  list!: DataModel[];

  constructor(private api: ApiService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.api.getCards().then((data) => {
      console.log(data);
      this.list = data;
    });
  }
}
