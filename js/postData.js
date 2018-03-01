function postData(url, data, callback) {
	$.ajax(url,{  
        data:data,  
        dataType:'json',  
        type:'post',  
        contentType:"application/json",
        timeout:60000,  
        success:callback
    });  
}