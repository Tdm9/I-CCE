const setResponse = (res, answer, statusCode) => {
    res.headers = {
        'Content-type': 'application/json'
    }
    res.status(statusCode).send(answer)
}

module.exports = {
    /**
     * set a basic response if request was executed succesfully
     * @param res
     * @param answer
     * @param statusCode
     */
    setResponse,

    promiseDataToResponse: (res, dataPromise, statusCode=200) => dataPromise
        .then(data => setResponse(res, JSON.parse(data), statusCode))
        .catch(err => setResponse(res, { err: err.message }, err.status))

}
