import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function exportToPdf(elementId: string, filename = 'MGMT6110_Problem_Set_5_Report.pdf'): Promise<boolean> {
  const element = document.getElementById(elementId);
  if (!element) {
    // Fallback to window.print()
    window.print();
    return true;
  }

  try {
    // Scroll to top to ensure complete capture
    window.scrollTo(0, 0);

    const canvas = await html2canvas(element, {
      scale: 2, // High resolution
      useCORS: true,
      logging: false,
      backgroundColor: document.documentElement.classList.contains('dark') ? '#0B1118' : '#ffffff',
      ignoreElements: (el) => el.classList.contains('no-print'),
      windowWidth: element.scrollWidth,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Additional pages if needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(filename);
    return true;
  } catch (error) {
    console.warn('html2canvas PDF export failed, falling back to window.print():', error);
    try {
      window.print();
    } catch {
      // Ignored
    }
    return false;
  }
}
