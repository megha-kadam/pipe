import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Ireel } from './models/reels.interface';
import { Iplayer } from './models/player';
import { cricketers } from './const/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus fugiat dicta autem quidem quaerat consectetur totam, ipsam delectus deserunt et, repudiandae illum voluptas, cupiditate quod facere officia? Minima, molestias veniam';

  reelsArr : Array<Ireel> = [
    {
      title : 'Angular',
      isLike : false,
      likeCount : 876,
      id : 1
    },
    {
      title : 'Javascript',
      isLike : false,
      likeCount : 987,
      id : 2
    },
    {
      title : 'HTML',
      isLike : false,
      likeCount : 454,
      id : 3
    },
    {
      title : 'SCSS',
      isLike : true,
      likeCount : 566,
      id : 4
    },
    
  ]

  playersArr : Array<Iplayer> = cricketers;

  searchValue : string = '';
  searchField : string = 'name';
}
