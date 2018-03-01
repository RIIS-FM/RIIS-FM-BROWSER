/***
 * 程序入口
 */
$(function(){
})

/***
 * 提交快运需求信息
 */
function saveFastTrade(){
	$.ajax({
        url: 'http://localhost:8080/RIIS-FM/fmTradeOrder/insertTradeOrder',
        type: 'post',
        dataType: 'json', 
        contentType: "application/json",
        data:"",
        success: function(data) {
        //alert(JSON.stringify(data))
        this.count=data
        },
        error: function(xhr, errorType, error) {
	        alert('连接服务器失败, errorType: ' + errorType + ', error: ' + error)
	    }
    })
}

/***
 * 显示隐藏弹出框
 */
function showPop(){
	if ($("#pop").attr("style") == "display:none;"){
		$("#pop").attr("style","display:;");
	} else {
		$("#pop").attr("style","display:none;");
	}
}

/***
 * 显示隐藏弹出框
 */