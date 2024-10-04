export default function selectEvent(element) {
  // Switching between where to push new elements

  function selectEventListener() {
    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');
    const typingContainer = document.getElementById('typings');

    const typing = element;
    const typingIndex = typing.dataset.index;

    const placeholder = document.createElement('div');
    placeholder.classList.add('size-12');
    placeholder.id = 'placeholder';

    // Handle 1 typing selection

    if (!choice2) {
      // If choice1 already has the element, remove it and its placeholder
      if (choice1.firstChild === typing) {
        typingContainer.insertBefore(
          typing,
          typingContainer.children[typingIndex],
        );
        typingContainer.removeChild(document.getElementById('placeholder'));
        return;
      } else {
        // If choice1 is empty, add the element and its placeholder
        if (!choice1.firstChild) {
          choice1.appendChild(typing);
          typingContainer.insertBefore(
            placeholder,
            typingContainer.children[typingIndex],
          );
          return;
        }
        // If choice1 has an element, switch the element and remove the placeholder
        else {
          typingContainer.insertBefore(
            choice1.firstChild,
            typingContainer.children[choice1.firstChild.dataset.index],
          );
          typingContainer.removeChild(document.getElementById('placeholder'));
          choice1.appendChild(typing);
          typingContainer.insertBefore(
            placeholder,
            typingContainer.children[typingIndex],
          );
          return;
        }
      }
    }

    if (choice1 && choice2) {
      // Checks if the element already exists in choice1 or choice2, if so, remove it and its placeholder

      if (choice1.firstChild === typing || choice2.firstChild === typing) {
        const removePlaceholder = document.querySelector(
          `#placeholder[data-type="${typing.id}"]`,
        );
        typingContainer.insertBefore(
          typing,
          typingContainer.children[typingIndex],
        );
        typingContainer.removeChild(removePlaceholder);
        return;
      }

      // If choice1 is empty, add the element and its placeholder
      if (!choice1.firstChild) {
        choice1.appendChild(typing);
        placeholder.dataset.type = typing.id;
        typingContainer.insertBefore(
          placeholder,
          typingContainer.children[typingIndex],
        );
        return;
      }

      // If choice2 is empty, add the element and its placeholder
      if (!choice2.firstChild) {
        choice2.appendChild(typing);
        placeholder.dataset.type = typing.id;
        typingContainer.insertBefore(
          placeholder,
          typingContainer.children[typingIndex],
        );
        return;
      }

      let counter = sessionStorage.getItem('counter');

      // Switch between adding the new element to choice1 or choice2, and remove the placeholder
      if (counter % 2 === 0) {
        const removePlaceholder = document.querySelector(
          `#placeholder[data-type="${choice1.firstChild.id}"]`,
        );
        typingContainer.insertBefore(
          choice1.firstChild,
          typingContainer.children[choice1.firstChild.dataset.index],
        );
        typingContainer.removeChild(removePlaceholder);
        choice1.appendChild(typing);
        placeholder.dataset.type = typing.id;
        typingContainer.insertBefore(
          placeholder,
          typingContainer.children[typingIndex],
        );
        counter++;
      } else {
        const removePlaceholder = document.querySelector(
          `#placeholder[data-type="${choice2.firstChild.id}"]`,
        );
        typingContainer.insertBefore(
          choice2.firstChild,
          typingContainer.children[choice2.firstChild.dataset.index],
        );
        typingContainer.removeChild(removePlaceholder);
        choice2.appendChild(typing);
        placeholder.dataset.type = typing.id;
        typingContainer.insertBefore(
          placeholder,
          typingContainer.children[typingIndex],
        );
        counter++;
      }

      sessionStorage.setItem('counter', counter);
    }
  }

  // Ensure that only elements in the typing container can be clicked to move back to the choices
  element.addEventListener('click', selectEventListener);
}
