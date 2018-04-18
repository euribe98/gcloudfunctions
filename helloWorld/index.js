/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 * 
 * Example:  
 * 	functions call helloHttp --data '{"message":"Hello There!!"}'
 */
exports.helloHttp = (req, res) => {
    if (req.body.message === undefined) {
       res.status(400).send('No message defined!');
    }
    else {
        console.log(req.body.message);
        res.status(200).send('Success: ' + req.body.message + '\n');
    }
};


