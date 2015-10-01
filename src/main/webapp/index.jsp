<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>首页</title>
<link rel="stylesheet" type="text/css" href="<%=path%>/css/bootstrap-theme.min.css" />
<link rel="stylesheet" type="text/css" href="<%=path%>/css/bootstrap.min.css" />
<script src="<%=path%>/js/jquery-1.11.3.js"></script>
<script src="<%=path%>/js/bootstrap.min.js"></script>
</head>
<body>
<!-- <nav class="navbar navbar-default" role="navigation">
   <div class="navbar-header">
      <a class="navbar-brand" href="#">首页</a>
   </div>
   <div>
      <ul class="nav navbar-nav">
         <li class="active"><a href="#">新闻</a></li>
         <li><a href="#">关于我们</a></li>
         <li><a href="list.jsp">客户案例</a></li>
         <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              		解决方案
               <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
               <li><a href="#">大数据平台</a></li>
              
            </ul>
         </li>
         <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              		 产品
               <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
               <li><a href="#">教学资源管理大数据平台</a></li>
               <li><a href="#">考试系统</a></li>
               <li><a href="#">OA系统</a></li>               
            </ul>
         </li>
         
         <li><a href="login.jsp">登录</a></li>
      </ul>
   </div>
</nav> -->
<ul class="nav nav-tabs">
   <li class="active"><a href="#">首页</a></li>
   <li><a href="#">关于我们</a></li>
   <li><a href="#">新闻</a></li>
   <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        		解决方案
         <b class="caret"></b>
      </a>
      <ul class="dropdown-menu">
         <li><a href="#">大数据平台</a></li>
        
      </ul>
   </li>
   <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        		 产品
         <b class="caret"></b>
      </a>
      <ul class="dropdown-menu">
         <li><a href="#">教学资源管理大数据平台</a></li>
         <li><a href="#">考试系统</a></li>
         <li><a href="#">OA系统</a></li>               
      </ul>
   </li>
   <li><a href="#">客户案例</a></li>
   <li><a href="#">联系我们</a></li>
   <li><a href="login.jsp">登录</a></li>
</ul>
</body>
</html>
