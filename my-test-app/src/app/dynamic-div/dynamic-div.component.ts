import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss'],
})
export class DynamicDivComponent implements OnInit {
  constructor() {}

  section: Element | null = null;

  ngOnInit(): void {
    this.section = document.querySelector('.divSection');
    const tree = document.createDocumentFragment;

    for (let index = 1; index <= 22; index++) {
      this.section?.appendChild(this.createDiv(index));
    }
    this.section?.addEventListener('scroll', (event) => {
      const clientheight = this.section?.clientHeight;
      const scrollHeight = this.section?.scrollHeight;
      const scrolltop = this.section?.scrollTop;

      if (clientheight && scrollHeight && scrolltop) {
        let limit = scrollHeight - clientheight;
        if (scrolltop === limit) {
          const divs = document.querySelectorAll('div');
          for (let index = divs.length + 1; index <= 7 + divs.length; index++) {
            this.section?.appendChild(this.createDiv(index));
          }
        }
      }
    });
  }

  public createDiv(index: number) {
    const div = document.createElement('div');

    const button = document.createElement('button');

    button.style.color = 'black';
    button.innerText = index.toString();

    button.addEventListener('click', (event) => {
      alert('you clicked ' + button.innerText);
    });
    div.style.backgroundColor = '#0865d9';
    div.style.margin = '20px';
    div.style.height = '200px';
    div.style.width = '200px';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';

    div.appendChild(button);
    return div;
  }
}
