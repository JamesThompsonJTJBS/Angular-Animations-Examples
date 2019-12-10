import { ElementRef, HostBinding, Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'expander-prototype',
  templateUrl: './expander-prototype.component.html',
  styleUrls: ['./expander-prototype.component.css'],
  animations: [    
    trigger('expandCollapseTrigger', [
      state('collapsed', style({ height: '{{ newHeight }}px' }), { params: { newHeight: 0 } }),
      state('expanded', style({ height: '{{ newHeight }}px' }), { params: { newHeight: 0 } }),
      transition('collapsed => expanded', animate('2500ms ease')),
      transition('expanded => collapsed', animate('2500ms ease')),
      state('itemShow', style({ scale: 1.0, opacity: 1 })),
    ]) // trigger


      //transition( 'void => *', []),
      //transition('collapsed <=> expanded', [
      //  style({ height: '{{ expandedHeight }}px' }),
      //  animate('0.5s ease')
      //], { params: { expandedHeight: 0 } }),
      //transition('expanded => collapsed', [
      //  style({ height: '{{ expandedHeight }}px' }),
      //  animate('2s ease')
      //], )
      //state('expanded', ),   // style({ opacity:"1" })),
      //state('collapsed', style({ })), // style({ opacity: "0" })),
      //transition('expanded => collapsed', animate(1000, style({ transform: 'translateY(0%)' })))      
      //transition('collapsed => expanded', animate(1000, style({ transform: 'translateY(-100%)' }))),
  ] // end animations


})
export class ExpanderPrototype implements OnInit {
  public title: string = 'hello world';
  public status: string = 'expanded';
  public newHeight: number = 0;
  public collapsedHeight: number = 0;
  public expandedHeight: number = 0;
  public list: string[] = [];
  public trigger: string = "hello world";

  constructor(private element: ElementRef) { }

  ngOnInit() {
    for (var i = 0; i < 100; ++i) {
      this.list.push("Tile Number " + i.toString());
    }
    this.newHeight = this.element.nativeElement.clientHeight;
    var x: string = this.element.nativeElement;
    console.log(this.trigger);
  }

  @HostBinding('@expandCollapseTrigger') get expandCollapse() {
    return {
      value: this.trigger, params: { newHeight: this.newHeight }
    };
  }

  public expandCollapseToggle(): void {
    console.log('expandCollapseToggle()');
    if (this.status === 'expanded') {
      this.status = 'collapsed';
      this.newHeight = 0;

    } else {
      this.status = 'expanded';
      this.newHeight = this.element.nativeElement.clientHeight;
    }
    console.log('newHeight = ' + this.newHeight);
    console.log('status = ' + this.status);
  }
}
