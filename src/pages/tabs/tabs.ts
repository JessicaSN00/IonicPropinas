import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { FavoritesPage } from '../favorites/favorites';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritesPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
