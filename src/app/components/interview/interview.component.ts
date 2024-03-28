import { Component } from '@angular/core';

type NewType = {
  x: number;
  y: number;
  isGrey: boolean;
};

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent {

  circles: NewType[] = [];

  circleSize = 50;
  circleSpacing = 20;
  circleCount = 0;
  greyCircleCount = 0;

  addCircle() {
    // const x = Math.random() * 500;
    // const y = Math.random() * 500;
    // this.circles.push({ x, y });
    const y = this.circles.length * (this.circleSize + this.circleSpacing);
    this.circles.push({
      x: 0, y,
      isGrey: false
    });
    this.circleCount++;
  }

  toggleCircleColor(circle: { x: number; y: number; isGrey: boolean }) {
    circle.isGrey = !circle.isGrey;
    if (circle.isGrey) {
      this.greyCircleCount++;
    } else {
      this.greyCircleCount--;
    }
  }
}
