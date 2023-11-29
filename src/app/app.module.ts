import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { PostsComponent } from './components/posts/posts.component';
import { UploadListComponent } from './uploads/upload-list/upload-list.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
//import { QAndAComponent } from './component/q-and-a/q-and-a.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    AccountsComponent,
    AddPostsComponent,
    BlogsComponent,
    CreateBlogComponent,
    PostsComponent,
    UploadListComponent,
    UploadFormComponent,
    EditPostComponent,
    //QAndAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireStorageModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
