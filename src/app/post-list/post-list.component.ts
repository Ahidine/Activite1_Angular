import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }
  @Input() posts  ;

  ngOnInit() {
  }
  Supprimer(post)
  {
  	console.log(this.posts.indexOf(post));
  	this.posts.splice(this.posts.indexOf(post),1)
  }
  lovefunction(indice,post)
  {
  	if (indice==='add') {
  		// code...
  		post.loveIts++;
  	}
  	else if(indice==='rmv')
  	{
  		post.loveIts--
  	}
  }

}
