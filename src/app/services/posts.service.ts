import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import {  AngularFireObject }  from '@angular/fire/compat/database';


import * as firebase from 'firebase/app';
import 'firebase/database';

import { Posts } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private dbPath = '/post';

  postRef: AngularFireList<Posts>;
  singlePost: AngularFireObject<Posts>; 

  constructor( public db: AngularFireDatabase,) { 
    this.postRef = db.list(this.dbPath);
    this.singlePost = db.object(this.dbPath + 'NMII_TJJQqRc-eV-6YJ')
  }

  getAll(): AngularFireList<Posts> {
    console.log("------------->",this.postRef)
    return this.postRef;
  }

  savePost(post: Posts) :Promise<any> {
    console.log("*****************", typeof(post.date))
    return this.postRef.push(post).then((res) => {
      return res;
    });
  }
 

 /* getSinglePost(key: string): AngularFireObject<Posts> {
    const itemPath =  `${this.dbPath}/${key}`;
    this.singlePost = this.db.object(itemPath)
    return this.singlePost
  } */

  //Fetch Single Post Object
GetStudent() {
this.singlePost = this.singlePost;
console.log("---single post --------------" , this.singlePost);
return this.singlePost; }

  delete(key: string): Promise<void> {
    return this.postRef.remove(key);
  }

 
}
