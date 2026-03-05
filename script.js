/* Particle Configuration */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#00f2ff" },
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": { "enable": false }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00f2ff",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});

/* Fibonacci Simulation Logic */
const fibBtn = document.getElementById('fib-btn');
const fibInput = document.getElementById('fib-n');
const fibResult = document.getElementById('fib-result');

function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let seq = [0, 1];
    while (seq.length < n) {
        seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    }
    return seq;
}

fibBtn.addEventListener('click', () => {
    const n = parseInt(fibInput.value);
    if (isNaN(n) || n < 1) {
        fibResult.innerHTML = `<span style="color: #ff4444;">Please enter a valid number 'n' >= 1.</span>`;
        return;
    }

    fibResult.innerHTML = '<span style="color: var(--neon-cyan);">Calculating...</span>';

    setTimeout(() => {
        const sequence = generateFibonacci(n);
        fibResult.innerHTML = `[ <span style="color: var(--neon-cyan);">${sequence.join('</span>, <span style="color: var(--neon-cyan);">')}</span> ]`;
    }, 300); // Slight delay for "premium" feel
});

/* Copy Code Functionality */
document.querySelector('.code-header').innerHTML += '<span style="cursor: pointer; color: var(--neon-cyan);" id="copy-btn">COPY</span>';
document.getElementById('copy-btn').addEventListener('click', () => {
    const code = document.querySelector('.code-display pre code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        document.getElementById('copy-btn').innerText = 'COPIED!';
        setTimeout(() => document.getElementById('copy-btn').innerText = 'COPY', 2000);
    });
});

/* Editable Profile Persistence */
const pName = document.getElementById('pName');
const pGrade = document.getElementById('pGrade');

// Load from LocalStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('portfolio-name');
    const savedGrade = localStorage.getItem('portfolio-grade');

    if (savedName) pName.innerText = savedName;
    if (savedGrade) pGrade.innerText = savedGrade;
});

// Save to LocalStorage on edit
const saveToLocal = () => {
    localStorage.setItem('portfolio-name', pName.innerText);
    localStorage.setItem('portfolio-grade', pGrade.innerText);
};

pName.addEventListener('input', saveToLocal);
pGrade.addEventListener('input', saveToLocal);

// Subtle animation on focus
pName.addEventListener('focus', () => pName.parentElement.style.boxShadow = '0 0 20px rgba(0, 242, 255, 0.2)');
pName.addEventListener('blur', () => pName.parentElement.style.boxShadow = '');
pGrade.addEventListener('focus', () => pGrade.parentElement.style.boxShadow = '0 0 20px rgba(0, 242, 255, 0.2)');
pGrade.addEventListener('blur', () => pGrade.parentElement.style.boxShadow = '');
