import { Component } from '@angular/core';
import axios from 'axios';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-testing';

	token: string = '';

	data: any = {};

	async getToken(token: string): Promise<void> {
		this.token = token;

		await this.getMeWithToken();
	}

	async getMeWithToken(): Promise<void> {
		try {
			await axios({
				method: 'get',
				url: 'https://api.highschoolesportsleague.com/user/me',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `JWT ${this.token}`,
				},
			}).then((r) => {
				this.data = r.data;
			});
		} catch (e) {
			console.log('There was an issue getting your profile info.');
		}
	}
}
