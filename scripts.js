document.addEventListener('DOMContentLoaded', () => {
    const skillsList = document.querySelector('.skills ul');
    const skillsItems = Array.from(skillsList.children);
    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(skillsItems);

    skillsList.innerHTML = '';
    skillsItems.forEach(item => {
        skillsList.appendChild(item);
    });
});
