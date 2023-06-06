var now = new Date();

// Format: YYYY-MM-DD HH:mm
var format1 = now.getFullYear() + '-' + (now.getMonth() + 1).toString().padStart(2, '0') + '-' + now.getDate().toString().padStart(2, '0') + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
console.log("Format: YYYY-MM-DD HH:mm", format1);

// Format: DD-MM-YYYY HH:mm
var format2 = now.getDate().toString().padStart(2, '0') + '-' + (now.getMonth() + 1).toString().padStart(2, '0') + '-' + now.getFullYear() + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
console.log("Format: DD-MM-YYYY HH:mm", format2);

// Format: DD/MM/YYYY HH:mm
var format3 = now.getDate().toString().padStart(2, '0') + '/' + (now.getMonth() + 1).toString().padStart(2, '0') + '/' + now.getFullYear() + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
console.log("Format: DD/MM/YYYY HH:mm", format3);
