document.getElementById("fileInput").onchange=function(){if(pdfManager.init())pdfManager.createBlob(),boardArea.pdf=!0;else{var e=new FormData,t=document.getElementById("fileInput").files[0];e.append("file",t),e.append("filename",t.name);var n={async:!0,crossDomain:!0,url:"http://webboard.iiitb.ac.in/pdf_convert",method:"POST",headers:{"cache-control":"no-cache","Postman-Token":"9ece9315-d970-4a2b-9271-6d44e3632884"},processData:!1,contentType:!1,mimeType:"multipart/form-data",data:e};$.ajax(n).done(function(e){console.log(e),pdfManager.initURL(function(e){for(var t=window.atob(e),n=t.length,a=new Uint8Array(n),i=0;i<n;i++)a[i]=t.charCodeAt(i);return a.buffer}(e));var t=new Blob([pdfManager.file],{type:"application/pdf"}),n=new File([t],"dummy"),a=new FormData;a.append("pdf",n),$.ajax({type:"POST",url:"/board/"+id+"/pdf",beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$('meta[name="csrf-token"]').attr("content"))},data:a,contentType:!1,processData:!1,success:function(){console.log("pdf success")}}).fail(function(e){console.log(e)})})}};var pdfManager={inputElement:null,ratio:Math.sqrt(2),marginLeft:null,file:null,pdfObj:null,fileReader:null,pageNumber:1,totalPages:null,scale:1,canvas:document.getElementById("pdf_canvas"),context:document.getElementById("pdf_canvas").getContext("2d"),centered:!1,init:function(){return pdfjsLib.GlobalWorkerOptions.workerSrc="/js/pdfworker.js",this.inputElement=document.getElementById("fileInput"),this.file=this.inputElement.files[0],pdfManager.marginLeft=parseInt(this.canvas.style.marginLeft.slice(0,-2)),"application/pdf"==this.file.type},initURL:function(e){pdfjsLib.GlobalWorkerOptions.workerSrc="/js/pdfworker.js",this.file=e,pdfManager.marginLeft=parseInt(this.canvas.style.marginLeft.slice(0,-2)),pdfjsLib.getDocument(e).promise.then(function(e){pdfManager.pdfObj=e,pdfManager.totalPages=e.numPages,e.getPage(1).then(function(e){e.render({canvasContext:pdfManager.context,viewport:pdfManager.setScale(e)})})})},setScale:function(e){var t=null;if(e){var n=e.getViewport(1);if(n.height>n.width){if(t=boardArea.canvas.height/n.height,!this.centered){var a=(this.canvas.width-n.width*t)/2;this.canvas.style.marginLeft=pdfManager.marginLeft+a,this.centered=!0}}else this.canvas.style.marginLeft=pdfManager.marginLeft,t=pdfManager.canvas.width/n.width;return e.getViewport(t)}},createBlob:function(){this.fileReader=new FileReader,this.fileReader.readAsArrayBuffer(this.file),this.fileReader.onload=function(){var e=new Uint8Array(this.result);pdfjsLib.getDocument(e).promise.then(function(e){pdfManager.pdfObj=e,pdfManager.totalPages=e.numPages,e.getPage(1).then(function(e){e.render({canvasContext:pdfManager.context,viewport:pdfManager.setScale(e)})})})}},renderPdf:function(e){this.pdfObj.getPage(e).then(function(e){e.render({canvasContext:pdfManager.context,viewport:pdfManager.setScale(e)})})},mountPdf:function(){this.pageNumber>this.totalPages?this.context.clearRect(0,0,this.canvas.width,this.canvas.height):this.renderPdf(this.pageNumber)},nextPage:function(){this.pageNumber++,this.mountPdf()},prevPage:function(){this.pageNumber--,this.mountPdf()}};