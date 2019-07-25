import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { FormtemplateComponent } from './component/formtemplate/formtemplate.component';
import { GraphQLlistComponent } from './component/graph-qllist/graph-qllist.component';
import { GraphQLformComponent } from './component/graph-qlform/graph-qlform.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormtemplateComponent },
  { path: 'graphqllist', component: GraphQLlistComponent },
  { path: 'graphqlform', component: GraphQLformComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
