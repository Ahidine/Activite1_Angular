export class Post  {
	loveIts: number;
	created_at: string;
	constructor(public title,public content) {
		this.loveIts=0;
		this.created_at=new Date().toLocaleString();;
		console.log(this.created_at);
	}
}