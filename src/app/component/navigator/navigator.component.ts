import {Component} from '@angular/core';
import {NavigationRoute} from '../../model/navigation-route';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {
  public NAV = NavigationRoute;

}
