import {Injectable} from 'angular2/core'; 
import {Http, Response} from 'angular2/http';

@Injectable()
export class DemoService {

  public jsonURL;

  constructor(private http:Http) { }

  setJsonURL(url) {
    jsonURL = url;
  }

  // Uses http.get() to load a single JSON file
  getData() {
    return this.http.get(jsonURL).map((res:Response) => res.json());
  }

}
