import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  _myVariable : boolean | any;

  constructor(){
    const savedValue = localStorage.getItem('myVariable');
    this._myVariable = savedValue === 'false';
  }

  blinkPaths(paths: NodeListOf<Element>, currentIndexLight: number) {
    const path = paths[currentIndexLight];
    path.classList.add('pulse');
    setTimeout(() => {
      path.classList.remove('pulse');
    }, 800);
  }

  get myVariable(): boolean {
    return this._myVariable;
  }
  setTrueIsCkecked(){
    const savedValue = localStorage.getItem('myVariable');
    this._myVariable = savedValue === 'true';
    localStorage.setItem('myVariable', this._myVariable.toString());
  }

  pathMethod(elRef: any) {
    const pathClasses = ['.first_circule', '.second_circule', '.third_circule', '.fourth_circule', '.five_circule'];
    const divClasses = ['.first', '.second', '.third', '.fourth', '.five'];

    for (let i = 0; i < pathClasses.length; i++) {
      const path = elRef.nativeElement.querySelector(pathClasses[i]);
      const test = elRef.nativeElement.querySelector(divClasses[i]);
      const petents = elRef.nativeElement.querySelector(".img_light")
      const point = path!.getBoundingClientRect();
      const parentRec = petents.getBoundingClientRect();
      const x = point.x - parentRec.x
      const y = point.y - parentRec.y
      test.style.setProperty("top", `${y}px`);
      test.style.setProperty("left", `${x}px`);
      test.style.setProperty("width", `${point?.width}px`);
      test.style.setProperty("height", `${point?.height}px`);
    }
  }
  blinkMobilePaths(paths: NodeListOf<Element>, currentIndexLight: number) {
    const path = paths[currentIndexLight];
    path.classList.add('pulse');
    setTimeout(() => {
      path.classList.remove('pulse');
    }, 800);
  }

  pathMobileMethod(elRef: any) {
    const pathClasses = ['.mobile_first_circule', '.mobile_second_circule', '.mobile_third_circule', '.mobile_fourth_circule', '.mobile_five_circule'];
    const divClasses = ['.mobile_first', '.mobile_second', '.mobile_third', '.mobile_fourth', '.mobile_five'];

    for (let i = 0; i < pathClasses.length; i++) {
      const path = elRef.nativeElement.querySelector(pathClasses[i]);
      const test = elRef.nativeElement.querySelector(divClasses[i]);
      const petents = elRef.nativeElement.querySelector(".img_light_mobile")
      const point = path!.getBoundingClientRect();
      const parentRec = petents.getBoundingClientRect();
      const x = point.x - parentRec.x
      const y = point.y - parentRec.y
      test.style.setProperty("top", `${y}px`);
      test.style.setProperty("left", `${x}px`);
      test.style.setProperty("width", `${point?.width}px`);
      test.style.setProperty("height", `${point?.height}px`);
    }
  }

  blinkDarkPaths(paths: NodeListOf<Element>, currentIndexLight: number) {
    const path = paths[currentIndexLight];
    path.classList.add('dark_pulse');
    setTimeout(() => {
      path.classList.remove('dark_pulse');
    }, 800);
  }

  pathDarkMethod(elRef: any){
    const pathClasses = ['.dark_first_circule', '.dark_second_circule', '.dark_third_circule', '.dark_fourth_circule', '.dark_five_circule'];
    const divClasses = ['.dark_first', '.dark_second', '.dark_third', '.dark_fourth', '.dark_five'];

    for (let i = 0; i < pathClasses.length; i++) {
      const path = elRef.nativeElement.querySelector(pathClasses[i]);
      const test = elRef.nativeElement.querySelector(divClasses[i]);
      const petents = elRef.nativeElement.querySelector(".img_dark")
      const point = path!.getBoundingClientRect();
      const parentRec = petents.getBoundingClientRect();
      const x = point.x - parentRec.x
      const y = point.y - parentRec.y
      test.style.setProperty("top", `${y}px`);
      test.style.setProperty("left", `${x}px`);
      test.style.setProperty("width", `${point?.width}px`);
      test.style.setProperty("height", `${point?.height}px`);
    }
  }
  
  blinkMobileDarkPaths(paths: NodeListOf<Element>, currentIndexLight: number) {
    const path = paths[currentIndexLight];
    path.classList.add('dark_pulse');
    setTimeout(() => {
      path.classList.remove('dark_pulse');
    }, 800);
  }

  pathMobileDarkMethod(elRef: any){
    const pathClasses = ['.mobile_dark_first_circule', '.mobile_dark_second_circule', '.mobile_dark_third_circule', '.mobile_dark_fourth_circule', '.mobile_dark_five_circule'];
    const divClasses = ['.mobile_dark_first', '.mobile_dark_second', '.mobile_dark_third', '.mobile_dark_fourth', '.mobile_dark_five'];

    for (let i = 0; i < pathClasses.length; i++) {
      const path = elRef.nativeElement.querySelector(pathClasses[i]);
      const test = elRef.nativeElement.querySelector(divClasses[i]);
      const petents = elRef.nativeElement.querySelector(".img_dark_mobile")
      const point = path!.getBoundingClientRect();
      const parentRec = petents.getBoundingClientRect();
      const x = point.x - parentRec.x
      const y = point.y - parentRec.y
      test.style.setProperty("top", `${y}px`);
      test.style.setProperty("left", `${x}px`);
      test.style.setProperty("width", `${point?.width}px`);
      test.style.setProperty("height", `${point?.height}px`);
    }
  }
}
