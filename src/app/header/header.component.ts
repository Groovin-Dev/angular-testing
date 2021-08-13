import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	email: string = '';
	password: string = '';

	@Output() token = new EventEmitter<string>();

	constructor(public dialog: MatDialog) {}

	openLoginDialog(): void {
		const dialogRef = this.dialog.open(LoginModalComponent, {
			disableClose: true,
			width: '500px',
			data: { email: this.email, password: this.password },
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res || !res.token) {
				return;
			}

			this.token.emit(res.token);
		});
	}
}
