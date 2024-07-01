export default function selectEvent(element) {
    function selectEventListener() {
        const choice1 = document.getElementById('choice1');
        const choice2 = document.getElementById('choice2');
        const typingContainer = document.getElementById('typings');

        // Function to move an element to the typingContainer if it's not choice1 or choice2
        function moveToTypingContainer(el) {
            if (el && el !== choice1 && el !== choice2) {
                typingContainer.appendChild(el);
            }
        }

        // Single choice container logic
        if (!choice2) {
            if (!choice1.firstChild) {
                choice1.appendChild(element);
            } else {
                moveToTypingContainer(choice1.removeChild(choice1.firstChild));
                choice1.appendChild(element);
            }
        } else {
            // Two choice containers logic
            if (!choice1.firstChild) {
                choice1.appendChild(element);
            } else if (!choice2.firstChild && choice1.firstChild !== element) {
                choice2.appendChild(element);
            } else if (choice1.firstChild === element) {
                moveToTypingContainer(choice1.removeChild(element));
            } else if (choice2.firstChild === element) {
                moveToTypingContainer(choice2.removeChild(element));
            } else if (choice1.firstChild !== element && choice2.firstChild) {
                moveToTypingContainer(choice1.firstChild);
                choice1.appendChild(element);
            }
        }
    }

    element.addEventListener('click', selectEventListener);
}
