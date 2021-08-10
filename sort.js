var sortNumber = function (number) {
    number.sort(function (a, b) {
<<<<<<< HEAD

=======
        if (a === b) {
>>>>>>> 407b26f35e355088471d029c33f6b08fc4f5eedf
            return 0;
        }
        return a < b ? -1 : 1;
    });
 };
 
 var number = [19, 3, 81, 1, 24, 21];
 sortNumber(number);
 console.log(number);