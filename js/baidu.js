function fn(data){
				var html = ""
				var ul = document.getElementById('oul')
				//console.log(data.s)
				if(data.s.length){
					for(var i=0;i<data.s.length;i++){
						html += "<li><a target='_blank' href='https://www.baidu.com/s?wd="+data.s[i]+"'>"+data.s[i]+"</a></li>"
					}
					ul.innerHTML = html;
				}else{
					ul.style.display = "none"
				}
			}
			window.onload = function(){
				var ipt = document.getElementById('oipt')
				var ul = document.getElementById('oul')
				ipt.onkeyup = function(){
					if(this.value != ""){
						var script = document.createElement("script");
						script.src = "http://suggestion.baidu.com/su?wd="+ipt.value+"&cb=fn"
						document.body.appendChild(script)
						ul.style.display = "block";
					}else{
						ul.style.display = "none";
					}
				}
			}