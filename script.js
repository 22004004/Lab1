let currentPage = 0;
const totalPages = 7;

function showPage(pageIndex) {
    // Hide all pages
    const pages = document.querySelectorAll('.content-page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    document.getElementById(`page-${pageIndex}`).classList.add('active');
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[pageIndex].classList.add('active');
    
    // Update pagination dots
    const dots = document.querySelectorAll('.page-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === pageIndex);
    });
    
    // Update page info
    document.getElementById('pageInfo').textContent = `${pageIndex + 1} / ${totalPages}`;
    
    // Update button states
    document.getElementById('prevBtn').disabled = pageIndex === 0;
    document.getElementById('nextBtn').disabled = pageIndex === totalPages - 1;
    
    currentPage = pageIndex;
    
    // Close sidebar on mobile after navigation
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
    }
}

function changePage(direction) {
    const newPage = currentPage + direction;
    if (newPage >= 0 && newPage < totalPages) {
        showPage(newPage);
    }
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') changePage(-1);
    if (e.key === 'ArrowRight') changePage(1);
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        !menuBtn.contains(e.target) &&
        sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// Initialize
showPage(0);
