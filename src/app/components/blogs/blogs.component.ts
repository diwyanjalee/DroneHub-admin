import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog.model';
import {BlogService} from '../../services/blog.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blog : Blog= {
    btitle: "",
    examplefile:"",
    blogtext:"",
    date: new Date()
   
  };

  selectedLevel: any
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
  }

  saveBlog() {
    this.blog.date =  this.blog.date.getFullYear()+'/'+(this.blog.date.getMonth()+1)+'/'+this.blog.date.getDate(); 
    this.blogService.saveBlog(this.blog).then(res => {
      this.router.navigate(['/blog']);
    }).catch(err => {
      console.log(err)
    })
  }

}
