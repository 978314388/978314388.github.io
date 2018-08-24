var swiper = new Swiper(".swiper-container",{
		autoplay:true,// 是否自动滑动
		pagination:{// 指定分页元素
			el:".swiper-pagination"
		},
		navigation:{// 控制按钮
			nextEl:".swiper-button-next", 
			prevEl:".swiper-button-prev"
		},
	});