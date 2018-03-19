/***
 * 程序入口
 */
$(function(){
})

/***
 * 提交快运需求信息
 */
function saveFastTrade(){
	var cSenderCity=$("#ftSenderCity").val();
	var cRecverCity=$("#ftRecverCity").val();
	var cTrainNum=$("#ftTrainNum").val();
	var dPredictLoadStartTime=$("#ftPredictLoadStartTime").val();
	var dPredictSendTime=$("#ftPredictSendTime").val();
	var cLoadStation=$("#ftLoadStation").val();
	var cLoadLocation=$("#ftLoadLocation").val();
	var cUnloadStation=$("#ftUnloadStation").val();
	var cUnloadLocation=$("#ftUnloadLocation").val();
	var dOrderDateline=$("#ftOrderDateline").val();
	var cSenderName=$("#ftSenderName").text();
	var iSenderId=$("#ftSenderPeo").text();
	var cSenderPhone=$("#ftSenderPhone").text();
	var cSenderAddress=$("#ftSenderAddress").text();
	var cSenderPostcode=$("#ftSenderPostcode").text();
	var cSenderEmail=$("#ftSenderEmail").text();
	var cRecverName=$("#ftRecverName").text();
	var iRecverId=$("#ftRecverPeo").text();
	var cRecverAddress=$("#ftRecverAddress").text();
	var cRecverPhone=$("#ftRecverPhone").text();
	var cRecverPostcode=$("#ftRecverPostcode").text();
	var cRecverEmail=$("#ftRecverEmail").text();
	var cGoodsName=$("#ftGoodsName").val();
	var fGoodsWeight=$("#ftGoodsWeight").val();
	var iGoodsNumber=$("#ftGoodsNumber").val();
	var fEachGoodsMaxWeight=$("#ftEachGoodsMaxWeight").val();
	
	$.ajax({  
        url: 'http://localhost:8080/RIIS-FM/fmTradeOrder/insertTradeOrder',
        type: 'post',
        dataType: 'json', 
        contentType: "application/json",
        data:'{"fmTradeOrderInfoBaseEntity":{"iOrderTypeId":6,"dOrderDateline":"'+dOrderDateline+
        '","iUserType":3,"iSenderId":7,"iRecverId":5,"cSenderName":"'+cSenderName+
        '","cSenderAddress":"'+cSenderAddress+'","cSenderPhone":"'+cSenderPhone+'","cSenderEmail":"'+cSenderEmail+
        '","cSenderPostcode":"'+cSenderPostcode+'","cSenderNote":"易燃","cSenderCity":"'+cSenderCity+
        '","cLoadStation":"'+cLoadStation+'","cLoadLocation":"'+cLoadLocation+'","cRecverAddress":"'+cRecverAddress+
        '","cRecverPhone":"'+cRecverPhone+'","cRecverEmail":"'+cRecverEmail+'","cRecverPostcode":"'+cRecverPostcode+
        '","cRecverCity":"'+cRecverCity+'","cUnloadStation":"'+cUnloadStation+'","cUnloadLocation":"'+cUnloadLocation+
        '","cOrderType":"高铁快运","iOrderSplite":"0","iOrderState":1,"fProtectPrice":100,"fInsuranceValue":100},"fmTradeOrderInfoBoxFreightRecord":{},"fmTradeOrderInfoFastFreightRecord":{"cGoodsName":"'+cGoodsName+
        '"},"fmTradeOrderInfoWholeVegicleFreightRecord":{}}',
        success: function(data) {
        	alert(JSON.stringify(data));
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
 * 选择人员
 */
function choosePeo(){
	$("#choose1").attr("style","display:none;");
	$("#choose2").attr("style","display:;");
	$("#pop").attr("style","display:none;");
}
