// 1.选择排序
 function xuan (arr){
        for(var i=0;i<arr.length-1;i++){ var="" min="arr[i];" minindex="i;" for(var="" j="i+1;j<arr.length;j++){" if(min="">arr[j]){
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
        for(var i=0;i<arr.length-1;i++){ for(var="" j="0;j<arr.length-1-i;j++){" var="" ls="0;" if(arr[j]="">arr[j+1]){
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
	if(n.length<2 ||="" n<10="" &&="" n="">=0){
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
	for(var i=0;i</2></arr.length-1;i++){></arr.length-1;i++){>