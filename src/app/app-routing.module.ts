import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {NavigationRoute} from './model/navigation-route';
import {CreateTopicComponent} from './component/create-topic/create-topic.component';

const routes: Routes = [
  {path: NavigationRoute.HOME, component: HomeComponent},
  {path: NavigationRoute.CREATE_TOPIC, component: CreateTopicComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
