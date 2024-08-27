let array = [];  

while (true) {
    let input = prompt("Введите команду (add, del или stop):");

    if (input === null) continue; 

    let [command, value] = input.split(","); 
    command = command.trim();  
    value = value ? value.trim() : "";  

    if (command === "add") {
        array.push(value); 
        console.log(`Добавлен элемент: ${value}`);
    } else if (command === "del") {
        let index = array.indexOf(value);
        if (index !== -1) {
            array.splice(index, 1); 
            console.log(`Удален элемент: ${value}`);
        } else {
            console.log(`Элемент не найден: ${value}`);
        }
    } else if (command === "stop") {
        console.log("Программа остановлена.");
        break;  
    } else {
        console.log("Неверная команда.");
    }
}

console.log("Конечный результат:", array);
