export default function resetDisplay() {
    
    const display = document.getElementById('display');

    if (display.classList.contains('bg-green-500')) {
        display.classList.remove('bg-green-500');
    } else if (display.classList.contains('bg-red-500')) {
        display.classList.remove('bg-red-500');
    };
    
    if (!display.classList.contains('bg-white')) {
        display.classList.add('bg-white');
    }

};