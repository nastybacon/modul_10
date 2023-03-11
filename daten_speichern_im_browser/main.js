let allTasks = [];

function addTask() { // Aufgabe hinzufügen
    let description = document.getElementById('description').value; // eingegebene Aufgabe
    let category = document.getElementById('category').value; // eingegebene Kategorie

    let task = {
        'description': description,
        'category': category,
        'createAt': new Date().getTime() //1970 - Zeitstempel
    };

    // console.log(task); // Aufgabe anzeigen
    allTasks.push(task); // Array füllen

    let allTasksAsString = JSON.stringify(allTasks); // Array in ein String umwandeln
    localStorage.setItem('allTasks', allTasksAsString); // das Array speichern (key + value)
 
    // console.log('task:', task);
    // console.log('category:', category);
}

function loadAllTasks() {
    let allTasksAsString = localStorage.getItem('allTasks'); // String aus dem Speicher holen
    allTasks = JSON.parse(allTasksAsString); // allTasksAsString in ein Array wieder umwandeln + der Variablen zugewiesen
}