import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MbodyComponent } from './mbody/mbody.component';


export const Approute:Routes=[
{
path:'',
component: MbodyComponent
},
{
    path:'user',
    component: UserComponent
}
];