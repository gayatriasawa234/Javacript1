// let obj = { name: 'Alice', age: 25 };
// for (let key in obj) {
//     console.log(key, obj[key]);  // Outputs 'name Alice', 'age 25'
// }


// let obj = {
//     name: 'Tarun',
//     age: 24,
//     company: {
//         name: 'Amazon',
//         salary: 6000000
//     }
// };
// for (let key in obj) {
//     console.log(key, obj[key]);  // Outputs 'name Alice', 'age 25'
// }

let obj = {
    name: 'Tarun',
    age: 24,
    company: {
        name: 'Amazon',
        salary: 6000000,
        location: {
            city: 'Hyderabad',
            country: 'India',
            office: {
                building: 'Tech Park Tower',
                floor: 8,
                department: {
                    name: 'Software Development',
                    head: 'John Doe',
                    team: {
                        lead: 'Sarah Smith',
                        members: [
                            { name: 'Alice', role: 'Backend Engineer' },
                            { name: 'Bob', role: 'Frontend Engineer' },
                            { name: 'Charlie', role: 'DevOps Engineer' }
                        ]
                    }
                }
            }
        }
    },
    hobbies: ['coding', 'reading', 'travelling']
};

// Using for...in loop to print keys and values at the top level of the object
for (let key in obj) {
    console.log(key, obj[key]);
}