module.exports = {
    MongoURI : 'mongodb+srv://admin:<admin123>@cluster0.mfs0d.mongodb.net/<dbname>?retryWrites=true&w=majority'
}


dbPassword = 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';

module.exports = {
    mongoURI: dbPassword
};