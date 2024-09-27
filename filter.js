// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = mynum.filter( (num) => num > 4)
// console.log(newnum);      

// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = mynum.filter( (num) => {
//    return  num > 4})
// console.log(newnum);

const hostel = [
    {name : 'Star Hostel', location: "forest bazzar", roomrent: 40000, messrent:3000,
        duration:'one year',
     },
     {name : 'Unit A', location: "forest bazzar", roomrent: 42000, messrent:3200,
        duration:'one year',
     },
     {name : 'Unit B', location: "forest bazzar", roomrent: 43000, messrent:3300,
        duration:'one year',
     },
     {name : 'six hostel', location: "forest bazzar", roomrent: 34000, messrent:3400,
        duration:'one year',
     },
     {name : 'seven hostel', location: "forest bazzar", roomrent: 35000, messrent:3200,
        duration:'one year',
     },

    ]
    const userhostel = hostel.filter( (hstl) => hstl.roomrent === 40000 || hstl.messrent >=3300 )

    //console.log(userhostel);
    
    const person =["jamal", "shahan", "khalid","munawar"]

   const newperson= person.map( (nam) => nam + " khan" )

    console.log(newperson);
    
