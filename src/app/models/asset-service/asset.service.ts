import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class AssetService { 

  constructor() { }

  /**
   * Returns the absolute path for a given asset file.
   * @param path The relative path within the 'assets' folder (e.g., 'img/github.svg')
   * @returns The absolute path (e.g., 'assets/img/github.svg')
   */
  getAssetUrl(path: string): string {
    return `assets/${path}`;
  }
}