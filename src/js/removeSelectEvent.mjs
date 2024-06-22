export default function removeSelectEvent() {

    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');

    const choices = [choice1, choice2];

    const typingContainer = document.getElementById('typings');

    choices.forEach(choice => {

        choice.addEventListener('click', function() {
            const selected = choice.firstChild
            if (selected) {
                typingContainer.appendChild(selected);
            }
        });

    });



};