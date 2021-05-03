import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/shared/design/Tile';

@Component({
  selector: 'app-consulting-scenarios',
  templateUrl: './consulting-scenarios.component.html',
  styleUrls: ['./consulting-scenarios.component.scss'],
})
export class ConsultingScenariosComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'Two', cols: 1, rows: 10, color: 'lightgreen' },
    { text: 'One', cols: 3, rows: 2, color: 'lightblue' },
    { text: 'Three', cols: 1, rows: 7, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 7, color: '#DDBDF1' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
