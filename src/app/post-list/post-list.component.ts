import { Component,Input, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit,OnDestroy {

  constructor(private postService: PostService,
              private router: Router,
              ) { }
 posts: Post[];
 postSubs: Subscription;

  ngOnInit() {
    this.postSubs=this.postService.postSubject.subscribe( 
      (post: Post[]) => {
        this.posts=post;
      }
       );
    this.postService.emitPost();
    this.postService.getPosts();
  }

  onRemove(post)
  {
    this.postService.RemovePost(post);
  }

  lovefunction(indice,post)
  {
    this.postService.lovefunction(indice,post);
  }
  ngOnDestroy()
  {
    this.postSubs.unsubscribe();
  }

}
