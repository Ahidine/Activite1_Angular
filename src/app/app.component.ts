import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Activite';
	show=false;

	MyPost={
		title:'',
		content:''
	};
	addPost()
	{
		this.Posts.push(new Post(this.MyPost.title,this.MyPost.content));
		this.show=false;
	}
	add()
	{
		this.MyPost.title='';
		this.MyPost.content='';
		this.show=true;
	}


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
