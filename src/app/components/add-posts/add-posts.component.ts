import { Component, OnInit } from '@angular/core';
import {Posts} from '../../models/posts.model';
import {PostsService} from '../../services/posts.service'
import {Router} from '@angular/router';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUpload } from 'src/app/models/file-upload';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {


  post : Posts= {
    title: "",
    category:"",
    location:"",
    date: new Date(),
    description: "",
    price:0
  };

  selectedLevel: any;
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
   imageSrc: any;

  constructor(private postService: PostsService, 
              private router: Router, 
              private uploadService: FileUploadService
              ) { }

  ngOnInit(): void {
  }

  savePost() {
    this.post.date =  this.post.date.getFullYear()+'/'+(this.post.date.getMonth()+1)+'/'+this.post.date.getDate(); 
    this.postService.savePost(this.post).then(res => {
      this.router.navigate(['/post']);
    }).catch(err => {
      console.log(err)
    })
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
  }
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }

}
