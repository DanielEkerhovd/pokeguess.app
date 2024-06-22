export default function submitEvent() {

    const submit = document.getElementById('submitButton');

    submit.addEventListener('click', function() {

        const choice1 = document.getElementById('choice1');
        const choice2 = document.getElementById('choice2');

        const typesContainer = document.getElementById('typings');
        console.log(typesContainer);

        const selected1 = choice1.firstChild
        const selected2 = choice2.firstChild

        if (selected1 && selected2) {

            console.log('yeah!');
            typesContainer.append(selected1, selected2);
            
        };

    });


}