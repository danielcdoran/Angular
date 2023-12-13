import {Component, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, delay} from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  response = LanguageResponseState;

  programmingLanguages = [
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'C++',
    'Ruby',
    'Swift',
    'Kotlin',
    'TypeScript',
    'HTML',
    'CSS',
    'PHP',
    'Go',
    'Rust',
    'Objective-C',
    'Scala',
    'Shell',
    'PowerShell',
    'Perl',
    'Lua',
    'Haskell',
    'Dart',
    'Groovy',
    'R',
    'MATLAB',
    'CoffeeScript',
    'F#',
    'Clojure',
    'Elixir',
    'Julia',
    'Haxe',
    'Fortran',
    'Ada',
    'COBOL',
    'Lisp',
    'Scheme',
    'Prolog',
    'Bash',
    'Assembly',
    'Smalltalk',
    'Erlang',
    'OCaml',
    'VHDL',
    'Verilog',
    'PL/I',
    'Ada',
    'ABAP',
    'ActionScript'
  ];

  filteredLanguages = signal<LanguageResponse>({state: LanguageResponseState.EMPTY, languages: []});

  bioSection = new FormGroup({
    firstName: new FormControl<string>('', [
      Validators.minLength(3),
      Validators.required
    ]),
    lastName: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
    age: new FormControl<number>(null, [Validators.min(18), Validators.required]),
    yearsExperience: new FormControl<number>(0),
    stackDetails: new FormGroup({
      stack: new FormControl<string>(''),
      experience: new FormControl<string>('')
    }),
    address: new FormGroup({
      country: new FormControl<string>(''),
      city: new FormControl<string>('')
    }),
    languageSearch: new FormControl<string>('')
  });

  constructor() {
  }

  ngOnInit() {
    this.bioSection.valueChanges.pipe(debounceTime(500)).subscribe(async x => {
      if (x.languageSearch){
        await this.searchForLanguage(x.languageSearch)
      }
      else{
        this.filteredLanguages.set({
          state: LanguageResponseState.EMPTY,
          languages: []
        })
      }
    })
  }

  async searchForLanguage(search: string) {
    this.filteredLanguages.set({state: LanguageResponseState.LOADING, languages: []});
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.filteredLanguages.set({
      state: LanguageResponseState.LOADED,
      languages: this.programmingLanguages.filter(x => x.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    });
  }

  submitForm() {
    console.log(this.bioSection.value);
  }
}

export interface LanguageResponse {
  state: LanguageResponseState,
  languages: Array<string>
}

export enum LanguageResponseState {
  EMPTY,
  LOADING,
  LOADED,
}
