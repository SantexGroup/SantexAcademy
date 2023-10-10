const resolveNameAndExtension = (base64File) => {
  const ext = base64File.split(';')[0].split('/')[1];

  const name = `image-${Date.now()}.${ext}`;

  return name;
};

module.exports = resolveNameAndExtension;
