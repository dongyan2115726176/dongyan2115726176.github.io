$(document).ready(function () {
    function MainFn() {
       this.init();
    }
    MainFn.prototype={
        constructor: MainFn,
        init:function () {
            this.tab();
            
            this.Ajax();
//          this.clicks();
           	this.fors();
           	this.clicks();
        },
        tab:function () {

            var mySwiper = new Swiper('.swiper-container', {
		        autoplay: true,//可选选项，自动滑动
		        direction : 'horizontal',
		        height:window.innerHeight,
		        pagination: {
		            el: '.swiper-pagination',
		            clickable :true
		        },
		        autoplayDisableOnInteraction: true,
		       
		        lazy:true
		    });
        },
        Ajax:function () {
           var templateString = $("#template").html();
			$.get("main.json",function(data){
				dataObj = typeof data=="object"?data:eval("("+data+")");
                	var dataArry = dataObj.data;
                	console.log(dataArry);
					for (var i = 0; i < dataArry.length; i++) {
						var DomString = chuliFn(templateString,dataArry[i]);
						$(".student_inner").append(DomString);	
					}
                	$(".student_title p").html(dataObj.big_title);
                	$(".t1").html(dataObj.item_number);
                	$(".t2").html(dataObj.haha);
			})
			function chuliFn(templateString,data){
				return templateString.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
					return data[$1];
				})
			}
        },
        clicks:function () {
			$(".tab_p p").on("click",function(){
				var index = $(this).index();
				console.log(index);
				$(".online_right").children().eq(index).css("display","block").siblings().css("display","none");
			})

        },
        fors:function(){
        	for (var i = 2018;i>=1990;i--) {
				var options = $("<option value"+'i'+">"+i+"</option>");
				$(".nian").append(options);
			}
			for (var i = 12;i>=1;i--) {
				var options = $("<option value"+'i'+">"+i+"</option>");
				$(".yue").append(options);
}
	        var arr = ["中国","安哥拉","阿富汗","阿尔巴尼亚","阿尔及利亚","安道尔共和国","安圭拉岛","安提瓜和巴布达","阿根廷","亚美尼亚","澳大利亚","奥地利","阿塞拜疆","巴哈马","巴林","巴巴多斯","比利时"];
	
			for (var i = 0;i<arr.length;i++) {
				var options = $("<option value"+'arr[i]'+">"+arr[i]+"</option>");
				$(".country").append(options);
			}
			
			var arr1 = ["蒙古族","回族","藏族","维吾尔族","苗族","彝族","壮族","布依族","朝鲜族","满族","侗族","瑶族","白族","土家族","哈尼族","哈萨克族","傣族","黎族","傈僳族","佤族","畲族","高山族","拉祜族","水族","东乡族","纳西族","景颇族","柯尔克孜族","土族","达斡尔族","仫佬族","羌族","布朗族"];
			for (var i = 0;i<arr1.length;i++) {
				var options = $("<option value"+'arr1[i]'+">"+arr1[i]+"</option>");
				$(".min").append(options);
			}
        },
       
    }
    var main=new MainFn();
});










