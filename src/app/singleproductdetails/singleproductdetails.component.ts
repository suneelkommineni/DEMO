import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproductdetails',
  templateUrl: './singleproductdetails.component.html',
  styleUrls: ['./singleproductdetails.component.css']
})
export class SingleproductdetailsComponent implements OnInit {
    id:any;
  products:any=[
    {
        "id":1,
        "name":"iphone-5S",
        "price":20000,
        "color":"silver",
        "brand":"apple",
        "category":1,
        "image":""

    },{
        "id":2,
        "name":"iphone-5S",
        "price":20000,
        "color":"gold",
        "brand":"apple",
        "category":1,
        "image":""
    },
{
        "id":3,
        "name":"iphone-5S",
        "price":20000,
        "color":"black",
        "brand":"apple",
        "category":1,
        "image":""
    },
      {
        "id":4,
        "name":"iphone-6S",
        "price":25000,
        "color":"silver",
        "brand":"apple",
        "category":1,
        "image":""
    },
{
        "id":5,
        "name":"iphone-6S",
        "price":25000,
        "color":"black",
        "brand":"apple",
        "category":1,
        "image":""
    },
{
        "id":3,
        "name":"iphone-6S",
        "price":25000,
        "color":"gold",
        "brand":"apple",
        "category":1,
        "image":""
    },

{
        "id":6,
        "name":"iphone-x",
        "price":90000,
        "color":"silver-grey",
        "brand":"apple",
        "category":"1",
        "image":""
    },
    {
        "id":7,
        "name":"iphone-x",
        "price":90000,
        "color":"white",
        "brand":"apple",
        "category":1,
        "image":""
    },
    {
        "id":8,
        "name":"Chairs",
        "price":90000,
        "color":"white",
        "brand":"apple",
        "category":2,
        "image":""
    },
    {
        "id":9,
        "name":"chair",
        "price":90000,
        "color":"white",
        "brand":"nilkamal",
        "category":2,
        "image":""
    },

];
  getProductDetails: any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

    this.route.params.subscribe((params) => {
        const urlWellId = params['term'];
        this.id = urlWellId; 
        this.senddetails();    

    });

  }
  senddetails(){

    this.products.map((value)=> {
        
        if(this.id==value.id){
            this.getProductDetails = value;
        }
    })

  }

}