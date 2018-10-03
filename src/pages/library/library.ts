import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotesPage } from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  private quotesPage = QuotesPage;  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quoteService: QuotesService
  ) {}

  ngOnInit(){}

  private buttonClicked(quote:{category:string, quotes:Quote[], icon:string}){           
    this.navCtrl.push(QuotesPage, quote);
  }

}
