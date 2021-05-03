import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-scenarios-filter',
  templateUrl: './scenarios-filter.component.html',
  styleUrls: ['./scenarios-filter.component.scss'],
})
export class ScenariosFilterComponent implements OnInit {
  criteria: any = [
    {
      nameCriteria: 'Driving Delegation',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
    {
      nameCriteria: 'Driving Assist',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
    {
      nameCriteria: 'Safety Assist',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
    {
      nameCriteria: 'Parking Assist',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
    {
      nameCriteria: 'Typologie de scénario',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
    {
      nameCriteria: 'Rating',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
    {
      nameCriteria: 'Géographie',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
    {
      nameCriteria: 'Contexte routier',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
    {
      nameCriteria: 'Type de scénario',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
    {
      nameCriteria: 'Base de roulage',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
    {
      nameCriteria: 'Type de véhicule',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
    {
      nameCriteria: 'Homologation ',
      sousCriteria: ['Tout cocher', 'AD L3', 'AD L4'],
    },
  ];

  menuX: number = 0;
  menuY: number = 0;
  @ViewChild(MatMenuTrigger, { static: false })
  menu!: MatMenuTrigger;

  constructor() {}

  ngOnInit(): void {}
}
