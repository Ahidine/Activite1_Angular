import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Activite';
	show=false;
// un objet dont l'intret et de stocker les donnes afin d'ajouter un nouveau post
	MyPost={
		title:'',
		content:''
	};
	// methode dont l'objectif est d'ajouter un post dans le tableau qui contient tous les posts

	addPost()
	{
		this.Posts.push(new Post(this.MyPost.title,this.MyPost.content));
		this.show=false;
	}
	// une fonction dont l'objectif est de vider les champs puisque j utilise binding dans
	// deux sens et d afficher le div qui contient les champs necessaire pour creer un nouveau
	// post  a savoir que il y a une condition sur  la variable show 
	add()
	{
		this.MyPost.title='';
		this.MyPost.content='';
		this.show=true;
	}

// le tableau des objets de type Post
	Posts=[
	new Post('post 1','akjsjksjskjiwjwhwjwsndjhjdwhjewphdui23nbihbdeibd'),
	new Post('post 2','akjsjksjskjiwjwhwjwsndjhjdwhjewphdui23nbihbdeibd'),
	new Post('post 3','akjsjksjskjiwjwhwjwsndjhjdwhjewphdui23nbihbdeibd'),
	new Post('post 4','akjsjksjskjiwjwhwjwsndjhjdwhjewphdui23nbihbdeibd'),
	] 
}
class Post  {
	title: string;
	content: string;
	loveIts: number;
	created_at: Date
	constructor(title,content) {
		// code...
		this.title=title;
		this.content=content;
		this.loveIts=0;
		this.created_at=new Date;
	}
}
