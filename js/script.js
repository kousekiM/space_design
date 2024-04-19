(function (d) {
  var config = {
      kitId: "ubc4cyr",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

$(function () {
  // フェードイン
  AOS.init();
  // スクロール
  $('a[href^="#"]').on("click", function () {
    var speed = 700;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  // worksのスライダー
  $(".slider").slick({
    autoplaySpeed: 2000,
    autoplay: true,
    allows: false,
    infinite: true, // スライドのループを有効にするか
    slidesToShow: 1, // 表示するスライド数を設定
    slidesToScroll: 1, // スクロールするスライド数を設定
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });

  // ハンバーガーメニュー
  $(".sp_menu_btn,.sp_nav a").click(function () {
    $(".sp_nav").fadeToggle();
    $(".sp_menu_btn").toggleClass("open");
  });

  $(window).on("load", function () {
    AOS.refresh();
  });
});
