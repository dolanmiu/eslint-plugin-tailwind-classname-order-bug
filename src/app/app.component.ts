import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="mx-auto container">
      <h1>Welcome to {{ title }}!</h1>
      <span class="font-bold block">{{ title }} app is running!</span>
    </div>
    <div class="flex container gap-10 flex-col">
      <h2>Here are some links to help you start:</h2>
      <ul>
        <li>
          <h2>
            <a target="_blank" rel="noopener" href="https://angular.io/tutorial"
              >Tour of Heroes</a
            >
          </h2>
        </li>
        <li>
          <h2>
            <a target="_blank" rel="noopener" href="https://angular.io/cli"
              >CLI Documentation</a
            >
          </h2>
        </li>
        <li>
          <h2>
            <a target="_blank" rel="noopener" href="https://blog.angular.io/"
              >Angular blog</a
            >
          </h2>
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'tailwind-eslint-reproduce';
}
