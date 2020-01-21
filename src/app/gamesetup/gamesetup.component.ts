import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-gamesetup',
  templateUrl: './gamesetup.component.html',
  styleUrls: ['./gamesetup.component.scss']
})
export class GamesetupComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private BoardComponent: BoardComponent) {

  }

  ngOnInit() {
  }

  options = [
    { name: "option1", value: 3 },
    { name: "option2", value: 5 },
    { name: "option3", value: 10 }
  ]

  generateGrid(e) {
    var x; 
    if (1==1) {
      x = 3; 
    }
    if(x==3) {
      this.BoardComponent.newGame(x); 
    } else {
      if (e == 5) {
        this.BoardComponent.newGame(e);
      } else {
        if (e == 10) {
          this.BoardComponent.newGame(e);
        }
      }
    }  
    

  }

}
