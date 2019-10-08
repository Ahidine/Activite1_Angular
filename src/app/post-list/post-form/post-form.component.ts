import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
	postFrom: FormGroup;


  constructor( private fromBuilder: FormBuilder,
  			   private postService: PostService,
  			   private router: Router) { }

  ngOnInit() {
  	this.initForm();
  }
  initForm()
  {
  	this.postFrom=this.fromBuilder.group(
  	{
  		title: ['',Validators.required],
  		content: ['',Validators.required],
  	});
  }
  onSave()
  {

  	this.postService.AddPost(new Post(this.postFrom.get('title').value,
  									  this.postFrom.get('content').value));
  	this.router.navigate(['/posts']);
  }
}
