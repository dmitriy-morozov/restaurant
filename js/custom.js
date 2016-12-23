
  $(document).ready(function(){
 

   $(".menu-cross").click(function(event){
      $("#navigation-menu").toggleClass("navigation-menu--opened",5000);
      $(".menu-cross").toggleClass("glyphicon-menu-hamburger",5000);
      $(".menu-cross").toggleClass("glyphicon-remove",5000);
   });

});

	(function($){
		$(window).on("load",function(){
			if($(window).width() > 992) 
			{
				$('<img class="background-clipart  background-clipart-1" src="img/background/1.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-2" src="img/background/2.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-3" src="img/background/3.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-4" src="img/background/4.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-5" src="img/background/5.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-6" src="img/background/6.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-7" src="img/background/7.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-8" src="img/background/8.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-9" src="img/background/9.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-10" src="img/background/10.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-11" src="img/background/11.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-12" src="img/background/12.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-13" src="img/background/13.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-14" src="img/background/14.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-15" src="img/background/15.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-16" src="img/background/16.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
				$('<img class="background-clipart  background-clipart-17" src="img/background/17.png" height="600" width="629" alt="">').appendTo($('.auto-layout'));
			};
		});
}) (jQuery);


				(function($){
					$(window).on("load",function(){
						if($(window).width() > 992) 
						{
						/* Page Scroll to id fn call */
						$("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
							scrollSpeed: 2000,
							scrollEasing: "linear",
							scrollingEasing: "linear",
							layout:"auto",
							highlightSelector:"#navigation-menu a"
						});

						};
					});
				})(jQuery);
	
(function($){
					$(window).on("load",function(){

						if(!$(document).data("mPS2id")){
							console.log("Error: 'Page scroll to id' plugin not present or activated. Please run the code after plugin is loaded.");
							return;
						}

						$(document).data("mPS2idExtend",{
							selector:"#navigation-menu ._mPS2id-h",
							currentSelector:function(){
								return this.index($(".mPS2id-highlight-first").length ? $(".mPS2id-highlight-first") : $(".mPS2id-highlight"));
							},
							input:{y:null,x:null},
							i:null,
							time:null
						}).on("scrollSection",function(e,dlt,i){
							var d=$(this).data("mPS2idExtend"),
							sel=$(d.selector);
							if(!$("html,body").is(":animated")){
								if(!i) i=d.currentSelector.call(sel);
								if(!(i===0 && dlt>0) && !(i===sel.length-1 && dlt<0)) sel.eq(i-dlt).trigger("click.mPS2id");
							}
				}).on("mousewheel DOMMouseScroll",function(e){ //mousewheel
					if($($(this).data("mPS2idExtend").selector).length) e.preventDefault();
					$(this).trigger("scrollSection",((e.originalEvent.detail<0 || e.originalEvent.wheelDelta>0) ? 1 : -1));
				}).on("keydown",function(e){ //keyboard
					var code=e.keyCode ? e.keyCode : e.which,
					keys=$(this).data("mPS2id").layout==="horizontal" ? [37,39] : [38,40];
					if(code===keys[0] || code===keys[1]){
						if($($(this).data("mPS2idExtend").selector).length) e.preventDefault();
						$(this).trigger("scrollSection",(code===keys[0] ? 1 : -1));
					}
				}).on("pointerdown touchstart",function(e){ //touch (optional)
					var o=e.originalEvent,
					d=$(this).data("mPS2idExtend");
					if(o.pointerType==="touch" || e.type==="touchstart"){
						var y=o.screenY || o.changedTouches[0].screenY;
						d.input.y=y;
						if($(this).data("mPS2id").layout==="horizontal"){
							var x=o.screenX || o.changedTouches[0].screenX;
							d.input.x=x;
						}
						d.time=o.timeStamp;
						d.i=d.currentSelector.call($(d.selector));
					}
				}).on("touchmove",function(e){
					if($("html,body").is(":animated")) e.preventDefault();
				}).on("pointerup touchend",function(e){
					var o=e.originalEvent;
					if(o.pointerType==="touch" || e.type==="touchend"){
						var y=o.screenY || o.changedTouches[0].screenY,
						d=$(this).data("mPS2idExtend"),
						diff=d.input.y-y,
						time=o.timeStamp-d.time,
						i=d.currentSelector.call($(d.selector));
						if($(this).data("mPS2id").layout==="horizontal"){
							var x=o.screenX || o.changedTouches[0].screenX,
							diff=d.input.x-x;
						}
						if(Math.abs(diff)<2) return;
						var _switch=function(){
							return time<100 && i===d.i;
						};
						$(this).trigger("scrollSection",[(diff>0 && _switch() ? -1 : diff<0 && _switch() ? 1 : 0),(_switch() ? d.i : i)]);
					}
				});
				
				//aside indicators
				$("body").append("<div id='sections-bullets' />").find($(document).data("mPS2idExtend").selector).each(function(){
					$("#sections-bullets").append("<a href='"+$(this).attr("href")+"' class='section-bullet' rel='m_PageScroll2id'></a>");
				});
				
			});
})(jQuery);