import { Component, OnInit } from '@angular/core';
import { SearchproductsComponent } from '../searchproducts/searchproducts.component';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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
        "color":"white",
        "brand":"apple",
        "category":1,
        "image":""
    },
    {
        "id":8,
        "name":"J7",
        "price":90000,
        "color":"white",
        "brand":"samsung",
        "category":1,
        "image":""
    },
    {
        "id":9,
        "name":"chair",
        "price":90000,
        "color":"white",
        "brand":"samsung",
        "category":2,
        "image":""
    },

];

 radiovalue: any;
 getbrandwiseProductDetails: any;
   
  constructor(private router: Router) { }

  ngOnInit() {

   //console.log(this.products);
    
  }


  serchitemscheckbox(e){

     const radiovalue = e.target.value;
     this.products.map((value)=> {

         //console.log(value.brand);
        //console.log(radiovalue);
        // alert(this.radiovalue);
        // alert(value.brand);

        if(radiovalue == value.brand){   

           //console.log(value);

            this.getbrandwiseProductDetails = value;  
             console.log(this.getbrandwiseProductDetails);             

            localStorage.setItem("productsdata",JSON.stringify(this.getbrandwiseProductDetails));         
           
           

        }

    }
    )
    this.router.navigate(['/searchproducts']); 

  }
   


}
