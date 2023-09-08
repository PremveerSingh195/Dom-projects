window.addEventListener('scroll', function() {
    
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  
    
    const progressBarFill = document.getElementById('progress-bar-fill');
    progressBarFill.style.width = scrollPercentage + '%';
  });
  