import { Component, Input, OnInit } from '@angular/core';
import { DataModel } from 'src/app/services/data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() details!: DataModel;
  constructor() {}

  ngOnInit(): void {}
}
