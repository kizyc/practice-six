$(document).ready(function() {

	//下拉式選單
	$('.hvr-underline-reveal').click(function(event) {
		/* Act on the event */
	event.preventDefault();
	$('.dropdown-open').slideToggle();
	});

	//swiper
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换
    loop: true, // 循環模式
    mousewheel: true,
    autoplay: { //自動撥放
    delay: 3500,
    disableOnInteraction: false,
    },

    // 分頁
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    
    // 前後按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
	//top滑動效果
	$('.top a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('html,body').animate({
		 scrollTop:0 }, 1000);
	});


});




/*
	//字體放大
	$('.font-b').click(function(event) {
		/* Act on the event 
	event.preventDefault();
	$('.content p').css('font-size','20px');
	});
	//字體放中
	$('.font-m').click(function(event) {
		/* Act on the event 
	event.preventDefault();
	$('.content p').css('font-size','16px');
	});
	//字體放小
	$('.font-s').click(function(event) {
		/* Act on the event 
	event.preventDefault();
	$('.content p').css('font-size','13px');
	});

	//close效果
	$('.ad-close').click(function(event) {
		/* Act on the event 
	event.preventDefault();
	$('.ad').slideUp(1000);
	});

	//點開執行
	$('.open').click(function(event) {
		/* Act on the event 
		$('.box').addClass('bounceInLeft');
	});

	//this效果
	$('.menu li').click(function(event) {
		/* Act on the event 
		$(this).addClass('active')
	});

	//parent效果
	$('.addCart').click(function(event) {
		/* Act on the event 
		$(this).parent()
		.toggleClass('active')
		.siblings()
		.removeClass('active');
	});

	//QA折疊選單
	$('.question').click(function(event) {
		/* Act on the event 
		$(this)
		.toggleClass('active')
		.find('p')
		.slideToggle();
		$(this)
		.siblings()
		.removeClass('active')
		.find('p')
		.slideUp();
	});

	//remove效果
	$('.remove').click(function(event) {
		/* Act on the event 
		$(this)
		.parent().parent()
		.remove();
	});

	//top滑動效果
	$('.top a').click(function(event) {
		/* Act on the event 
		event.preventDefault();
		$('html,body').animate({
		 scrollTop:0 }, 2000);
	});
*/