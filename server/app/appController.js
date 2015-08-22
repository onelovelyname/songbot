module.exports = {

  processStatus: function(request, response) {

    console.log("request in processStatus: ", request);
    response.status(200).send(request);

  }

};
