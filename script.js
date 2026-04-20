/**
 * Actualiza la previsualización en tiempo real
 */
function update() {
    const dataMap = [
        ['in-name', 'out-name', 'TU NOMBRE'],
        ['in-role', 'out-role', 'PROFESIÓN'],
        ['in-email', 'out-email', 'email@ejemplo.com'],
        ['in-web', 'out-web', 'linkedin.com/in/usuario'],
        ['in-profile', 'out-profile', 'Resumen estratégico de tu carrera...'],
        ['in-exp', 'out-exp', 'Describe aquí tus puestos anteriores...'],
        ['in-skills', 'out-skills', 'Habilidad 1, Habilidad 2...'],
        ['in-edu', 'out-edu', 'Tu formación académica...']
    ];

    dataMap.forEach(item => {
        const inputVal = document.getElementById(item[0]).value;
        const outputElem = document.getElementById(item[1]);
        
        // Si el input está vacío, pone el texto por defecto
        outputElem.innerText = inputVal.trim() !== "" ? inputVal : item[2];
    });
}

/**
 * Configura y descarga el PDF usando html2pdf
 */
function downloadPDF() {
    const element = document.getElementById('cv-template');
    const name = document.getElementById('in-name').value || 'Curriculum';

    const options = {
        margin: 0,
        filename: `CV_${name.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            letterRendering: true
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };

    // Ejecutar conversión
    html2pdf().set(options).from(element).save();
}