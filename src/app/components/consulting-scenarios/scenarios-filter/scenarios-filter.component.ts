import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-scenarios-filter',
  templateUrl: './scenarios-filter.component.html',
  styleUrls: ['./scenarios-filter.component.scss'],
})
export class ScenariosFilterComponent implements OnInit {
  criteria: any = [
    {
      nameCriteria: 'Driving Delegation',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L3', completed: false, color: 'primary' },
        { name: 'AD L4', completed: false, color: 'primary' },
      ],
    },
    {
      nameCriteria: 'Driving Assist',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L5', completed: false, color: 'primary' },
        { name: 'AD L6', completed: false, color: 'primary' },
      ],
    },
    {
      nameCriteria: 'Safety Assist',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L7', completed: false, color: 'primary' },
        { name: 'AD L8', completed: false, color: 'primary' },
      ],
    },
    {
      nameCriteria: 'Parking Assist',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L9', completed: false, color: 'primary' },
        { name: 'AD L10', completed: false, color: 'primary' },
      ],
    },
    {
      nameCriteria: 'Typologie de scénario',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L11', completed: false, color: 'primary' },
        { name: 'AD L12', completed: false, color: 'primary' },
      ],
    },
    {
      nameCriteria: 'Rating',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L13', completed: false, color: 'primary' },
        { name: 'AD L14', completed: false, color: 'primary' },
      ],
    },
    {
      nameCriteria: 'Géographie',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L15', completed: false, color: 'primary' },
        { name: 'AD L16', completed: false, color: 'primary' },
      ],
    },
    {
      nameCriteria: 'Contexte routier',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L17', completed: false, color: 'primary' },
        { name: 'AD L18', completed: false, color: 'primary' },
      ],
    },
    {
      nameCriteria: 'Type de scénario',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L19', completed: false, color: 'primary' },
        { name: 'AD L20', completed: false, color: 'primary' },
      ],
    },
    {
      nameCriteria: 'Base de roulage',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L21', completed: false, color: 'primary' },
        { name: 'AD L22', completed: false, color: 'primary' },
      ],
    },
    {
      nameCriteria: 'Type de véhicule',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L23', completed: false, color: 'primary' },
        { name: 'AD L24', completed: false, color: 'primary' },
      ],
    },
    {
      nameCriteria: 'Homologation ',
      sousCriteria: [
        { name: 'Tout cocher', completed: false, color: 'primary' },
        { name: 'AD L25', completed: false, color: 'primary' },
        { name: 'AD L26', completed: false, color: 'primary' },
      ],
    },
  ];

  allComplete: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  updateAllComplete(sousCriteria: any) {
    let criteriaList = sousCriteria.slice(1);
    sousCriteria[0].completed =
      sousCriteria != null && criteriaList.every((c: any) => c.completed);
  }

  someComplete(sousCriteria: any): boolean {
    if (sousCriteria == null) {
      return false;
    }
    return (
      sousCriteria.filter((ssCriteria: any) => ssCriteria.completed).length >
        0 && !sousCriteria[0].completed
    );
  }

  setAll(completed: boolean, sousCriteria: any) {
    if (sousCriteria == null) {
      return;
    }
    sousCriteria.forEach(
      (ssCriteria: any) => (ssCriteria.completed = completed)
    );
  }

  onSearch() {
    console.log('search');
    let selectCriteriaArr: Array<any> = [];

    this.criteria.forEach((c: any) => {
      let selectCriteria = c.sousCriteria.filter(
        (sousCrit: any) => sousCrit.completed
      );

      if (selectCriteria != null) {
        selectCriteria.forEach((criteria: any) => {
          if (criteria.name != 'Tout cocher') selectCriteriaArr.push(criteria);
        });
      }
    });

    console.log(selectCriteriaArr);
  }
}
