async function uploadFile(req, res) {
    res.status(200).send(req.files);
};

module.exports = { uploadFile };