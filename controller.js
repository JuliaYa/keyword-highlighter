angular.module('myApp', [])
.controller('Highlighter', ['$scope', function($scope) {
  $scope.text = 'Аудиоконвертер, бесплатный аудиоконвертер';

  var cursor = document.getElementById('cursor');
  var textarea = document.getElementById('keyWords');
  textarea.addEventListener("click", function(e){
    console.log(e);
    cursor.style.left = e.offsetX;
    cursor.style.top = e.offsetY;
  });
  //$scope.styledText = $scope.text;
  //document.getElementById('fakeText').innerHTML = $scope.text;

  $scope.$watch('text', function(){
  	var fakeText = document.getElementById('fakeText');
  	var cursor = document.getElementById('cursor');
  	var key_words = $scope.text.split(',');
  	var styledText = '';
  	for(var i=0; i<key_words.length; i++){
  		styledText += "<span class='key_word'>"+key_words[i]+"</span>";
  		if(i!=key_words.length-1){
  			styledText+=',';
  		}
  	}
  	fakeText.innerHTML = styledText;
  	fakeText.appendChild(cursor);
  	cursor.class='cursor';
  });

}]);

(function(){
	window.cursorFlag = true;
	setInterval(function() {
		var cursor = document.getElementById('cursor');
		if(window.cursorFlag){
			cursor.style.visibility = 'hidden';
			window.cursorFlag = false;
		}else{
			cursor.style.visibility = 'visible';
			window.cursorFlag = true;
		}
	}, 500);
})();