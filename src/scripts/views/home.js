// 引入模板
var homeTpl = require('../tpl/home.string');

// 定义一个视图
SPA.defineView('home', {
  // 将模板写在body里
  html: homeTpl,

  plugins: [
    'delegated',
    {
      name: 'avalon',
      options: function (vm) {
        vm.homeList = [];
      }
    }
  ],
  
   // 给视图定义公共的属性和方法
  init: {
   
    // 定义视图公共的home banner swiper对象
    myHomeBannerSwiper: null,

    // 定义视图公共的home swiper对象
    myHomeSwiper: null
  },

  bindActions: {
    'tap.slide': function (e) {
      // 获得视图公共的home swiper, 跳转到某个slider
      this.myHomeSwiper.slideTo($(e.el).index());
    }
    
  },
   // 给视图绑定事件
  bindEvents: {
    // 在视图还没有打开的时候触发
    beforeShow: function () {
    	var that = this;
    
      that.myHomeSwiper = new Swiper('#home-swiper', {
        loop: false,
        scrollbar: '.swiper-scrollbar',
        scrollbarHide : false,
        scrollbarDraggable : true ,
        scrollbarSnapOnRelease : false ,
        onSlideChangeStart: function () {
          $('#home-nav li').eq(that.myHomeSwiper.activeIndex).addClass('active').siblings().removeClass('active');
        }
      });

      // 定义home swiper，注意这里的that.mySwiper
     		myHomeBannerSwiper = new Swiper('#home-banner-swiper', {
        loop: true,
        autoplayDisableOnInteraction:false,
        pagination : '.swiper-pagination',
        autoplay :300
      });
    }
  }
         
});
	