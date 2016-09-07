var proyect = {

	data : {

		text: ' NewProyect '

	},

	init : function(){

		this.updateMessage();
		this.showMessage(this.data.text);

		return false;

	},

	showMessage : function(text){

		return console.log( 'This is a ' +text );

	},

	updateMessage : function(){

		return this.data.text = 'Html Bolierplate';

	}

}

$(document).ready(function(){

	proyect.init();

});