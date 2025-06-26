document.addEventListener('DOMContentLoaded', () => {
  // 创建汉堡菜单按钮
  const toggleBtn = document.createElement('div');
  toggleBtn.className = 'menu-toggle';
  toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector('nav').appendChild(toggleBtn);

  const menu = document.querySelector('.menu');
  
  // 点击汉堡菜单
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    const icon = toggleBtn.querySelector('i');
    icon.className = menu.classList.contains('active') 
      ? 'fas fa-times' 
      : 'fas fa-bars';
      
    // 添加按钮动画
    toggleBtn.style.transform = 'scale(0.9)';
    setTimeout(() => {
      toggleBtn.style.transform = 'scale(1)';
    }, 200);
  });

  // 点击菜单项自动关闭
  document.querySelectorAll('.menu li a').forEach(item => {
    item.addEventListener('click', () => {
      if(window.innerWidth <= 768) {
        menu.classList.remove('active');
        toggleBtn.querySelector('i').className = 'fas fa-bars';
      }
    });
  });
  
  // 处理原有菜单点击逻辑
  function handleMenuClick(link, pageName) {
    if(window.innerWidth <= 768) return true;
    // 原有桌面端逻辑...
  }
});
