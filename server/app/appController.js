module.exports = {

  processStatus: function(request, response) {

    response.status(200).send(request.body);

  }

};
