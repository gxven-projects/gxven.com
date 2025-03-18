const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Draggable functionality only on non-touch devices
if (!isTouchDevice()) {
    // Function to make an element draggable
    const makeDraggable = (draggableElement, handleElement) => {
        let offsetX = 0, offsetY = 0, startX = 0, startY = 0;

        // Mouse down on the handle
        handleElement.onmousedown = (e) => {
            e.preventDefault();

            // Initial positions
            startX = e.clientX;
            startY = e.clientY;
            offsetX = draggableElement.offsetLeft;
            offsetY = draggableElement.offsetTop;

            // Attach listeners for dragging
            document.onmousemove = dragElement;
            document.onmouseup = stopDragElement;
        };

        // Function to drag the element
        const dragElement = (e) => {
            e.preventDefault();

            const newX = offsetX + (e.clientX - startX);
            const newY = offsetY + (e.clientY - startY);

            // Get viewport and element dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const windowWidth = draggableElement.offsetWidth;
            const windowHeight = draggableElement.offsetHeight;

            // Clamping the position values inline
            const clampedX = Math.min(
                Math.max(newX, windowWidth / 2),
                viewportWidth - windowWidth / 2
            );
            const clampedY = Math.min(
                Math.max(newY, windowHeight / 2),
                viewportHeight - windowHeight / 2
            );

            // Update the element's position
            draggableElement.style.left = `${clampedX}px`;
            draggableElement.style.top = `${clampedY}px`;
        };

        // Stop dragging and remove event listeners
        const stopDragElement = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };

    // Initialize draggable functionality for all .window elements
    const windows = document.querySelectorAll(".main-content");

    windows.forEach(windowElement => {
        const titleBar = windowElement.querySelector(".title-bar");
        if (titleBar) {
            makeDraggable(windowElement, titleBar);
        }
    });
} else {
    console.log("Draggable feature disabled on touch devices.");
}
