import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';


import * as firebase from 'firebase/app';
import 'firebase/database';

import { Blog } from '../models/blog.model';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private dbPath = '/blog';

  blogRef: AngularFireList<Blog>;

  constructor( public db: AngularFireDatabase,) { 
    this.blogRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Blog> {
    console.log("------------->",this.blogRef)
    return this.blogRef;
  }

  saveBlog(blog: Blog) :Promise<any> {
    console.log("*****************", typeof(blog.date))
    return this.blogRef.push(blog).then((res) => {
      return res;
    });
  }

  delete(key: string): Promise<void> {
    return this.blogRef.remove(key);
  }
}
