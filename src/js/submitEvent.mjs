export default function submitEvent(pokemon) {

    const submit = document.getElementById('submitButton');

    submit.addEventListener('click', function() {

        let correct = 'false'

        const typesContainer = document.getElementById('typings');

        const choice1 = document.getElementById('choice1');
        const selected1 = choice1.firstChild

        console.log(pokemon.types);

        if (document.getElementById('choice2')) {
            const choice2 = document.getElementById('choice2');
            const selected2 = choice2.firstChild

            if (selected1 && selected2) {
                const selectedTypes = [selected1.id, selected2.id];
                const correctTypes = [pokemon.types[0], pokemon.types[1]];

                selectedTypes.sort();
                correctTypes.sort();

                const arraysMatch = selectedTypes.length === correctTypes.length && selectedTypes.every((value, index) => value === correctTypes[index]);
                
                if (arraysMatch) {
                    console.log('true');
                    correct = 'true'
                } else {
                    console.log('false');
                }

            } ;
        } else {
            const selectedTypes = [selected1.id];
            const correctTypes = [pokemon.types[0]];

            selectedTypes.sort();
            correctTypes.sort();

            const arraysMatch = selectedTypes.length === correctTypes.length && selectedTypes.every((value, index) => value === correctTypes[index]);
            
            if (arraysMatch) {
                correct = 'true'
                console.log('true');
            } else {
                console.log('false');
            }

        }

    });

}