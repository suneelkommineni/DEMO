import { Component, OnInit, ChangeDetectionStrategy, } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftpanelComponent implements OnInit {

    brands:any=[

        {
          "id":1,
          "brandname":"Mobiles"
        },        
        {
            "id":2,
            "brandname":"Chairs"
          },
          {
            "id":3,
            "brandname":"Accesories"
          },
          {
            "id":4,
            "brandname":"Furniture"
          },
          {
            "id":5,
            "brandname":"Home Deco"
          },
          {
            "id":6,
            "brandname":"Dressings"
          },
          {
            "id":7,
            "brandname":"Tables"
          }
        ]


  products:any=[
    {
        "id":1,
        "name":"iphone-5S",
        "price":20000,
        "color":"silver",
        "brand":"apple",
        "category":"1",
        "image":"",
    

    },{
        "id":2,
        "name":"iphone-5S",
        "price":20000,
        "color":"gold",
        "brand":"apple",
        "category":"1",
        "image":"",
       
    },
{
        "id":3,
        "name":"iphone-5S",
        "price":20000,
        "color":"black",
        "brand":"apple",
        "category":"1",
        "image":""
    },
      {
        "id":4,
        "name":"iphone-6S",
        "price":25000,
        "color":"silver",
        "brand":"apple",
        "category":"1",
        "image":""
    },
{
        "id":5,
        "name":"iphone-6S",
        "price":25000,
        "color":"black",
        "brand":"apple",
        "category":"1",
        "image":""
    },
{
        "id":3,
        "name":"iphone-6S",
        "price":25000,
        "color":"gold",
        "brand":"apple",
        "category":"1",
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
        "category":"1",
        "image":""
    },
    {
        "id":8,
        "name":"J7",
        "price":90000,
        "color":"white",
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
        "color":"white",
        "brand":"Nilkamal",
        "category":2,
        "image":""
    },

];

radiovalue: any;
 values : string[]; 
 getProductDetails: any = [];  
  constructor(private router: Router) { }

  ngOnInit() {

//console.log(this.brands);
    
  }


  serchitemscheckbox(x){  
     const radiovalue = x.target.value;     
     this.getProductDetails = [];
     this.products.map((value)=> {       
        if(radiovalue == value.brand){ 
             this.getProductDetails = value; 
          //   console.log(this.getProductDetails);
          //localStorage.setItem("productsdata",JSON.stringify(this.getProductDetails)); 
     }
             
  }
    )
     this.router.navigate(['/searchproducts',radiovalue]); 
  }

  serchdropdown(d){

    const dropdownvalue = d.target.value;    
    this.router.navigate(['/searchproducts',dropdownvalue]); 
  }
   


}
