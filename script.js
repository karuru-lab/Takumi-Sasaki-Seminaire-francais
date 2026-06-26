// ハンバーガーメニューの開閉
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu ul');

  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});

  // メニュー項目クリックで閉じる（スマホ用）
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
});
