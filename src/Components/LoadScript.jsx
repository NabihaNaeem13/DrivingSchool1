export const loadScripts = () => {
    const script1 = document.createElement('script');
    script1.src = 'assets/js/vendor/jquery-3.6.0.min.js';
    script1.async = true;
    document.body.appendChild(script1);
  
    const script2 = document.createElement('script');
    script2.src = 'assets/js/app.min.js';
    script2.async = true;
    document.body.appendChild(script2);
  
    const script3 = document.createElement('script');
    script3.src = 'assets/js/main.js';
    script3.async = true;
    document.body.appendChild(script3);
  
    return [script1, script2, script3];
  };
  
 export const unloadScripts = (scripts) => {
    scripts.forEach((script) => {
      document.body.removeChild(script);
    });
  };
  