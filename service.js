
   // Account Overlay Logic
   document.getElementById('accountTab').addEventListener('click', () => {
    document.getElementById('accountOverlay').style.display = 'flex';
});

document.getElementById('closeAccountOverlay').addEventListener('click', () => {
    document.getElementById('accountOverlay').style.display = 'none';
});

// SOS Overlay Logic
document.getElementById('sosTab').addEventListener('click', () => {
    document.getElementById('sosOverlay').style.display = 'flex';
});

document.getElementById('closeSosOverlay').addEventListener('click', () => {
    document.getElementById('sosOverlay').style.display = 'none';
});

// Close overlay when clicking outside the overlay content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) {
        e.target.style.display = 'none';
    }
});

 // Open Donation donover
 document.getElementById('opendonoverBtn').addEventListener('click', () => {
    document.getElementById('donationdonover').style.display = 'flex';
});

// Close Donation donover
document.getElementById('closedonover').addEventListener('click', () => {
    document.getElementById('donationdonover').style.display = 'none';
});

// Close Donation donover on clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('donationdonover')) {
        document.getElementById('donationdonover').style.display = 'none';
    }
});

// Show Tooltip and Copy to Clipboard
document.querySelectorAll('.icon-action').forEach(icon => {
    icon.addEventListener('click', (e) => {
        const textToCopy = e.target.getAttribute('data-copy');
        navigator.clipboard.writeText(textToCopy);
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip-popup');
        tooltip.innerText = 'Copied';
        e.target.parentNode.appendChild(tooltip);
        tooltip.style.display = 'block';
        setTimeout(() => {
            tooltip.remove();
        }, 1500);
    });
});

// Open Share donover
document.querySelectorAll('.fa-share').forEach(shareIcon => {
    shareIcon.addEventListener('click', () => {
        document.getElementById('sharedonover').style.display = 'flex';
    });
});

// Close Share donover
document.getElementById('closeSharedonover').addEventListener('click', () => {
    document.getElementById('sharedonover').style.display = 'none';
});

// Close Share donover on clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('sharedonover')) {
        document.getElementById('sharedonover').style.display = 'none';
    }
});

// Close Share donover when clicking "No"
document.getElementById('closeShare').addEventListener('click', () => {
    document.getElementById('sharedonover').style.display = 'none';
});