<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>首页</title>

<link rel="stylesheet" type="text/css" href="<%=path%>/jqGrid/css/jquery-ui.css" />
<link rel="stylesheet" type="text/css" href="<%=path%>/jqGrid/css/prettify.css" />
<%-- <link rel="stylesheet" type="text/css" href="<%=path%>/css/bootstrap-theme.min.css" />
<link rel="stylesheet" type="text/css" href="<%=path%>/css/bootstrap.min.css" />
<script src="<%=path%>/js/jquery-1.11.3.js"></script>
<script src="<%=path%>/js/bootstrap.min.js"></script> --%>
<%-- <script type="text/javascript" src="<%=path%>/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<%=path%>/js/jquery.xtable-1.1.js"></script>
<script type="text/javascript" src="<%=path%>/js/jquery.cookie.js"></script>
<link rel="stylesheet" type="text/css" media="screen"
	href="<%=path%>/css/x-table.css" />
<link rel="stylesheet" type="text/css" media="screen"
	href="<%=path%>/css/x-table-icons.css" />

<link rel="stylesheet" type="text/css" media="screen"
	href="<%=path%>/css/prettify.css" />
<script type="text/javascript" src="<%=path%>/js/prettify.js"></script> --%>

<script type="text/javascript" src="<%=path%>/jqGrid/js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="<%=path%>/jqGrid/js/i18n/grid.locale-cn.js"></script>
<script type="text/javascript" src="<%=path%>/jqGrid/js/jquery.jqGrid.min.js"></script>
<script type="text/javascript" src="<%=path%>/jqGrid/js/prettify.js"></script>
<script type="text/javascript" src="<%=path%>/jqGrid/js/codetabs.js"></script>
<%-- <link rel="stylesheet" type="text/css" media="screen" href="<%=path%>/jqGrid/css/ui.jqgrid-bootstrap.css"/>
<link rel="stylesheet" type="text/css" media="screen" href="<%=path%>/jqGrid/css/ui.jqgrid-bootstrap-ui.css"/> --%>
<link rel="stylesheet" type="text/css" media="screen" href="<%=path%>/jqGrid/css/ui.jqgrid.css"/>
<script>
	function login() {
		
		$.ajax({
			url : 'user/save',
			type : 'POST',
			data : $('#loginform').serialize(),
			success : function(data) {
				alert(data);
			}
		})
		//$("#loginform").submit();
	}

	function setFormValue() {
		data = {
			"id" : 22,
			"username" : "wskiawv",
			"password" : "123"
		};
		$("#loginform :input").each(
				function(i, item) {
					var type = $(this).attr("type");
					var name = $(this).attr("name");
					var inputName = $(this);
					$.each(data, function(n, v) {
						var nn = n;
						var value = v;
						if (name != null && name.indexOf(n) > 0
								&& type != "button") {
							if (type == "text" || type == "hidden"
									|| type == "password") {
								$(":input[name='" + name + "']").attr("value",
										v);
								var vvv = $(":input[name='" + name + "']")
										.attr("value");
								var dd;
								return;
							}
							//$(name).attr("value",v);
						}
					});
				});
	}
	function update() {
		$.ajax({
			url : 'user/update',
			type : 'POST',
			data : $('#update').serialize(),
			success : function(data) {
				alert(data);
			}
		})
		//$("#update").submit();
	}
	function deleteUser() {
		var id = $('#id').val();
		$.ajax({
			url : 'user/delete',
			type : 'POST',
			data : {
				id : id
			},
			success : function(data) {
				alert(data);
			}
		})
	}
	$(document).ready(function () {
        $("#jqGrid").jqGrid({
            url: 'user/find',
            mtype: "GET",
            datatype: "json",
            colModel: [
                { label: '编号', name: 'id', key: true, width: 75 },
                { label: '用户名', name: 'username', width: 150 },
                { label: '密码', name: 'password', width: 150 },
                { label: '注册时间', name: 'registertime', width: 150 }                
            ],
			viewrecords: true,
            width: 780,
            height: 250,
            rowNum: 25,
            rowList:[25,50,100],
            pager: "#jqGridPager"
        });
    });
	/* $(document).ready(function() {
		var config = {
			height : 400,
			title : '用户信息',
			toolbar : {
				align : 'right',
				buttons : [ {
					text : '刷新',
					icon : 'refresh',
					script : function(e, id) {
						$(e).click(function() {
							$('#' + id).xTable('reload');
						});
					}
				}, {
					text : 'Add',
					script : function(e, id) {
						$(e).click(function() {
							alert('Add');
						});
					}
				} ]
			},
			columns : [ {
				header : 'id',
				width : 50,
				name : 'id',
				align : 'center',
				order : true
			}, {
				header : 'username',
				width : 50,
				name : 'username',
				align : 'center',
				order : true
			}, {
				header : 'password',
				width : 500,
				name : 'password',
				order : true
			}, {
				header : 'registertime',
				width : 80,
				name : 'registertime',
				align : 'center',
				order : true
			}, {
				width : 70,
				align : 'center',
				data : function(obj, id, tr) {
					var b = $('<button></button>');
					b.html('Edit').click(function() {
						alert('Edit, Title:' + obj.movie_name);
					});
					return b;
				}
			}, {
				width : 70,
				align : 'center',
				data : function(obj, id, tr) {
					var b = $('<button></button>');
					b.html('Delete').click(function() {
						alert('Delete, Title:' + obj.movie_name);
					});
					return b;
				}
			} ],

			url : 'user/userList',
			type : 'json',
			pakages : [ 'remote' ],
			pagination : {
				message : "Displaying movies %s - %s of %s",
				start : 0,
				limit : 20,
				page : 0
			},
			loading_message : 'Loading...',
			order : {
				column : 'id',
				type : 'ASC'
			}
		};
		var theme = $.cookie('theme');
		if (theme != null && theme != undefined) {
			config.theme = theme;
		}
		$('#usertable').xTable(config);
	});
	var _gaq = _gaq || [];
	 _gaq.push(['_setAccount', 'UA-31947355-1']);
	 _gaq.push(['_trackPageview']);

	 (function() {
	 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	 })(); */
</script>
</head>
<body onload="prettyPrint()">
	<h2>Hello World!</h2>
	<form action="user/save" id="loginform" method="post">
		id:<input type="hidden" name="id"> 用户名：<input type="text"
			name="username"><br> 密码：<input type="text"
			name="password"><br> <input type="button" value="提交"
			onclick="login();"> <input type="button" value="测试"
			onclick="setFormValue();">
	</form>
	<form action="user/update" id="update" method="post">
		id:<input type="text" name="id" id="id"> 用户名：<input
			type="text" name="username"><br> 密码：<input type="text"
			name="password"><br> <input type="button" value="提交"
			onclick="update();"> <input type="button" value="删除"
			onclick="deleteUser();">
	</form>
	<table id="jqGrid"></table>
    <div id="jqGridPager"></div>
	<div id="usertable"></div>
</body>
</html>
