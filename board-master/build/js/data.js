function sessionSave(){return localStorage.getItem("recoverLogin")&&sessionObject===localStorage.getItem("recoverLogin")?data=JSON.parse(localStorage.getItem("recoverLogin")):data=sessionObject,console.log("save invoke"),data.lastSavedOnline=Date.now(),data.lastSavedOffline=Date.now(),JSON.stringify(data)}var count=0;function pageSave(){var e=window.location.pathname,t=e.substring(e.lastIndexOf("/")+1);if("board"!==t){var a=JSON.parse(JSON.stringify(sessionObject)),o=sessionObject.pages[boardArea.currentPageIndex];a.pages=[],a.pages.push(o);var n=boardArea.currentPageIndex;a.lastSavedOnline=Date.now(),a.lastSavedOffline=Date.now();var r=null;0===n&&(r=generateCardImage(JSON.stringify(a))),a=JSON.stringify(a),$.ajax({type:"POST",url:"/board/"+t+"/"+n,beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$('meta[name="csrf-token"]').attr("content"))},contentType:"application/x-www-form-urlencoded;charset=utf-8",data:{id:t,data:a,image:r}}).fail(function(){count++,console.log("failed, retrying"),count<=2?(console.log("failed, retry"),save(2)):(console.log("failed to save page"),localStorage.setItem("failedSave",sessionSave()),count=0)}).done(function(){localStorage.getItem("failedSave")&&localStorage.removeItem("failedSave")})}console.log("page invoked")}function generateCardImage(e){var t=JSON.parse(e).pages[0],a=document.createElement("canvas"),o=a.getContext("2d");a.height=800,a.width=1130;for(var n=0;n<t.strokeList.length;n++)t.strokeList[n].__proto__=strokeList[t.strokeList[n].type].prototype,t.strokeList[n].render(o,0,0,0,0);return a.toDataURL("img/jpeg",1)}function pdfSave(){var e=new FormData;$(this).prop("files").length>0&&(file=$(this).prop("files")[0],e.append("pdf",file));var t=window.location.pathname,a=t.substring(t.lastIndexOf("/")+1);userSignedIn&&"board"!==a&&$.ajax({type:"POST",url:"/board/"+a+"/pdf",beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$('meta[name="csrf-token"]').attr("content"))},data:{data:e},contentType:!1,processData:!1}).done(function(e){console.log(e)}).fail(function(e){console.log(e)})}function save(e=1){var t=sessionSave(),a=generateCardImage(t),o=window.location.pathname,n=o.substring(o.lastIndexOf("/")+1);if(document.getElementById("save").style.visibility="visible",userSignedIn)if("board"===n&&userSignedIn){console.log("invoked");var r=$("<form/>",{action:"/save",method:"post"});r.append($("<input>",{type:"hidden",name:"authenticity_token",value:$('meta[name="csrf-token"]').attr("content")})),r.append($("<input>",{type:"text",name:"data",value:t})),r.append($("<input>",{type:"text",name:"image",value:a})),$("body").append(r),localStorage.removeItem("recoverLogin"),localStorage.getItem("failedSave")&&localStorage.removeItem("failedSave"),r.submit()}else $.ajax({type:"POST",url:"/board/"+n,beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$('meta[name="csrf-token"]').attr("content"))},scriptCharset:"utf-8",data:{id:n,data:t},success:function(){$.ajax({type:"POST",url:"/board/"+n+"/card",beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$('meta[name="csrf-token"]').attr("content"))},scriptCharset:"base64",data:{id:n,image:a}})}}).done(function(){console.log("saved"),1==e&&swal({icon:"success",text:"Your Project has been Saved Online",timer:1500,button:!1}),localStorage.getItem("failedSave")&&localStorage.removeItem("failedSave"),document.getElementById("save").style.visibility="hidden"}).fail(function(){console.log("failed to save"),1==e&&(swal({icon:"error",text:"There were some errors with Saving the Project",timer:1500,button:!1}),localStorage.setItem("failedSave",[n,t]))});else localStorage.setItem("recoverLogin",t),swal("You need to Log in",{button:{text:"Login"}}).then(e=>{e&&(window.location.href="/users/sign_in")})}function sessionLoad(e,t){(""!==t&&(boardArea.pdf=!0,pdfManager.initURL(t),console.log("pdf there")),e=JSON.parse(e),localStorage.getItem("recoverLogin"))&&("board"===(a=window.location.pathname).substring(a.lastIndexOf("/")+1)&&(e=JSON.parse(localStorage.getItem("recoverLogin"))));if(localStorage.getItem("failedSave")){id=localStorage.getItem("failedSave").substring(0,localStorage.getItem("failedSave").indexOf(","));var a=window.location.pathname;id!==a.substring(a.lastIndexOf("/")+1)&&"board"!==a.substring(a.lastIndexOf("/")+1)||(e=localStorage.getItem("failedSave").substring(localStorage.getItem("failedSave").indexOf(",")+1),e=JSON.parse(e))}e.__proto__=sessionObject.prototype;for(var o=0;o<e.pages.length;o++){e.pages[o].__proto__=Page.prototype;for(var n=0;n<e.pages[o].strokeList.length;n++)e.pages[o].strokeList[n].__proto__=strokeList[e.pages[o].strokeList[n].type].prototype}boardArea.currentPageIndex=0,boardArea.focus_page=0,sessionObject=e,render()}