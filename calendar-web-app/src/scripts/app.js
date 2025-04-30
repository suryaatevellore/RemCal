const events = [];

function addEvent(date, title) {
    events.push({ date, title });
    displayEvents();
}

function removeEvent(index) {
    if (index > -1 && index < events.length) {
        events.splice(index, 1);
        displayEvents();
    }
}

function displayEvents() {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';

    events.forEach((event, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.date}: ${event.title}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeEvent(index);
        
        listItem.appendChild(removeButton);
        eventList.appendChild(listItem);
    });
}

document.getElementById('add-event-form').onsubmit = function(event) {
    event.preventDefault();
    const date = document.getElementById('event-date').value;
    const title = document.getElementById('event-title').value;
    addEvent(date, title);
    this.reset();
};