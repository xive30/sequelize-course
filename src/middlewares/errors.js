export default function errorsMiddleware(err, req, res, next){
    console.error('Error on errors middleware:\n', err.stack);
    res.status(500).send({success:false, message: err.message});
}