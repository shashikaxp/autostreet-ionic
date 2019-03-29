import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  set(key, data) {
    return this.storage.set(key, data);
  }

  get(key) {
    return this.storage.get(key);
  }

  remove(key) {
    return this.storage.remove(key)
  }

  clear() {
    return this.storage.clear();
  }

}
