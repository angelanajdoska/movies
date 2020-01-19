import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProektApiService } from '../proekt-api.service';

export interface DialogData {
  clickedPost: Post;
}

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postComments: PostComment[] = [];
  newComment: PostComment;
  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<PostDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private apiService: ProektApiService) {

      this.newComment= { id: this.data.clickedPost.id, 
                      accountName: '@angelanajdoska', 
                      comment: '',
                      photoUrl: 'https://i.pinimg.com/originals/f2/15/5c/f2155cfa256134c6ca374f0f373c736a.jpg',
                      fullName: 'Angela Najdoska'};
     
      this.apiService.getPostComments(this.data.clickedPost.id)
          .subscribe((comments)=>{
            this.postComments = comments;
          });
    }

    onComment(){

      this.apiService.postComment(this.data.clickedPost.id,this.newComment)
      .subscribe(()=>{
        console.log("Posted new comment");
      });

      this.newComment.comment='';
    }
}