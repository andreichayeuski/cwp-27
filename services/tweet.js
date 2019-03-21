const CrudService = require('./crud');
const validator = require('../helpers/validation');

class TweetService extends CrudService{
    constructor(repository){
        super(repository);
    }

    async readAll(data){
        console.log("dataaaaa");
        console.log(data);
        let tweets = await super.readChunk(data);
        let rc = [];
        console.log(tweets);
        tweets.tweets.forEach(tweet => {
            if(tweet.authorId == data.authorId)
                rc.push(tweet);
        });
        return tweets;
    }

    async create(data){
        const validRes = validator.check('tweet'. data);
        if(validRes.error){
            return{code:400, message:'validation error'};
        } 
        else{
            return super.create(data);
        }
    }

    async update(id, data){
        const validRes = validator.check('tweetUpd'. data);
        if(validRes.error){
            return{code:400, message:'validation error'};
        } 
        else{
            return super.update(id, data);
        }
    }
}

module.exports = TweetService; 