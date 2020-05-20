import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  model: any ={};
  constructor(private postService: PostService) { }

  ngOnInit() {
    
  }
  Register() {
    this.postService.Register(this.model).subscribe(() => {
      alert('successfull subscribed');
    }, error => {
      alert("error")
    });
  }

}
