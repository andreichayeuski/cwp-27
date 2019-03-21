const CrudController = require('./crud');

class TweetsController extends CrudController{
    constructor(tweetsService){
        super(tweetsService);

        this.readAll = this.readAll.bind(this);

        this.registerRoutes();
    }

    async readAll(req, res){
        let data = await this.service.readChunk(req.query);
        res.json(data);
    }
}

module.exports = (tweetsService) => {
    const controller = new TweetsController(tweetsService);
    return controller.router;
};