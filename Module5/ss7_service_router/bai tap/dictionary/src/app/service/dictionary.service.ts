import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: Dictionary[] = [
    {word: 'Hello', mean: 'Xin chào'},
    {word: 'School', mean: 'Trường học'},
    {word: 'Student', mean: 'Sinh viên'},
  ];

  constructor() {
    this.getAll();
  }

  findByWord(word: string): string {
    const record = this.dictionaries.find(dictionary => dictionary.word === word);
    return record.mean;
  }

  getAll() {
    return this.dictionaries;
  }
}
