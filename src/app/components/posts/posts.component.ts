import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts :any;
  constructor(private router: Router, private postsService: PostsService) { 
    this.retrievePosts();
    this.postsService.GetStudent();
  }

  ngOnInit(): void {
  }

  retrievePosts(): void {
    this.postsService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.posts = data;
      this.posts.reverse();
    });
  }

  openCreatePost() {
    this.router.navigate(['/post/add']);
  }

  openEditpost(){
    this.router.navigate(['/post/edit']);
  }

  setActiveTutorial(post:any) {
    console.log("----------", post);
  }

  
  deleteTutorial(post: any): void {
    this.postsService.delete(post.key)
      .then(() => {
        //this.message = 'The tutorial was updated successfully!';
      })
      .catch(err => console.log(err));
  }

}
