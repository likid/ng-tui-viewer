import { Component, OnInit, ViewChild, ElementRef, Input, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

@Component({
	selector: 'tui-viewer',
	template: `<div #tuiViewer></div>`,
	providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgTuiViewerComponent),
        multi: true
    }]
})
export class NgTuiViewerComponent implements ControlValueAccessor, OnInit {

    onChange: (_: any) => void = (_: any) => {};
	onTouched: () => void = () => {};

	private viewer!: Viewer;
	private ViewerElement: ElementRef<HTMLDivElement>;
	@ViewChild('tuiViewer', { static: true }) set EditorElementSetter(el: ElementRef) {
		this.ViewerElement = el;
	}
	@Input('text') value: string;

	constructor() {}

	ngOnInit(): void {
		this.viewer = new Viewer({
			el: this.ViewerElement.nativeElement,
			initialValue: this.value
		});
	}

    updateChanges(): void {
		this.onChange(this.value);
    }
    writeValue(value: string): void {
        this.value = value;
        this.updateChanges();
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}
