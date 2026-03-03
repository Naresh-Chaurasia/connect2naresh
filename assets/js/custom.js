// Custom JavaScript to control sidebar expansion behavior
document.addEventListener('DOMContentLoaded', function() {
  // Function to collapse all sidebar sections except the active one
  function collapseInactiveSections() {
    const currentPath = window.location.pathname;
    const sidebarLinks = document.querySelectorAll('.sidebar .nav-link');
    const sidebarSections = document.querySelectorAll('.sidebar .collapse');
    
    // Find the active section based on current path
    let activeSection = null;
    sidebarLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        activeSection = link.closest('.collapse');
      }
    });
    
    // Collapse all sections except the active one
    sidebarSections.forEach(section => {
      if (section !== activeSection && section.classList.contains('show')) {
        section.classList.remove('show');
        
        // Find the toggle button for this section and update its state
        const toggle = document.querySelector(`[data-bs-target="#${section.id}"]`);
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.classList.add('collapsed');
        }
      }
    });
    
    // Ensure the active section is expanded
    if (activeSection && !activeSection.classList.contains('show')) {
      activeSection.classList.add('show');
      
      // Find the toggle button for the active section and update its state
      const activeToggle = document.querySelector(`[data-bs-target="#${activeSection.id}"]`);
      if (activeToggle) {
        activeToggle.setAttribute('aria-expanded', 'true');
        activeToggle.classList.remove('collapsed');
      }
    }
  }
  
  // Run the function on page load
  collapseInactiveSections();
  
  // Also run when the page is updated (for single-page applications)
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        collapseInactiveSections();
      }
    });
  });
  
  // Start observing the sidebar for changes
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    observer.observe(sidebar, {
      childList: true,
      subtree: true
    });
  }
});