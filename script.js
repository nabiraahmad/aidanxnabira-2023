document.addEventListener('DOMContentLoaded', function () {
    const animatedText = document.getElementById('animatedText');

    setTimeout(function () {
        animatedText.classList.add('highlight');
    }, 1000);
});

function checkNickname() {
    const validUsernames = ['aidybaby', 'monkey', 'lovie', 'autistic monkey', 'dirty autistic monkey',
    'aids', 'mi love', 'love'];
    const enteredNickname = document.getElementById('nickname').value.toLowerCase();
    
    if (validUsernames.includes(enteredNickname)) {
        redirectToPage(enteredNickname);
    } else {
        alert('UR NOT AIDAN. GTFO.. IMPOSTERRR -_-'); 
}}
function redirectToPage(nickname) {
    window.location.href = 'umadeit.html';
}


document.addEventListener('DOMContentLoaded', function () {
    const confettiDelay = 500;
    const contentSequence = [
        { text: 'Remember when we went to EL CAFE DE GATOS', image: 'catcafe.png' },
        { text: 'And when we went to THE BEACHHH (you only went in the water with me once *cries*)', image: 'beach.png' },
        { text: 'And when we went to the MET (my baby loves museums dork)', image: 'met.png' },
        { text: 'You know what they say about big feet...', image: 'foot.png' },
        { text: 'KBBQ YUHHH... when we both got tipzee', image: 'food.png' },
        { text: 'AIDYS SLEEPY TIME!', image: 'sleep.png' },
        { text: 'MY personal SQUISH MALLOW', image: 'squish.png' },
        { text: 'When we got our own personal space to just watch the office :)', image: 'hotel.png' },
        { text: 'we hot', image: 'hot.png' },
        { text: 'WHEN WE WERE LITTTTT', image: 'joint.png' },
        { text: 'WHEN WE STARTED FTING EEEEE:)', image: 'ft.png' },
        { text: 'i love you', image: 'park.png' },
        { text: 'your first offense of abuse', image: 'choke.png' },
        { text: 'black abyss of dem nostrils 0_0', image: 'nostril.png' },
    ];

    const displayInterval = 5000; 
    let currentIndex = 0;
    setInterval(scrollPage, 500); 
    setInterval(function () {
        if (currentIndex < contentSequence.length) {
            const contentItem = contentSequence[currentIndex];
            displayContent(contentItem.text, contentItem.image);
            currentIndex++;
        
        }
    }, displayInterval);
    setTimeout(function () {

        triggerConfetti();
    }, confettiDelay);
    
});

function triggerConfetti() {
   
    const config = {
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
    };

    confetti(config);
}

function displayContent(text, image) {
    const additionalContent = document.getElementById('additionalContent');
    
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    
    const newImage = document.createElement('img');
    newImage.src = image;
    
    additionalContent.appendChild(newParagraph);
    additionalContent.appendChild(newImage);
}

function scrollPage() {

    window.scrollBy(0, 23);
}
