let jsonEmployees =
{
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

console.log("---------display JSON--------")
console.log(jsonEmployees);

console.log("---------display employees--------")
jsonEmployees.pracownicy.forEach((employee, index) => {
    console.log(`Numer indeksu pracownika: ${index}, Imię pracownika: ${employee.firstName}, Nazwisko pracownika: ${employee.lastName}`);
    
});

console.log("---------alt solution--------")
jsonEmployees.pracownicy.forEach((employee,index) =>{
    console.log("Pos. nr: "+index + ": "+ employee.firstName +" "+ employee.lastName);
});