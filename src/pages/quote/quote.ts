import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit{

  private selectedQuote:Quote;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService,
    private viewCtrl: ViewController
  ) { }  

  ngOnInit(){
    this.selectedQuote = this.navParams.data;
  }

  private onUnFavoriteClick(){
    this.viewCtrl.dismiss(this.selectedQuote);
  }

  private onCloseClicked(){
    this.viewCtrl.dismiss(null);
  }

}
