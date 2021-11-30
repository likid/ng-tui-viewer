import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgTuiViewerComponent } from './ng-tui-viewer.component';

@NgModule({
	declarations: [NgTuiViewerComponent],
	imports: [
		FormsModule
	],
	exports: [NgTuiViewerComponent]
})
export class NgTuiViewerModule { }
