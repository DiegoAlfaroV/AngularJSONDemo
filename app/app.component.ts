import {Component} from 'angular2/core';
import {DemoService} from './demo.service';

@Component({
  selector: 'demo-app',
  templateUrl:'app/demo-app.html',
  styleUrls: ['app/demo-app.css']
})

export class AppComponent {

  public data;
  public dataURL;

  constructor(private _demoService: DemoService) {
    this.dataURL = '/app/data.json';
    _demoService.setJsonURL(this.dataURL);
  }

  ngOnInit() {
    this.getData();
  }

  setJsonURL(newJsonURL) {
    this.dataURL = newJsonURL;

    this._demoService.setJsonURL(this.dataURL);
    this.getData();
  }

  getData() {

    this._demoService.getData().subscribe(
      // the first argument is a function which runs on success
      data => { this.data = data },
      // the second argument is a function which runs on error
      err => { console.error(err); alert('JSON incorrecto') },
      // the third argument is a function which runs on completion
      () => console.log('done loading')
    );
  }

}
