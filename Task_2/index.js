var app = new Vue({
			el:'#app',
			data: {
				msg: '',
				things:[]
			},
			methods: {
				add(){
					this.things.unshift({
						isOK: false,
						text: this.msg
					});
					this.msg='';
				},
				done(index){
					this.things[index].isOK = !this.things[index].isOK;
				}
			}
		});