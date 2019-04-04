import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-searchproducts',
  templateUrl: './searchproducts.component.html',
  styleUrls: ['./searchproducts.component.css']
})
export class SearchproductsComponent implements OnInit {
  data: any;
  id: any;
  products:any=[
    {
        "id":1,
        "name":"iphone-5S",
        "price":20000,
        "color":"silver",
        "brand":"apple",
        "category":1,
        "image":"",
    

    },{
        "id":2,
        "name":"iphone-5S",
        "price":20000,
        "color":"gold",
        "brand":"apple",
        "category":1,
        "image":"",
       
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
        "category":1,
        "image":""
    },
    {
        "id":7,
        "name":"iphone-x",
        "price":90000,
        "color":"black",
        "brand":"apple",
        "category":1,
        "image":""
    },
    {
      "id":8,
      "name":"J7",
      "price":90000,
      "color":"black",
      "brand":"samsung",
      "category":"1",
      "image":""
  },
  {
      "id":8,
      "name":"Chairs",
      "price":90000,
      "color":"white",
      "brand":"samsung",
      "category":2,
      "image":""
  },
  {
      "id":9,
      "name":"Chairs",
      "price":90000,
      "color":"black",
      "brand":"Nilkamal",
      "category":2,
      "image":""
  },
];
  getProductDetails: any = [];
  constructor(private route: ActivatedRoute) { 


    /* for localstorage  */
    // this.data = JSON.parse(localStorage.getItem('productsdata'));
    /* for localstorage  */


  }

  ngOnInit(){ 
 
    this.route.params.subscribe((params) => {      
        const urlWellId = params['categoryID'];
        this.id = urlWellId; 
        this.searchdetails();     
  });
}

  searchdetails(){
    this.getProductDetails = [];
    this.products.map((value)=> {        
        if(this.id == value.category || this.id == value.brand || this.id == value.color || this.id == value.price ){             
        this.getProductDetails.push({   
          "id":value.id,
          "name":value.name,
          "price":value.price,
          "color":value.color,
          "brand":value.brand,
          "category":value.category,
          "image":""       
        })
        console.log(this.getProductDetails);
        }})

  }




}
