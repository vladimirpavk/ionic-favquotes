import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  private quotes:{category:string, quotes:Quote[], icon:string}; 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl:AlertController,
    private quotesService:QuotesService
  ) {}

  ionViewDidLoad() {      
  }

  ngOnInit(){    
    this.quotes = this.navParams.data;    
  }

  private onAddToFavorites(selectedQuote:Quote){  
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure ?',
      message: 'Are you sure you want to add the quote ?',
      buttons: [
        {
          text: 'Yes',
          handler: ()=>{
            //console.log('Yes');
            this.quotesService.pushToFavoriteQuotes(selectedQuote);            
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: ()=>{
            console.log('No')
          }
        }
      ]
    });
    alert.present();
  }

  private removeFromFavorites(selectedQuote:Quote){
    const alert = this.alertCtrl.create({
      title: 'Remove Quote',
      subTitle: 'Are you sure ?',
      message: 'Are you sure you want to remove the quote ?',
      buttons: [
        {
          text: 'Yes',
          handler: ()=>{                      
            this.quotesService.pullFromFavoriteQuotes(selectedQuote);
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: ()=>{
            console.log('No')
          }
        }
      ]
    });
    alert.present();
  }
}
