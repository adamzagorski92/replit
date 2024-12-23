$(document).ready(function () {
    const financeDirector = () => {
        let sum = 0;
        $('#errors').html(''); //czyszczenie listy błędów


        $('.salary').each(function () {
            const salaryText = $(this).text();
            const firstName = $(this).siblings('.first-name').text();
            const lastName = $(this).siblings('.last-name').text();

            // Wyrażenie regularne sprawdzające, czy tekst jest poprawną liczbą
            const isValidSalary = /^\d+(\.\d+)?$/.test(salaryText);

            if (!isValidSalary) {
                $('#errors').append(
                    `<p>${firstName} ${lastName} ma podaną błędną wartość zarobków. Mianowicie: ${salaryText}</p>`
                );
            } else {
                const salary = parseFloat(salaryText);
                sum += salary;
                $('#errors').html('<h3 id="error-info">Tu pojawi się lista błędów w danych - jeśli wystąpią</h3>');
            }
        });
        return sum;
    };

    $('#count-sum').on('click', function () {
        $('#sum').text(financeDirector);
    });
});