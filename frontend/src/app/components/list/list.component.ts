import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	private dialogConfig = {
		width: "500px",
		data: {
			category: "",
			location: "",
			price: null,
			resources: ""
		}
	};

	public deathlist = [];
	constructor(private api: ApiService, private dialog: MatDialog) { }

	ngOnInit(): void {
		this.deathlist.push({ name: "Travel to Spain" });

	}

	addItem(): void {
		console.log("Adding");
		const dialogRef = this.dialog.open(DialogComponent, this.dialogConfig);

		dialogRef.afterClosed().subscribe(res => {
			if (res !== undefined) {
				console.log(res);
			}
		});
	}

	home() {
		this.api.home().subscribe(response => {
			console.log(response);
		})
	}

	clear() {
		this.api.clear().subscribe(response => {
			console.log(response);
		});
	}

	write() {
		const payload = [{
			user_id: "chance123",
			name: "Chance",
			category: "unknown",
			location: "unknown",
			price: "0",
			resources: "unknown"
		}];
		this.api.write(payload).subscribe(response => {
			console.log(response);
		});
	}
}
