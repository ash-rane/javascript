function monthOfYear(month) {
    switch (month) {
            case 1:
                    console.log(`This is January month`);
                        break;

            case 2:
                    console.log(`This is February month`);
                        break;

            case 3:
                    console.log(`This is March month`);
                        break;
            case 4:
                    console.log(`This is April month`);
                        break;

            case 5:
                    console.log(`This is May month`);
                        break;

            case 6:
                    console.log(`This is June month`);
                        break;
            case 7:
                    console.log(`This is July month`);
                        break;

            case 8:
                    console.log(`This is August month`);
                        break;

            case 9:
                    console.log(`This is September month`);
                        break;

            case 10:
                    console.log(`This is October month`);
                        break;

            case 11:
                    console.log(`This is November month`);
                        break;

            case 12:
                    console.log(`This is December month`);
                        break;
        default:
            console.log(`Invalid Input --->> ${month}`);
            break;
    }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);