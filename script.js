

  var rep = "e"
  var ntime = parseInt(new Date().getTime().toString().substring(0, 10));
  var min = document.getElementsByClassName('video_time')[0].innerHTML.split('/');
  min = min[1].split(':');
  var sec = Number(min[1])
  min = Number(min[0])
  var current_time = min * 60 + sec + 0.5
  status = "200 OK"
  var a = $('#vid').val();
  $.ajax({
  	type: "POST",
  	async: true,
  	url: "/include/gen_ajax.php",
  	dataType: "html",
  	data: "mid=<?=$mid?>&act=getComplete&a="+a+"&b="+current_time+"&ntime="+ntime,
  	success: function(response, status, request) {
  		if (response == "E") {
  			if (rep == "e") {
  				alert('System Error. Please try again.');
  			} else {
  				alert('오류가 발생하였습니다. 잠시후 다시 시도해 주십시오.');
  			}
  			//window.close();
  		} else {
  			if (response == "Y") {
  				opener.window.document.ffsearch.submit();
  				if (rep == "e") {
  					window.close()
  				} else {
  					alert('수강이 완료되었습니다');
  				}
  				//window.close();
  			} else {
  				opener.window.document.ffsearch.submit();
  				if (rep == "e") {
  					alert('Please check your course time and try again');
  				} else {
  					alert('수강 기준 시간에 미달합니다. 다시 수강하시기 바랍니다.');
  				}
  				//window.close();
  			}
  		}
  	}
  });
