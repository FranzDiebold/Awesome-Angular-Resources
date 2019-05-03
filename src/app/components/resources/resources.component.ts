import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RESOURCES } from '../../data/data';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourcesComponent {

  readonly TYPE_ALL = 'all';
  readonly TYPE_FRAMEWORK = 'framework';
  readonly TYPE_LIB = 'lib';
  readonly TYPE_TOOL = 'tool';
  readonly TYPE_STARTER = 'starter';
  readonly TYPE_OTHER = 'other';

  selectedTab = this.TYPE_ALL;

  resources$: Resource[];
  queryString = '';

  constructor() {
    this.resources$ = RESOURCES;
  }

  filterHandler(type: string) {
    this.selectedTab = type;
    const data = RESOURCES;

    if (type === 'all') {
      this.resources$ = data;
      return;
    }

    this.resources$ = data.filter(item => item.type === type);
    return;
  }

  getImage() {
    return Math.floor(Math.random() * 4) + 1;
  }

  redirect(link: string) {
    window.open(link, '_blank');
  }

  trackByFn(index, item) {
    return item.id;
  }
}
