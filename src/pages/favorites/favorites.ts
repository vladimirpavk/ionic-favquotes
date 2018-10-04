import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';

//@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quoteService: QuotesService,
    private modalCtrl: ModalController
  ) { }

  private onCardClicked(quote:Quote){
    let modalDialog = this.modalCtrl.create(QuotePage, quote);
    modalDialog.onDidDismiss(
      (data)=>
        {
          if(data!=null){
            this.quoteService.pullFromFavoriteQuotes(data);
          }
        }
    );
    modalDialog.present();
  }

}
