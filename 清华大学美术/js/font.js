/*
 *处理字体响应式
 */
(function(w){
//	console.log(111)
//	获取文档
	var doc = w.document;
//	获取文档元素
	var docuEle = doc.documentElement.body||doc.documentElement;
//	console.log(docuEle.style.fontSize)
	refreshRem();
	
	function refreshRem(){
//		获取某个元素的上右下左分别相对于浏览器窗口的位置 会返回一个对象包含6个属性:top right bottom left width height
		var width = docuEle.getBoundingClientRect().width;
		
		var rem;
//		网页最大宽度
		if (width>=1200) {
			width = 1200;
			rem = width / 24;
//			console.log(rem)
		}else{
			rem = width / 7.5;
//			console.log(rem)
		}
		
		docuEle.style.fontSize = rem+"px";
		console.log(docuEle.style.fontSize)
	}
	
	var timer = null;
	
	w.addEventListener('resize',function(){ 
		
		timer = setTimeout(refreshRem,1);
	},false);
//	pageshow:事件类似于onload
//	onload:在网页第一次加载触发pageshow事件在每次加载页面都会触发 即onload在网页从浏览器缓存中读取时不触发
//	pageshow事件对象中有一个persisted属性判断网页是否是从缓存中取 如果是从缓存中取的 就返回true 否则false
	w.addEventListener("pageshow",function(e){
		
		if (e.persisted) {
			clearTimeout(timer);
			timer = setTimeout(refreshRem,1);
		}
	},false)
})(window)
