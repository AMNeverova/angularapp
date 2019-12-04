import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as protos from './protos';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }

  public showViewFilter: boolean = false;
  public displayType: string = 'no-items';
  public list: object[] = [];
  public myList: object[] = [];


  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRepos(type, lang, text) {
    let url = `https://api.github.com/search/repositories?q=${text}+language:${lang}`;
    let infoObservable = this.http.get(url).pipe(
      map((resp: protos.Response) => resp.items));

    let subscription = infoObservable.subscribe(items => {
      let repos: object[] = items.map((repo: protos.Repo) => {
        let starsNumber = repo.stargazers_count >= 1000 ? `${Math.trunc(repo.stargazers_count / 100) / 10}k` : repo.stargazers_count;
        let isInTheList = this.myList.find((item: any) => item.name === repo.full_name);
        return {
          name: repo.full_name,
          stars: starsNumber,
          lang,
          text,
          buttonText: isInTheList ? 'remove from list' : 'add to list',
          buttonClass: isInTheList ? 'background__red' : 'background__blue',
          id: this.getRandomInt(1000, 9999)
        }
      })
      this.createReposList(repos)
    })
  }

  createReposList(list: object[]) {
    this.list = list.filter((repo: protos.Repo, index) => {
      if (index <= 19) {
        return repo
      }
    });
    this.changeViewParameters();
  }

  isInMyList(name) {
    return this.myList.find( (item: any) => item.name === name)
  }
  
  changeViewParameters() {
    if (this.list.length) {
      this.displayType = 'rows';
      this.showViewFilter = true;
    } else {
      this.displayType = 'no-items';
      this.showViewFilter = false;
    }
  }

  addRepoToMyList(evt) {
    let id = evt.target.id;
    let clickedRepo: any = this.list.find((item: any) => item.id == id)
    let isInTheList = this.myList.find((item: any) => item.id == id);
    if (isInTheList) {
      clickedRepo.buttonText = "add to list";
      clickedRepo.buttonClass = "background__blue";
      this.myList = this.myList.filter((item: any) => item.id != id);
    } else {
      clickedRepo.buttonText = "remove from list";
      clickedRepo.buttonClass = "background__red"
      this.myList.push(clickedRepo);
    }
  }
}
