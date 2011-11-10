document.forms[0].by.addEventListener('click', function(event) {
  this.form.b.value = 
      'javascript:'+
      encodeURIComponent(this.form.s.value.trim().replace(/\n/g,''));
    if(this.form.t.value) {
        var a = document.getElementById('a');
        a.href = this.form.b.value;
        a.innerHTML = this.form.t.value;
    }
}, false);

document.forms[0].dby.addEventListener('click', function(event) {
  this.form.s.value = 
      js_beautify(decodeURIComponent(this.form.b.value.replace(/\s*javascript:/,'')));
}, false);
