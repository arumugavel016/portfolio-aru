const url = 'mongodb://localhost:27017/BlogApp';
mongoose.connect(url)
    .then(() => {
        console.log("Connected To MongoDB");
        app.listen(4000, () => {
            console.log("Server is running on port 4000");
        });
    })
    .catch((err) => {
        console.log("Failed To Connect", err);
    });
