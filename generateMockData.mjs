import fs from 'fs'
import faker from 'faker'
/* Faker : https://npm.io/package/faker */
import { phrase, sentence, paragraph } from 'coder-ipsum'
import { Console } from 'console';
import { setMaxIdleHTTPParsers } from 'http';

let posts = [];
const NUMBER_OF_POSTS = 10;
let userID = 1;

function Post() {
    /* random contact card containing many properties */
    /*
    this.user = faker.helpers.createCard()
    */

    /* Create Random User object with properties which is required */
    this.user = {
        id: userID++,
        name: [
            {
                firstName : faker.name.firstName()
            },
            {
                lastName : faker.name.lastName()
            }           
        ],
        avatar: faker.image.avatar(),
        address: [
            {
                streetName: faker.address.streetName()
            },
            {
                streetAddress: faker.address.streetAddress()
            },
            {
                state:faker.address.state()
            },
            {
                city: faker.address.city()
            },
            {
                zipCode: faker.address.zipCode()
            },
            {
                country: faker.address.country()
            }
        ],
        company: faker.company.companyName(),
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        jobDescriptor: faker.name.jobDescriptor(),
        phone: faker.name.phoneNumber,
        title: phrase(4),
        summary:paragraph(2),
        about:sentence(100),
    }
}

for (let i=0; i < NUMBER_OF_POSTS; i++) {
    posts.push(new Post())
}

fs.writeFile('./mockData.json', JSON.stringify(posts, null, 2), err=> {
    if(err){
        console.log('Opps!!! Error Occured');
    }else{
        console.log('File succesfully written.');
    }
})
