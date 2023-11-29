import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountsComponent} from './components/accounts/accounts.component';
import {AddPostsComponent} from './components/add-posts/add-posts.component';
import {AdminHomeComponent} from './components/admin-home/admin-home.component';
import {AdminProfileComponent} from './components/admin-profile/admin-profile.component';
import {BlogsComponent} from './components/blogs/blogs.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {PostsComponent} from './components/posts/posts.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'home', component: AdminHomeComponent},
  {path:'accounts', component: AccountsComponent},
  {path:'post/add', component: AddPostsComponent},
  {path:'blogs', component: BlogsComponent},
  {path: 'admin-profile', component: AdminProfileComponent},
  {path: 'post', component: PostsComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'post/edit',component:EditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
