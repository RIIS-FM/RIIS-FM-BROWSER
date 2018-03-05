function btnSty(orderState, orderType){
	var ret;
	var btnLink;
	switch (orderType){
		case 3:
			btnLink = '<a href="../pages/trade_issue_view3.html"';
			break;
		case 4:	
		case 5:
		case 6:
			btnLink = '<a href="../pages/trade_issue_view1.html"';
			break;
		case 7:
		case 8:
		case 9:
		case 10:
			btnLink = '<a href="../pages/trade_issue_view2.html" class="btn_30b">查看</a>';
			break;
	}
	
	switch (orderState){
		case 0:
			ret = '<td>'+
					btnLink+'class="btn_30b">查看</a>'+
					btnLink+'class="btn_30b">修改</a>'+
					'<a href="#" class="btn_30g">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 1:
			ret = '<td>'+
					btnLink+'class="btn_30b">查看</a>'+
					btnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h btn_disabled">删除</a>'+
				'</td>';
			break;
		case 2:
			ret = '<td>'+
					btnLink+'class="btn_30b">查看</a>'+
					btnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 3:
			ret = '<td>'+
					btnLink+'class="btn_30b">查看</a>'+
					btnLink+'class="btn_30b">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 4:
			ret = '<td>'+
					btnLink+'class="btn_30b">查看</a>'+
					btnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 5:
			ret = '<td>'+
					btnLink+'class="btn_30b">查看</a>'+
					btnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 6:
			ret = '<td>'+
					lookBtn+
					btnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 7:
			ret = '<td>'+
					lookBtn+
					btnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
		case 8:
			ret = '<td>'+
					lookBtn+
					btnLink+'class="btn_30b btn_disabled">修改</a>'+
					'<a href="#" class="btn_30g btn_disabled">提交</a>'+
					'<a href="#" class="btn_30h">删除</a>'+
				'</td>';
			break;
	}
	return ret;
}
