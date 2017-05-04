import { Component } from '@angular/core';
import {WorkflowService} from './workflow-manager/workflow.service';

@Component({
  selector: 'ep-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pace';
  constructor() {}
}
