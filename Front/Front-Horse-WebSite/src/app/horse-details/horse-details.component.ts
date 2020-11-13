import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Horse } from '../horse';
import { HorseService } from '../horse.service';
import { HorsesListComponent } from '../horses-list/horses-list.component';

@Component({
  selector: 'app-horse-details',
  templateUrl: './horse-details.component.html',
  styleUrls: ['./horse-details.component.css'],
})
export class HorseDetailsComponent implements OnInit {
  @Input() horse: Horse;

  constructor(
    private horseService: HorseService,
    private listComponent: HorsesListComponent
  ) {}

  ngOnInit(): void {}

  deleteHorse() {
    this.horseService.deleteHorse(this.horse.id).subscribe(
      (data) => {
        console.log(data);
        this.listComponent.reloadData();
      },
      (error) => console.log(error)
    );
  }
}
