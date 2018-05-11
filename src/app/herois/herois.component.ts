import { Component, OnInit } from '@angular/core';
import { Heroi } from '../hero';
import { HEROES } from '../mock-herois';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {

  heroes = HEROES;
  
  selectedHero : Heroi;

  onSelect(hero:Heroi):void{
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
