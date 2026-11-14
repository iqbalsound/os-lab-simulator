const {JSDOM}=require('jsdom');const fs=require('fs');
const dom=new JSDOM(fs.readFileSync(__dirname+'/../index.html','utf8'),{runScripts:'dangerously',pretendToBeVisual:true});
const w=dom.window,d=w.document;let bad=0;
for(let i=0;i<15;i++){d.getElementById('menu').children[i].click();
 const n=d.querySelectorAll('.nd').length,s=d.getElementById('sol').children.length;
 d.querySelector('.nd').click();const h=d.querySelectorAll('#sol .hl').length;
 if(!n||!s||h!=1||!d.getElementById('lab').textContent.includes('Lab '+(i+1))){bad++;console.log('FAIL lab',i+1,n,s,h)}}
d.getElementById('menu').children[9].click();d.querySelector('#viz button.p').click();
console.log('sched out:',d.getElementById('o').textContent.slice(-70));
d.getElementById('menu').children[14].click();d.querySelector('#viz button.p').click();console.log('disk:',d.getElementById('o').textContent.slice(-45));
w.ins();console.log('inserted code starts:',d.getElementById('code').value.slice(0,30).replace(/\n/g,' '));
console.log('about version ok:',d.getElementById('about').textContent.includes('1.1.0'),'pdf link:',!!d.querySelector('a[download]'),'failures',bad);
// v1.1.0 checks
w.theme('matrix');console.log('theme attr:',w.document.documentElement.getAttribute('data-theme'));
d.getElementById('sn').value='Ali';d.getElementById('menu').children[5].click();
const t=w.pdfHtml('task'),o=w.pdfHtml('obs');d.getElementById('notes').innerHTML='<b>Seen</b>';
console.log('task pdf ok:',t.includes('Lab 6')&&t.includes('Ali')&&t.includes('pipe')&&t.includes('counter(pages)'),'obs pdf ok:',w.pdfHtml('obs').includes('<b>Seen</b>'));
