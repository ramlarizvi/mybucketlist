document.addEventListener('DOMContentLoaded', function () {
    const itemInput = document.getElementById('itemInput');
    const categoryInput = document.getElementById('categoryInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const bucketList = document.getElementById('bucketList');

    window.addItem = function () {
        const newItem = itemInput.value.trim();
        const category = categoryInput.value;
        const dueDate = dueDateInput.value;

        if (newItem !== "" && dueDate !== "") {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="icon-container">
                    <span class="check-mark" onclick="completeItem(this)">✓</span>
                    <span class="cross-mark" onclick="removeItem(this)">✗</span>
                </div>
                <span class="bucket-item">(${category}) ${newItem} - Due: ${dueDate}</span>
            `;

            bucketList.appendChild(listItem);

            // Clear inputs
            itemInput.value = "";
            dueDateInput.value = "";
        } else {
            alert("Please enter both an item and a due date.");
        }
    };

    window.completeItem = function (checkMark) {
        const listItem = checkMark.closest('li');
        listItem.classList.toggle('completed');
    };

    window.removeItem = function (crossMark) {
        const listItem = crossMark.closest('li');
        listItem.remove();
    };
});