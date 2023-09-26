document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.link');
  links.forEach(link => {
    link.addEventListener('click', function() {
      const href = this.dataset.href;
      if (href) window.open(href, '_blank');
    });
  });
});
