import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipesconcept';
  info="lorem isyum Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad eius impedit ipsa quos excepturi? Aut laborum tempora amet, excepturi modi minima voluptates eaque cumque beatae ducimus consequatur officiis id?"
  course={
    title:"mean stack",
    students:123456,
    emp:"full satck",
    rating:4.52325849,
    price:50.42514,
    releasedate:new Date(1995,8,4),
    time:"11 pm"
  }
  filesArray=[
    {
    name:"form 16",
    type:'pdf',
    size:53264152,
  },
  {
    name:"all details",
    type:'excel',
    size:1245152,
  },
  {
    name:"excel letter",
    type:'pdf',
    size:5421642,
  }
]
}
