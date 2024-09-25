export default function selectEvent(element, counter) {
  // Switching between where to push new elements

  function selectEventListener() {
    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');
    const typingContainer = document.getElementById('typings');

    const typing = element;

    // Handle 1 typing selection

    if (!choice2) {
      // If choice1 already has the element, remove it
      if (choice1.firstChild === typing) {
        typingContainer.appendChild(typing);
      } else {
        if (!choice1.firstChild) {
          choice1.appendChild(typing);
        } else {
          typingContainer.appendChild(choice1.firstChild);
          choice1.appendChild(typing);
        }
      }
    }

    if (choice1 && choice2) {
      // If the element is already in choice1, remove it to typingContainer
      if (choice1.firstChild === typing || choice2.firstChild === typing) {
        typingContainer.appendChild(typing);
        return;
      }

      // If choice1 is empty, add the element
      if (!choice1.firstChild) {
        choice1.appendChild(typing);
        return;
      }

      // If choice2 is empty, add the element
      if (!choice2.firstChild) {
        choice2.appendChild(typing);
        return;
      }

      let counter = sessionStorage.getItem('counter');

      // Switch between adding the new element to choice1 or choice2
      if (counter % 2 === 0) {
        typingContainer.appendChild(choice1.firstChild);
        choice1.appendChild(typing);
        counter++;
      } else {
        typingContainer.appendChild(choice2.firstChild);
        choice2.appendChild(typing);
        counter++;
      }
      
      sessionStorage.setItem('counter', counter);

    }
  }

  // Ensure that only elements in the typing container can be clicked to move back to the choices
  element.addEventListener('click', selectEventListener);
}
