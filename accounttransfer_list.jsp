<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!-- 오류 페이지 정의  -->
<%@ page errorPage="accounttransfer_error.jsp" %>

<!-- 자바 클래스 Import  -->
<%@ page import= "accounttransferA.*" %>
<%@ page import = "java.util.ArrayList" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


<html>

<head>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>계좌이체 조회</title>

	<link rel="stylesheet" href="accounttransfer.css" type="text/css" media="screen" />

	<script type="text/javascript">
		function retrivalcheck() {
			
			// get방식
			// document.location.href="addr_control.jsp?action=list";
			
			// post방식 디펄트가 list
			document.form1.action.value="list";
			document.form1.submit();
	
			
		}
	
		function editcheck(id) {
		
			// get방식
			// document.location.href="addr_control.jsp?action=edit&id="+id;
			
			// post방식
			document.form1.action.value="edit";
			document.form1.id.value=id;
			document.form1.submit();
	
			
		}
	</script>

</head>

<jsp:useBean id="accountTransferList" scope="request" class="java.util.ArrayList" />

<body>
	<div align=center>
	<H2>계좌이체 조회</H2>
	<HR>
	<a href="accounttransfer_control.jsp?action=add">계좌이체 등록</a><BR>
	
	<!-- 계좌이체 목록 조회폼 -->
	<form name="form1" method="post" action="accounttransfer_control.jsp">
		<input type="hidden" name="action" value="list">
		<input type="hidden" name="id" value=0>
	
		<table border=1>
			<tr>
				<td colspan=5 align=right>
    				<input type="button" value="조회" onClick="retrivalcheck()">
				</td>
			</tr>
			<tr>
				<th>ID</th>
				<th>From계좌번호</th>
				<th>To계좌번호</th>
				<th>계좌이체일자</th>
				<th>계좌이체금액</th>
			</tr>
			<%
				if(accountTransferList != null) {
				
					// accounttransferList 변수 List 반복처리
					for(AccountTransferDTO accountTransferDTO : (ArrayList<AccountTransferDTO>) accountTransferList) {
			%>
						<tr>
							<td><a href="javascript:editcheck(<%=accountTransferDTO.getId() %>)"><%=accountTransferDTO.getId() %></a></td>
							<td><%=accountTransferDTO.getFromAccountNumber() %></td>
							<td><%=accountTransferDTO.getToAccountNumber() %></td>
							<td><%=accountTransferDTO.getTransferDate() %></td>
							<td><%=accountTransferDTO.getTransferAmmount() %></td>
						</tr>
			<%	
					}
				}
			%>
			</table>
		</form>
	</div>
</body>

</html>