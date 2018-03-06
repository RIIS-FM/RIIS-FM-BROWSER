/**
 * 不同状态下的按钮样式
 * */
function btnSty(orderState, orderType){
	var ret;
	var submitBtnLink;
	var modifyBtnLink;
	switch (orderType){
		case 3:
			submitBtnLink = '<a href="../pages/trade_issue_view3.html"';
			modifyBtnLink = '<a href="../pages/trade_issue_commit3.html"';
			break;
		case 4:	
		case 5:
		case 6:
			submitBtnLink = '<a href="../pages/trade_issue_view1.html"';
			modifyBtnLink = '<a href="../pages/trade_issue_commit1.html"';
			break;
		case 7:
		case 8:
		case 9:
		case 10:
			submitBtnLink = '<a href="../pages/trade_issue_view2.html"';
			modifyBtnLink = '<a href="../pages/trade_issue_commit2.html"';
			break;
	}
	
	switch (orderState){
		case 0:
			ret = '<td>'+
					submitBtnLink+'class="btn_30b">查看</a>'+
					modifyBtnLink+'class="btn_30b">修改</a>'+
					modifyBtnLink+'class="btn_30g">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 1:
			ret = '<td>'+
					submitBtnLink+'class="btn_30b">查看</a>'+
					modifyBtnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h btn_disabled">删除</a>'+
				'</td>';
			break;
		case 2:
			ret = '<td>'+
					submitBtnLink+'class="btn_30b">查看</a>'+
					modifyBtnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 3:
			ret = '<td>'+
					submitBtnLink+'class="btn_30b">查看</a>'+
					modifyBtnLink+'class="btn_30b">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 4:
			ret = '<td>'+
					submitBtnLink+'class="btn_30b">查看</a>'+
					modifyBtnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 5:
			ret = '<td>'+
					submitBtnLink+'class="btn_30b">查看</a>'+
					modifyBtnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 6:
			ret = '<td>'+
					submitBtnLink+'class="btn_30b">查看</a>'+
					modifyBtnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 7:
			ret = '<td>'+
					submitBtnLink+'class="btn_30b">查看</a>'+
					modifyBtnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 8:
			ret = '<td>'+
					submitBtnLink+'class="btn_30b">查看</a>'+
					modifyBtnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
	}
	return ret;
}

/**
 * 获取分页的dom
 * @param pageModel
 * @return 分页的Dom
 * */
function getPageDom(data){
	
	var pageModel = data.pageModel;
	var pageDom='';
	pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+pageModel.totalSize+')">＞|</a>';
	pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+(pageModel.pageIndex+1)+')">＞</a>';
	if (pageModel.totalSize <=7){
		for( var i = pageModel.totalSize; i > 0; i--){
			if( i == pageModel.pageIndex){
				pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')" class="on">'+( i )+'</a>';
			}else{
				pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')">'+( i )+'</a>';
			}
 		}	  
		pageDom += '<a href="#">＜</a>';
		pageDom += '<a href="#">|＜</a>';
	}else{
		if ( pageModel.pageIndex <= 4 ) {
			for( var i = pageModel.totalSize; i > pageModel.totalSize-2; i--){
				if( i == pageModel.pageIndex){
					pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')" class="on">'+( i )+'</a>';
				}else{
					pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')">'+( i )+'</a>';
				}
			}	
 			pageDom +='<span class="pdl06">...</span>';
	 		for( var i = 4; i > 0; i--){
				if( i == pageModel.pageIndex){
					pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')" class="on">'+( i )+'</a>';
				}else{
					pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')">'+( i )+'</a>';
				}
	 		}	
			
		} else {
			if( pageModel.pageIndex >= pageModel.totalSize-2 ){
				for( var i = pageModel.totalSize; i > pageModel.totalSize-4; i--){
					if( i == pageModel.pageIndex){
						pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')" class="on">'+( i )+'</a>';
					}else{
						pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')">'+( i )+'</a>';
					}
				}	
	 			pageDom +='<span class="pdl06">...</span>';
		 		for( var i = 2; i > 0; i--){
					if( i == pageModel.pageIndex){
						pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')" class="on">'+( i )+'</a>';
					}else{
						pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')">'+( i )+'</a>';
					}
		 		}	
			}else{
				for( var i = pageModel.pageIndex+2; i > pageModel.pageIndex-2 ; i--){
					if( i == pageModel.pageIndex){
						pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')" class="on">'+( i )+'</a>';
					}else{
						pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')">'+( i )+'</a>';
					}
				}	
	 			pageDom +='<span class="pdl06">...</span>';
		 		for( var i = 2; i > 0; i--){
					if( i == pageModel.pageIndex){
						pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')" class="on">'+( i )+'</a>';
					}else{
						pageDom +='<a href="#" onclick="getOrderDataByPageIndex('+i+')">'+( i )+'</a>';
					}
		 		}	
				
			}
		}
		pageDom += '<a href="#" onclick="getOrderDataByPageIndex('+(pageModel.pageIndex-1)+')">＜</a>';
		pageDom += '<a href="#" onclick="getOrderDataByPageIndex(1)">|＜</a>';
	}
	
	pageDom +='<span><b class="keywd">'+pageModel.pageIndex+'</b>/'+pageModel.totalSize+'</span>';
	
	return pageDom;	
}

