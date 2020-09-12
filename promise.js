const promise = new Promise((resolved, rejected) =>{

	if (true){
		resolved('Hii');
	}
	else{
		rejected('Hello');
	}
})










promise.then(result=> result + '!').then(result2 => result2 +'@').then(result3=> console.log(result3))