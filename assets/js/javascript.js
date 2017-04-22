console.log('javascript reporting');

id = window.location.hash.split("#")[1];

function highlighttag(){
	id = window.location.hash.split("#")[1];
	console.log('id: '+id);
	selectedtag = document.getElementById(id);
	selectedtag.style.background = "linear-gradient(to right,rgb(217,4,41),rgba(0,0,0,0))";

}
function isReady(){
	if ( document.getElementById(id) == 'undefined' ){
		setTimeout(isReady,1000);
	}else{
		highlighttag();
	}
}

isReady();
