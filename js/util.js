
/**
	* 定义全局常量
*/

var urlPort = "http://localhost:8080/"; /*接口*/

var urlOrderInfo ="RIIS-FM/fmTradeOrder/selectTradeOrder"; /*通过iSenderId查询全部订单信息，并分页显示*/


/**
	* 定义函数
*/
function postData(url, data, callback) {
	$.ajax(url,{  
        data:data,  
        dataType:'json',  
        type:'post',  
        contentType:"application/json",
        timeout:60000,  
        success:callback,
        error: function(xhr, errorType, error)
            {
                alert('连接服务器失败, errorType: ' + errorType + ', error: ' + error);
            }
    });  
}

/**
	* 获取url
	* @return port
*/
function getOrderInfoPort(){
	var url = urlPort+urlOrderInfo;
	return url;
}


/**
	* 订单类型转换
	* @example constValue(1);
	* @param {vaule} 常量值
	* @return 常量值对应的含义
*/
function orderType(value){
	var ret;
	switch (value){
		case 3:
			ret = "集装箱运输";
			break;
		case 4:
			ret = "高铁快运";
			break;
		case 5:
			ret = "特快货物班列";
			break;
		case 6:
			ret = "货物快运";
			break;
		case 7:
			ret = "散装堆货物";
			break;
		case 8:
			ret = "批量成件货物";
			break;
		case 9:
			ret = "液体货物";
			break;
		case 10:
			ret = "整车大宗货物直达";
			break;
		default:
			ret = "货物运输";
			break;
	}
	return ret;
}

/**
	* 需求状态转换
	* @example constValue(1);
	* @param {vaule} 常量值
	* @return 常量值对应的含义
*/
function orderState(value){
	var ret;
	switch (value){
		case 0:
			ret = "草稿";
			break;
		case 1:
			ret = "审核中";
			break;
		case 2:
			ret = "确认承运方案";
			break;
		case 3:
			ret = "审核未通过";
			break;
		case 4:
			ret = "待付款";
			break;
		case 5:
			ret = "运输中";
			break;
		case 6:
			ret = "待评价";
			break;
		case 7:
			ret = "已取消";
			break;
		case 8:
			ret = "已完成";
			break;
		default:
			ret = "？？";
			break;
	}
	return ret;
}

/**
	* 运单状态转换
	* @example constValue(1);
	* @param {vaule} 常量值
	* @return 常量值对应的含义
*/
function waybillState(value){
	var ret;
	switch (value){
		case 0:
			ret = "待发货";
			break;
		case 1:
			ret = "待收货";
			break;
		case 2:
			ret = "待评价";
			break;
		case 3:
			ret = "已完成";
			break;
		case 4:
			ret = "已取消";
			break;
		default:
			ret = "？？";
			break;
	}
	return ret;
}

/**
 * 显示隐藏弹出框
 **/
function showPop(){
	if ($("#pop").attr("style") == "display: none;"){
		$("#pop").attr("style","display:;");
	} else {
		$("#pop").attr("style","display: none;");
	}
}