/**
 * 获取指定页码数据
 * @param value 页码
 * @return 表格信息
 * */
function getOrderDataByPageIndex(value){
    var data = '{"user":{"id":7},"pageModel":{"pageIndex":'+value+',"pageSize":4},"requirement":{}}}';
    getOrderInfo(data);
    
}


/**
 * 获取表格的dom
 * @param orderList
 * @return 表格的Dom
 * */
function getTableDom(orderList){
	var dom = '';
				
	for( var i = 0; i < orderList.length; i++){
		
		dom += '<tr>';
		dom += '<td>'+orderList[i].fmTradeOrderInfoBaseEntity.cOrderCode.toString()+'</td>';
		dom += '<td>'+orderList[i].fmTradeOrderInfoBaseEntity.cSenderName.toString()+'</td>';
		dom += '<td>'+orderType(orderList[i].fmTradeOrderInfoBaseEntity.iOrderTypeId)+'</td>';
		dom += '<td>'+orderList[i].fmTradeOrderInfoBaseEntity.dOrderCreateTime.toString()+'</td>';
		if (orderList[i].fmTradeOrderInfoBaseEntity.iOrderState === 3){
			dom += '<td>'+
					'<a href="#" onclick="showPop()" class="cr1">'+
					orderState(orderList[i].fmTradeOrderInfoBaseEntity.iOrderState)+
					'<span class="pdl04"><img src="../img/ic_viewdtl.png" /></span></a>'+
					'</td>'
		}else{
			dom += '<td>'+orderState(orderList[i].fmTradeOrderInfoBaseEntity.iOrderState)+'</td>';
		}
					
		dom += btnSty(orderList[i].fmTradeOrderInfoBaseEntity.iOrderState, orderList[i].fmTradeOrderInfoBaseEntity.iOrderTypeId);
		dom += '</tr>'; 
	
	}
	return dom;
	
}

/**
 * 获取订单信息
 * @param data '{"user":{"id":7},"pageModel":{"pageIndex":1,"pageSize":6},"requirement":{"iOrderState": 1}}}';
 * @return 表格信息
 * */
function getOrderInfo(data){
	var url = getOrderInfoPort();
	postData(url, data, 
		function(data){
			var orderList = data.orderList;
			var pageModel = data.pageModel;
			
			/*表格*/
			$('[data-json=orderData]').html(getTableDom(orderList)); 
			
			/*分页*/
			$('[data-json=pageData]').html(getPageDom(data));
		});
}
