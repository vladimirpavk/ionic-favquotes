import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';

//@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quoteService: QuotesService
  ) {
    this.quoteService.getFavoriteQuotes
  }

}
