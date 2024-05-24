document.addEventListener("DOMContentLoaded", function() {
    const words = ["Developer.", "Engineer.", "Programmer."];
    let currentWordIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector(".typing");
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenWords = 2000;

    function type() {
        const currentWord = words[currentWordIndex];
        const displayedText = currentWord.substring(0, currentLetterIndex);

        typingElement.textContent = displayedText;

        if (!isDeleting && currentLetterIndex < currentWord.length) {
            currentLetterIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && currentLetterIndex > 0) {
            currentLetterIndex--;
            setTimeout(type, erasingSpeed);
        } else if (!isDeleting && currentLetterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
        } else if (isDeleting && currentLetterIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});
