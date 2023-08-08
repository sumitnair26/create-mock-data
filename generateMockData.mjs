import fs from 'fs'
import faker from 'faker'
import { phrase, sentence, paragraph } from 'coder-ipsum'
import { Console } from 'console';

let posts = [];
const NUMBER_OF_POSTS = 10;
let userID = 1;

function Post() {
    this.user = {
        id: userID++,
    }
}

for (let i=0; i < NUMBER_OF_POSTS; i++) {
    posts.push(new Post())
}

fs.writeFile('./mockData.json', JSON.stringify(posts), err=> {
    if(err){
        console.log('Opps!!! Error Occured');
    }else{
        console.log('File succesfully written.');
    }
})
