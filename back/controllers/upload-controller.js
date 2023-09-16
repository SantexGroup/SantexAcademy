async function uploadFile(req, res) {
    res.status(200).send(req.file);
};

module.exports = { uploadFile };