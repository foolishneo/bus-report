import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LocalStorageNotes } from '../models';

const STORAGE_KEY = 'local_bus_report';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private currentNotes = this.storage.get(STORAGE_KEY) || [];    

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public load(key: string): LocalStorageNotes | undefined {        
    return this.currentNotes.find(item => item.id === key);
  }

  public update(key: string, notes: string): void {    
    const idx = this.currentNotes.findIndex(item => item.id === key);
    if (idx !== -1) {
      this.currentNotes[idx].notes = notes;
    } else {
      this.add(key, notes);
    }
    this.storage.set(STORAGE_KEY, this.currentNotes);
  }

  public add(id: string, notes: string): void {               
    this.currentNotes.push({
        id: id,
        notes: notes        
    });    
    this.storage.set(STORAGE_KEY, this.currentNotes);
  }
}
