import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myTrigger', [
      state('small', style({ transform: 'scale(1)' })),
      state('large', style({ transform: 'scale(1.5)' })),
      transition('small => large', animate('500ms')),
      transition('large => small', animate('500ms')),

      // This does the same as the previous 2 lines
      //transition('small => large, large => small', animate('500ms'))

      // This is also the same
      //transition('small <=> large', animate('500ms'))
    ]),

    trigger('myTrigger2', [
      state('small', style({ transform: 'scale(1)' })),
      state('large', style({ transform: 'scale(1.5)' })),
      state('extra-large', style({ transform: 'scale(2)' })),
      transition('* => *', animate('250ms')),
    ]),

    trigger('myTrigger3', [
      state('small', style({ transform: 'scale(1)' })),
      state('large', style({ transform: 'scale(1.5)' })),
      state('extra-large', style({ transform: 'scale(2)' })),
      state('fadeIn', style({ opacity: '1' })),
      transition('void => *', [
        style({ opacity: '0', transform: 'translateY(-20px)' }),
        animate('250ms')
      ]) // end Transition
    ]), // end trigger

    trigger('animationTrigger1', [
      state('showing', style({ opacity: '1' })),
      state('hidden', style({ opacity: '0' })),
      transition('hidden <=> showing', animate('1000ms 0ms'))
    ]), // trigger
    trigger('animationTrigger2', [
      state('showing', style({ opacity: '1' })),
      state('hidden', style({ opacity: '0' })),
      transition('hidden <=> showing', animate('1000ms 1000ms'))
    ]), // trigger
    trigger('animationTrigger3', [
      state('showing', style({ opacity: '1' })),
      state('hidden', style({ opacity: '0' })),
      transition('hidden <=> showing', animate('1000ms 2000ms'))
    ]), // trigger
    trigger('animationTrigger4', [
      state('showing', style({ opacity: '1' })),
      state('hidden', style({ opacity: '0' })),
      transition('hidden <=> showing', animate('1000ms 0ms'))
    ]), // trigger
    trigger('animationTrigger5', [
      state('showing', style({ opacity: '1' })),
      state('hidden', style({ opacity: '0' })),
      transition('hidden <=> showing', animate('2000ms 0ms'))
    ]), // trigger
    trigger('animationTrigger6', [
      state('showing', style({ opacity: '1' })),
      state('hidden', style({ opacity: '0' })),
      transition('hidden <=> showing', animate('3000ms 0ms'))
    ]), // trigger
    trigger('animationTrigger7', [
      state('showing', style({ opacity: '1' })),
      state('hidden', style({ opacity: '0' })),
      transition('hidden <=> showing', animate('3000ms 0ms'))
    ]), // trigger
    trigger('animationTrigger8', [
      state('showing', style({ opacity: '1' })),
      state('hidden', style({ opacity: '0' })),
      transition('hidden <=> showing', animate('3000ms 0ms ease-in'))
    ]), // trigger
    trigger('animationTrigger9', [
      state('showing', style({ opacity: '1' })),
      state('hidden', style({ opacity: '0' })),
      transition('hidden <=> showing', animate('3000ms 0ms ease-out'))
    ]), // trigger
    trigger('animationTrigger10', [
      state('showing', style({ opacity: '1' })),
      state('hidden', style({ opacity: '1' })),
      transition('hidden <=> showing',
        animate('400ms',
          keyframes([
            //style({ opacity: 0, transform: 'translateY(-30px)', offset: 0 }),
            style({ transform: 'rotate(2deg)', offset: 0 }),
            style({ transform: 'rotate(0deg)', offset: 0.1 }),
            style({ transform: 'rotate(-2deg)', offset: 0.2 }),
            style({ transform: 'rotate(0deg)', offset: 0.3 }),
            style({ transform: 'rotate(2deg)', offset: 0.4 }),
            style({ transform: 'rotate(0deg)', offset: 0.5 }),
            style({ transform: 'rotate(-2deg)', offset: 0.6 }),
            style({ transform: 'rotate(0deg)', offset: 0.7 }),
          ]) // keyframses
        ) //animate
      ) // transition
    ]) // trigger
  ] // end animations

  
})
export class AppComponent {
  title = 'animations';
  state: string = 'large';
  state2: string = 'large';
  state3: string;
  items = ["item1", "item2", "item3"];
  public animationStateDelay: string = "showing";
  public animationStateDuration: string = "showing";
  public animationStateEasing: string = "showing";
  public animationStateMultiStep: string = "showing";

  public toggleState(): void {
    this.state = (this.state === 'small') ? 'large' : 'small';
  }

  public toggleState2(): void {
    if (this.state2 === 'small') {
      this.state2 = 'large'
    } else if (this.state2 === 'large') {
      this.state2 = 'extra-large';
    } else {
      this.state2 = 'small';
    }
  }

  public toggleState3(): void {
    this.items.push("another item");
    this.state3 = "fadeIn";
  }

  public toggleStateAnimationDelay(): void {
    console.log('toggleStateAnimationDelay()');
    if (this.animationStateDelay === "hidden") {
      this.animationStateDelay = "showing";
    } else {
      this.animationStateDelay = "hidden";
    }    
  }

  public toggleStateAnimationDuration(): void {
    console.log('toggleStateAnimationDuration()');
    if (this.animationStateDuration === "hidden") {
      this.animationStateDuration = "showing";
    } else {
      this.animationStateDuration = "hidden";
    }
  }

  public toggleStateAnimationEasing(): void {
    console.log('toggleStateAnimationEasing()');
    if (this.animationStateEasing === "hidden") {
      this.animationStateEasing = "showing";
    } else {
      this.animationStateEasing = "hidden";
    }
  }

  public toggleStateAnimationMultiStep(): void {
    console.log('toggleStateAnimationMultiStep()');
    if (this.animationStateMultiStep === "hidden") {
      this.animationStateMultiStep = "showing";
    } else {
      this.animationStateMultiStep = "hidden";
    }
  }


}
