export default function removeSelectEvent() {

    const choiceContainer = document.getElementById('choices');
    const choices = Array.from(choiceContainer.children);

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