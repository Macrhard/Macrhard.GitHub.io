// 1.选择排序
 function xuan (arr){
        for(var i=0;i<arr.length-1;i++){
        	var min=arr[i];
        	var minIndex=i;
        	for(var j=i+1;j<arr.length;j++){
        		if(min>arr[j]){
        			min=arr[j];
        			minIndex=j;
        		}
        	}
        	arr[minIndex]=arr[i];
        	arr[i]=min;
          }
         return arr;
       } 
// 2.冒泡排序
 function mao (arr){
        for(var i=0;i<arr.length-1;i++){
        	for(var j=0;j<arr.length-1-i;j++){
        		var ls=0;
        		if(arr[j]>arr[j+1]){
        			ls=arr[j];
        			arr[j]=arr[j+1];
        			arr[j+1]=ls;
        		}
        	}
         }
                return arr;
    }
//3.随机颜色
function randomColor(){
	var r = Math.round(Math.random()*255).toString(16);
	var g = Math.round(Math.random()*255).toString(16);
	var b = Math.round(Math.random()*255).toString(16);
	return "#"+zero(r)+zero(g)+zero(b);
}
//4.格式化日期
function formatDate(){
	var d = new Date()
	var year = d.getFullYear()
	var month = d.getMonth()
	var date = d.getDate()
	var day = d.getDay()
	var h = d.getHours()
	var m = d.getMinutes()
	var s = d.getSeconds()
	switch(day){
		case 0:day = "周日";break;
		case 1:day = "周一";break;
		case 2:day = "周二";break;
		case 3:day = "周三";break;
		case 4:day = "周四";break;
		case 5:day = "周五";break;
		case 6:day = "周六";break;
	}
	var str = year + "年" + zero(month+1) + "月" + zero(date) + "日" + day + " " + zero(h) + ":" + zero(m) + ":" + zero(s);
	return str;
}

//5.十位补零
function zero(n){
	if(n.length<2 || n<10 && n>=0){
		return "0"+n;
	}else{
		return n;
	}
}

//6.计算两个日期之间的差值
//我只能接受一个数组，数组中有三个数据，顺序为年月日，要求必须为符合规则的数字
function getDateNum(date){
	var nowd = new Date();
	var nowTime = nowd.getTime();
	
	var oldd = new Date();
	oldd.setFullYear(date[0])
	oldd.setMonth(date[1])
	oldd.setDate(date[2])
	var oldTime = oldd.getTime();
	
	return Math.abs(oldTime - nowTime)/1000/60/60/24;
}
//7.数组去重(各字符数量没有return)
function qc (arr){
	var str=[];
	var obj={};
	for(var i=0;i<arr.length;i++){
		if(!obj[arr[i]]){
			str.push(arr[i]);
			obj[arr[i]]=1;
		}else{
			obj[arr[i]]++;
		}
	}
	return str;
}
//8.阻止事件冒泡
function stopbubble (eve){
	if(eve.stopPropagation){
         eve.stopPropagation()
    }else{
         eve.cancelBubble=true;
    }
}
//9.阻止默认事件
function stopdefault (eve){
	if( eve.preventDefault ){
        eve.preventDefault();
    }else if(eve.returnValue || eve.returnValue==undefined){
        eve.returnValue = false;
    }else{
        return false;
         }
}
//10.事件监听
        function addEvent (ele,eveName,callback){         //添加事件监听，形参分别为：添加对象，事件，执行函数
        	if(ele.addEventListener){                     //非IE下，添加的事件不用写on;
        		ele.addEventListener(eveName,callback);
        	}else if(ele.attachEvent){
        		ele.attachEvent("on"+eveName,callback);
        	}else{
        		ele["on"+eveName]=callback;
        	}
        }
        function removeEvent (ele,eveName,callback){       //删除事件监听，形参同上
        	if(ele.removeEventListener){
        		ele.removeEventListener(eveName,callback);
        	}else if(ele.detachEvent){
        		ele.detachEvent("on"+eveName,callback)
        	}else{
        		ele["on"+eveName]=null;
        	}
        }
//11.关于cookie的封装
//       1.设置cookie
         function setCookie (key,value,day){
         	var d=new Date();
         	if(!day){
         		day=0;
         	}
         	d.setDate(d.getDate()+day);
         	document.cookie=key+"="+value+";expires="+d;
         }
//       2.删除cookie
         function removeCookie (key) {
         	setCookie(key,123,-1);
         }
//       3.获取cookie
         function getCookie (key) {
         	var cook=document.cookie;
         	var str=cook.split("; ");
         	var arr=[];
         	for(var i=0;i<str.length;i++){
         		arr.push(str[i].split("="))
         	}
         	for(var i=0;i<arr.length;i++){
         		if(arr[i][0]==key){
         			return arr[i][1];
         		}
         	}
         	return "";
         }
//12.事件委托的封装
function eventEnt (son,callback){
        return function(eve){
        	var e = eve || window.event;
        	var target = e.target || e.srcElement;
        	for(var i=0;i<son.length;i++){
        		if(target==son[i]){
        			callback.bind(target)();
        		}
        	}
        }
}
//13.set去重
function setof (arr){
	var myset=new Set(arr);
	var narr=[];
	for(let a of myset){
		narr.push(a)
	}
	return narr;
}
//14.getstyle获取非行内样式
function getstyle (obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
//15.运动插件
function move (obj,json,callback){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		
		var onOff=true;
		for(var attr in json){
			if(attr=="opacity"){
				var iNow=getstyle(obj,attr)*100;
			}else{
				var iNow=parseInt(getstyle(obj,attr));
			}
			var speed=(json[attr]-iNow)/10;
			speed=speed<0?Math.floor(speed):Math.ceil(speed);
			
			if(json[attr]!=iNow){
				onOff=false;
			}
			
			if(attr=="opacity"){
				obj.style[attr]=(iNow+speed)/100;
				obj.style.filter = "alpha(opacity="+ iNow + speed +")";
			}else{
				obj.style[attr]=iNow+speed+"px";
			}
		}
		
		
			if(onOff){
				clearInterval(obj.timer);
				if(callback){
					callback();
				}
		}
			
	},30)
}
//16.面向对象轮播图
//		1.获取按钮等属性（构造函数）
		function Banner (obtn,aimg){
			this.left=obtn.left;
			this.right=obtn.right;
			this.aimg=aimg;
			this.index=0;
			this.init();
		}
		
//		2.给按钮绑定事件
		Banner.prototype.init=function(){
			this.aimg[0].parentNode.style.width=this.aimg[0].offsetWidth*this.aimg.length+"px";
			var that=this;
			this.left.onclick=function(){
				that.leftChangeIndex();
			}
			this.right.onclick=function(){
				that.rightChangeIndex();
			}
		}

//      3.点击按钮改变相对应的索引
//      3.1上一张
        Banner.prototype.leftChangeIndex=function(){
        	if(this.index==0){
				this.index=this.aimg.length-2;
				this.aimg[0].parentNode.style.left= -this.aimg[0].offsetWidth*(this.aimg.length-1)+"px";
			}else{
				this.index--;
			}
			this.move()
        }
//      3.2下一张
        Banner.prototype.rightChangeIndex=function(){
        	if(this.index==this.aimg.length-1){
				this.aimg[0].parentNode.style.left=0;
				this.index=1;
			}else{
				this.index++;
			}
			this.move()
        }
        
//      4.大框执行运动
        Banner.prototype.move=function(){
        	move(this.aimg[0].parentNode,{"left":-this.aimg[0].offsetWidth*this.index})
        }