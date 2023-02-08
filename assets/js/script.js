const friends = ['John', 'Jane', 'Jim', 'Joan'];
const relatives = ['Aunt Sarah', 'Uncle Tom', 'Cousin Rachel'];
const greetings = [...friends, ...relatives];

for (let i = 0; i < greetings.length; i++) {
  console.log(`Merry Christmas, ${greetings[i]}!`);
}
