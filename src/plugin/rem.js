
// 使用方法：
// 1.复制上面这段代码到你的页面的头部的script标签的最前面。
// 2.根据设计稿大小，调整里面的最后两个参数值。
// 3.使用1rem=100px转换你的设计稿的像素，例如设计稿上某个块是100px*300px,换算成rem则为1rem*3rem。
// 4.designWidth:设计稿的实际宽度值，需要根据实际设置
// 5.maxWidth:制作稿的最大宽度值，需要根据实际设置
// 6.这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
// ; (function (designWidth, maxWidth) {
//   var doc = document
//   var win = window
//   var docEl = doc.documentElement
//   var remStyle = document.createElement('style')
//   var tid

//   function refreshRem () {
//     var width = docEl.getBoundingClientRect().width
//     maxWidth = maxWidth || 540
//     width > maxWidth && (width = maxWidth)
//     var rem = width * 100 / designWidth
//     remStyle.innerHTML = 'html{font-size:' + rem + 'px;}'
//   }

//   if (docEl.firstElementChild) {
//     docEl.firstElementChild.appendChild(remStyle)
//   } else {
//     var wrap = doc.createElement('div')
//     wrap.appendChild(remStyle)
//     doc.write(wrap.innerHTML)
//     wrap = null
//   }
//   // 要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
//   refreshRem()

//   win.addEventListener('resize', function () {
//     clearTimeout(tid) // 防止执行两次
//     tid = setTimeout(refreshRem, 300)
//   }, false)

//   win.addEventListener('pageshow', function (e) {
//     if (e.persisted) { // 浏览器后退的时候重新计算
//       clearTimeout(tid)
//       tid = setTimeout(refreshRem, 300)
//     }
//   }, false)

//   if (doc.readyState === 'complete') {
//     doc.body.style.fontSize = '16px'
//   } else {
//     doc.addEventListener('DOMContentLoaded', function (e) {
//       doc.body.style.fontSize = '16px'
//     }, false)
//   }
// })(750, 750)

/**
 * YDUI 可伸缩布局方案
 * rem计算方式：设计图尺寸px / 100 = 实际rem  【例: 100px = 1rem，32px = .32rem】
 */
!function (window) {

  /* 设计图文档宽度 */
  var docWidth = 750;

  var doc = window.document,
      docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  var recalc = (function refreshRem () {
      var clientWidth = docEl.getBoundingClientRect().width;

      /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
      docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px';

      return refreshRem;
  })();

  /* 添加倍屏标识，安卓为1 */
  docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);

  if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
      /* 添加IOS标识 */
      doc.documentElement.classList.add('ios');
      /* IOS8以上给html添加hairline样式，以便特殊处理 */
      if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
          doc.documentElement.classList.add('hairline');
  }

  if (!doc.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);

}(window);
