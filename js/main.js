const tabItems = document.querySelectorAll('.tab-item');
const tabcontentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e){
    //  Remove all show and border classes
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder(){
    tabItems.forEach(item => {item.classList.remove('tab-border');});
}

// Remove show class from all content items
function removeShow(){
    tabcontentItems.forEach(item => {item.classList.remove('show');});
}

// Listen for tab click
tabItems.forEach(item => {item.addEventListener('click', selectItem);});
