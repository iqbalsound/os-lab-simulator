// Desktop only: save Task/Observation PDFs directly (no print dialog).
window.pdf = function (k) {
  const name = 'Lab' + (cur + 1) + (k === 'task' ? '-Task' : '-Observation') + '.pdf';
  window.osLab.savePdf(pdfHtml(k), name).then(r => { $('res').innerHTML = r ? '<div class="msg ok">Saved: ' + hx(r) + '</div>' : ''; });
};
