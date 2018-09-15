var app = new Vue({
			el:'#app',
			data: {
				msg: '',
				things: []
			},
			methods: {
				add(){
					this.things.unshift({
						isOK: false,
						text: this.msg,
						isHover: false
					});
					this.msg='';
				},
				done(index){
					this.things[index].isOK = !this.things[index].isOK;
				},
				toggleShow(index){
					this.things[index].isHover = !this.things[index].isHover;
				}
			}
		});