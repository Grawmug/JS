/* 1) Show a result of Josephus Problem for 7 soldiers.
 	a. 1 Kills 2
	b. 3 Kills 4
 	c. 5 Kills 6
 	d. 7 Kills 1
 	e. 3 Kills 5
 	f. 7 Kills 3
 	g. 7 Remains alive */

const josephusProblem = howManySoldiers => {
    let soldiers = [];

    for (let i = 1; i <= howManySoldiers; i++) {
        soldiers.push(i);
    }

    while (soldiers.length > 1) {
        for (let i = 0; i < soldiers.length; i++) {
            let whoDied = i + 1;
            if (whoDied >= soldiers.length) whoDied = 0;

            console.log(`Soldier ${soldiers[i]} killed soldier ${soldiers[whoDied]}`);

            soldiers.splice(whoDied, 1);
        }
    }
    console.log(`Soldier ${soldiers[0]} remains alive`);
};

josephusProblem(7);