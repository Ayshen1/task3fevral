let counter = 0;
let cem = 0;
let eded = 100;

for (let i = 2; i < eded; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {

            counter = counter + 1;
        }


    }
    if (counter < 1) {
        cem += i;

    }
    counter = 0;

}