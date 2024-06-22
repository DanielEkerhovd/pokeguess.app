export default function selectEvent(element) {

    function selectEventListener() {

        const choice1 = document.getElementById('choice1');
        const choice2 = document.getElementById('choice2');

        if (!choice2) {
            if (!choice1.firstChild) {
                choice1.appendChild(element);
            }
        } else {
            if (!choice1.firstChild && choice2.firstChild !== element) {
                choice1.appendChild(element);
            } else if (!choice2.firstChild && choice1.firstChild !== element) {
                choice2.appendChild(element);
            }
        }
    }

    element.addEventListener('click', selectEventListener);

}