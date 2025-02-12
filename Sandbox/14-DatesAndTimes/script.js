let d = new Date();

d = d.toString();

d = new Date(2024, 0, 12, 12, 30, 0);

d = new Date('2024-07-10 12:30:10');
d = new Date('07-10-2022 12:30:10');

d = Date.now(); // in ms
d = new Date();
//d = new Date('07-10-2022 12:30:00');
d = d.getTime();
d = d.valueOf();

d = new Date(d);

d = Math.floor(Date.now() / 1000); // in seconds

console.log(d, typeof d);