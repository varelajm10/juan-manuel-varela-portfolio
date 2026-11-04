import { buildCvDefinition, cvFileName } from './cvDocument.js';

let pdfMakePromise;

function loadPdfMake() {
  if (!pdfMakePromise) {
    pdfMakePromise = Promise.all([
      import('pdfmake/build/pdfmake'),
      import('pdfmake/build/vfs_fonts'),
    ]).then(([pdfMakeModule, vfsModule]) => {
      const pdfMake = pdfMakeModule.default;
      const vfs = vfsModule.default || vfsModule;
      pdfMake.addVirtualFileSystem(vfs);
      return pdfMake;
    });
  }
  return pdfMakePromise;
}

export async function downloadCv(lang) {
  const pdfMake = await loadPdfMake();
  pdfMake.createPdf(buildCvDefinition(lang)).download(cvFileName(lang));
}
