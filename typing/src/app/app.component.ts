import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.git.commitMessage();
  userInput = '';

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
  }

  compare(rndSign: string, userSign: string) {
    if (!userSign) {
      return 'pending';
    }

    return rndSign === userSign ? 'correct' : 'incorrect';
  }

  onBtnReload() {
    document.location.reload();
  }
}
