import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Horse } from '../horse';
import { HorseService } from '../horse.service';

@Component({
  selector: 'app-horses-list',
  templateUrl: './horses-list.component.html',
  styleUrls: ['./horses-list.component.css'],
})
export class HorsesListComponent implements OnInit {
  horses: Observable<Horse[]>;

  constructor(private horseService: HorseService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.horses = this.horseService.getHorseList();
  }
}
