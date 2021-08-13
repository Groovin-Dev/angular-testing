import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProgressSpinnerDialogComponent } from '../progress-spinner-dialog/progress-spinner-dialog.component';

import axios from 'axios';

export interface LoginModalData {
	email: string;
	password: string;
}

@Component({
	selector: 'app-login-modal',
	templateUrl: './login-modal.component.html',
	styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<LoginModalComponent>,
		private loadingDiag: MatDialog,
		@Inject(MAT_DIALOG_DATA) public data: LoginModalData,
		private _snackBar: MatSnackBar
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

	async onLoginClick(): Promise<void> {
		let spinnerDiag: MatDialogRef<MatProgressSpinnerModule> = this.loadingDiag.open(ProgressSpinnerDialogComponent, {
			panelClass: 'transparent',
			disableClose: true,
		});

		let data = JSON.stringify({
			email: this.data.email,
			password: this.data.password,
		});

		try {
			let loginRes = await axios({
				method: 'post',
				url: 'https://api.highschoolesportsleague.com/authenticate',
				headers: {
					'Content-Type': 'application/json',
				},
				data: data,
			});

			this._snackBar.open('Login Successful', 'Dismiss', {
				duration: 5000,
				verticalPosition: 'top',
				panelClass: 'success-snack',
			});

			spinnerDiag.close();
			this.dialogRef.close(loginRes.data);
		} catch (e: any) {
			this._snackBar.open(e.message, 'Dismiss', {
				duration: 5000,
				verticalPosition: 'top',
				panelClass: 'error-snack',
			});
			spinnerDiag.close();
		}
	}

	ngOnInit(): void {}
}
