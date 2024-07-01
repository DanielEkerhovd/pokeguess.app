

export default function checkout(status) {

    const display = document.getElementById('display');
    const button = document.getElementById('submitButton');
    const submitIcon = document.getElementById('submitIcon');


    if (status) {
        display.classList.remove('bg-white');
        display.classList.add('bg-green-500');

        submitIcon.src = '/src/media/correct.png';
        
    } else {
        display.classList.remove('bg-white');
        display.classList.add('bg-red-500');

        submitIcon.src = '/src/media/wrong.png';
        
    }

}