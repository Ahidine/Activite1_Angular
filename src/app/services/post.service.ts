import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import {Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
@Injectable({
	providedIn: 'root'
})
export class PostService {
	postList: Post[]=[];
	postSubject= new Subject<Post[]>();
	emitPost()
	{
		this.postSubject.next(this.postList);
	}
	getPosts()
	{
		firebase.database().ref('/posts').on('value',
			(data) => {
					this.postList=data.val() ? data.val() : [];
					this.emitPost();
			} )
	}
	savePosts()
	{
		firebase.database().ref('/posts').set(this.postList);
	}
	AddPost(post: Post)
	{
		this.postList.push(post);
	//	console.log(post);
		this.savePosts()
		this.emitPost();
	}
	RemovePost(post: Post)
	{
		this.postList.splice(this.getPostByIndex(post),1);
		this.savePosts();
		this.emitPost();
	}
	getPostByIndex(post: Post)
	{
		const index= this.postList.findIndex( 
			(postCh) => {
				if(post==postCh)
					return true;
			});
		return index;
	}
	lovefunction(indice,post)
	{
		const index= this.getPostByIndex(post);

		if (indice==='add') {
			this.postList[index].loveIts++;
			
		}
		else if(indice==='rmv')
		{
			this.postList[index].loveIts--;
		}
		firebase.database().ref('/posts/'+index).update({loveIts: this.postList[index].loveIts});
		this.emitPost();
	}

	constructor() { 

	}
}
