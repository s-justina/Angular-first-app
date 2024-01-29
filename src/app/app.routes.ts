import { Routes } from '@angular/router';
import {HobbiesComponent} from "./hobbies/hobbies.component";
import {BlogComponent} from "./blog/blog.component";
import {AccountComponent} from "./account/account.component";

export const routes: Routes = [{
  path:"",
  component: HobbiesComponent
},{
  path: "blog",
  component:BlogComponent
},{
  path: "account",
  component: AccountComponent
}];
