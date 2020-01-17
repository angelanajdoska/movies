import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProektApiService {

  constructor(private http: HttpClient) { }
  getPosts(pageNumber: number):Observable<Post[]>{
    return this.http.get<Post[]>(`http://5e188217eaa1d2001436e4cf.mockapi.io/posts?page=${pageNumber}&limit=10`)
  }

  getPostComments(postId: number):Observable<PostComment[]>{
    return this.http.get<PostComment[]>(`http://5e188217eaa1d2001436e4cf.mockapi.io/posts/${postId}/comments`)
  }

  postComment(postId: number, comment: PostComment){
    return this.http
    .post(`http://5e188217eaa1d2001436e4cf.mockapi.io/posts/${postId}/comments`, comment);
  }
}



