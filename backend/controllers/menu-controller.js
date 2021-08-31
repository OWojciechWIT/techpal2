const HttpError = require('../utils/http-error');
const Accessory = require('../models/accessory');




const menuController = {

    async getMenu(request, response, next) {
        let accessories;
        try {
          accessories = await Accessory.find({});
        } catch (err) {
          const error = new HttpError(
            'Fetching menu accessories failed, please try again later.',
            500
          );
          return next(error);
        }
        response.json({accessories});
      }
    
    };

module.exports = menuController;