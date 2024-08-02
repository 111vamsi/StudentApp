import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { PicodeInfoComponent } from './picode-info/picode-info.component';

//egar loader
//Routing lazy loading - Your assginment
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'students',
    component: StudentComponent,
    title: 'Student Page',
  },
  {
    path: 'pincode-search',
    component: PicodeInfoComponent,
    title: 'Pin Code Info',
  },
];
