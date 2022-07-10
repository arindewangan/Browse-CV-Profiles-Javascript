console.log("CV SCREENER");

// Getting Data From Api
// function getData() {
//     url = "https://randomuser.me/api/?inc=gender,name,dob,location,picture,email&results=100";
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((apidata) => {
//         for (let i = 0; i < apidata.results.length; i++) {
//             console.log(apidata.results[i].name.first);
//             let apiname = apidata.results[i].name.title + " " + apidata.results[i].name.first + " " + apidata.results[i].name.last;
//             let apiage = apidata.results[i].dob.age;
//             let apicity = apidata.results[i].location.city;
//             let apiimage = apidata.results[i].picture.large;
//             data.push({ name: apiname, age: apiage, city: apicity, languages: 'None', image: apiimage });
//         }
//     });
// }
// getData();

//Array of Objects
const data = [{
        name: "Newton",
        age: 33,
        city: "Bangalore",
        languages: 'Python',
        image: 'https://randomuser.me/api/portraits/men/9.jpg'
    },
    {
        name: "Nick Jonas",
        age: 30,
        city: "USA",
        languages: 'JAVA',
        image: 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    {
        name: "Natasha",
        age: 24,
        city: "Berlin",
        languages: 'JavaScript',
        image: 'https://randomuser.me/api/portraits/women/34.jpg'
    },
    {
        name: "Taniya",
        age: 21,
        city: "Ahemdabad",
        languages: 'Flutter',
        image: 'https://randomuser.me/api/portraits/women/19.jpg'
    }
];

console.log(data);

// CV Iterator
function cvIterator(profiles) {
    let index = 0;
    return {
        next: function() {
            if (index < profiles.length) {
                console.log(index);
                return { value: profiles[index++], done: false }
            } else {
                console.log(index);
                return { done: true }
            }
        }
    };
}



const candidates = cvIterator(data);


function nextCV() {
    currentCandidate = candidates.next().value;
    let profile = document.getElementById("profile");
    if (currentCandidate != undefined) {
        profile.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="${currentCandidate.image}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${currentCandidate.name}</h5>
                                    <p class="card-text">Age: ${currentCandidate.age}</p>
                                    <p class="card-text">City: ${currentCandidate.city}</p>
                                    <p class="card-text">Language: ${currentCandidate.languages}</p>
                                    <button id="next" onClick="nextCV()" class="btn btn-primary mx-2 my-2">Next Profile</button>
                                </div>
                            </div>`
    } else {
        console.log('End of Applications');
        profile.innerHTML = `<h3>No More New Applications</h3>
                             <button type="button" onClick="window.location.reload()" class="btn btn-warning">Back to Front Page</button>`
    }
};

nextCV();