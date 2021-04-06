import {Component} from '@angular/core';
import {ParallelExampleService} from './parallel-example.service';

@Component({
  selector: 'fw-parallel-example',
  templateUrl: './parallel-example.component.html',
  styleUrls: ['./parallel-example.component.css']
})

export class ParallelExampleComponent {
  exampleInput = '';
  exampleResult = '';
  errorMsg = '';

  constructor(private ParallelExampleService: ParallelExampleService) {
  }

  runExample(): void {
    if (this.exampleInput !== '')
    {
      this.ParallelExampleService.getResponse(this.exampleInput).subscribe({
        next: res => this.exampleResult = res["result"],
        error: err => {
          this.errorMsg = err;
          this.exampleResult = '';
        }
      });
    }
    else
    {
      this.exampleResult = 'You need to write something to play =(';
    }
  }
}
