import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  private quotesPage = QuotesPage;
  private quoteCollection:{category:string, quotes:Quote[], icon:string}[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  ngOnInit(){
    this.quoteCollection = quotes;        
  }

  private buttonClicked(quote:{category:string, quotes:Quote[], icon:string}){       
    //console.log(quote);
    this.navCtrl.push(QuotesPage, quote);
  }

}
