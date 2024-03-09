 // Question no # 11     Names

let friends_list: string[] = ['asim', 'atif', 'ali', 'danish'];  //friends names in one array

for(let i = 0; i < friends_list.length; i++){       // applying iteration on array 
    console.log(friends_list[i]);     
}

//   OR

for(let j of friends_list){                 // Modern way to iterate
    console.log(j);     
}
