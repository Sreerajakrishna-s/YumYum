import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  foods=[
    {
      title:'Biriyani',
      image:'https://media.istockphoto.com/id/979968618/photo/egg-biryani-basmati-rice-cooked-with-masala-roasted-eggs-and-spices-and-served-with-yogurt.jpg?s=612x612&w=0&k=20&c=D88XFI0NnWhL1pBtCkUTGS1t4RyV7xl9H25dgBsgKIA=',
      description:'frrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvf',
      price:'23'
    },
    {
      title:'Fried Rice',
      image:'https://media.istockphoto.com/id/1292433455/photo/healthy-homemade-fried-rice.jpg?s=612x612&w=0&k=20&c=uz4Xrd_pDSfQdVqf-D9hvV8aijqXiPhbed8DMv0KR8E=',
      description:'frrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvf',
      price:'23'
    },
    {
      title:'Dosa',
      image:'https://media.istockphoto.com/id/1300800758/photo/crispy-cooked-dosa-thosai-dosai.jpg?s=612x612&w=0&k=20&c=4j3n7z5wiIhAD15Ea6XbJDbYRdaMXcJbBD_f_z0G9XQ=',
      description:'frrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvf',
      price:'23'
    },
    {
      title:'Nuggets',
      image:'https://media.istockphoto.com/id/638376386/photo/fried-chicken-nuggets.jpg?s=612x612&w=0&k=20&c=CQGZVlXwEbD8mGANih_Tipvi5x2ZlZz9OjZvWODte-Q=',
      description:'frrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvf',
      price:'23'
    },
    {
      title:'coffee',
      image:'https://media.istockphoto.com/id/1145612951/photo/how-to-make-coffee-latte-art.jpg?s=612x612&w=0&k=20&c=eWySA066zDDKeC3WN9WGekBsgkPg9tlVquVtswliX_c=',
      description:'frrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvf',
      price:'23'
    },
    {
      title:'pongal',
      image:'https://media.istockphoto.com/id/1265235315/photo/ven-pongal-with-sambar-popular-indian-breakfast-food-tamil-nadu.jpg?s=612x612&w=0&k=20&c=8OQVCEqg4MGsyjHWhwwm0W0NOSX3bSXyyQTU04uFT8E=',
      description:'frrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvffrrvfvf',
      price:'23'
    }
  ]

}
