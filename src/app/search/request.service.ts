import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

interface Response {
  items
}

interface Repo {
  full_name: string,
  stargazers_count: number;
}

@Injectable()
export class RequestService {
  constructor(private http: HttpClient,
              private router: Router) { }

  public list: object[] = [];
  public myList: object[] = [];

  getRepos(type, lang, text) {
    let url = `https://api.github.com/search/repositories?q=${text}+language:${lang}`;
    let infoObservable = this.http.get(url).pipe(
      map((resp: Response) => resp.items));

    let subscription = infoObservable.subscribe(items => {
      let repos: object[] = items.map((repo: Repo) => {
        let starsNumber = repo.stargazers_count >= 1000 ? `${Math.trunc(repo.stargazers_count / 100) / 10}k` : repo.stargazers_count;
        return {
          name: repo.full_name,
          stars: starsNumber,
          lang,
          text
        }
      })
      this.createReposList(repos)
    })
  }

  createReposList(list: object[]) {
    this.list = list.filter((repo: Repo, index) => {
      if (index <= 19) {
        return repo
      }
    });
    if (this.list.length) {
      this.router.navigate(['search/rows-list'])
    } else {
      this.router.navigate(['search/noresults'])
    }
  }

  addRepoToMyList(evt) {
    let name = evt.target.value;
    let clickedRepo = this.list.find( (item : any)=> item.name === name)
    let isInTheList = this.myList.find((item: any) => item.name === name);
    if (isInTheList) {
      this.myList = this.myList.filter((item: any) => item.name !== name)
    } else {
      this.myList.push(clickedRepo);
    }
  }
}
