const ReferenceService = require('../services/references.services');

async function referenceGet(
  req,
  res,
  next,
) {
  const { id } = req.params;
  try {
    const thisReference = await ReferenceService.getReferences(id);
    res.status(200).send(thisReference);
  } catch (error) {
    next(error);
  }
}

async function referencesGetAll(
  req,
  res,
  next,
) {
  const { id } = req.params;
  try {
    const references = await ReferenceService.getAllReferences(id);
    res.status(200).send(references);
  } catch (error) {
    next(error);
  }
}

async function referenceCreate(
  req,
  res,
  next,
) {
  const {
    name,
    lastName,
    email,
    phone,
    company,
    profileId,
  } = req.body;
  try {
    const newReference = await ReferenceService.createReference(
      name,
      lastName,
      email,
      phone,
      company,
      profileId,
    );
    res.status(200).send(newReference);
  } catch (error) {
    next(error);
  }
}

async function referenceDelete(
  req,
  res,
  next,
) {
  const { id } = req.params;
  try {
    await ReferenceService.deleteReference(id);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
}

async function referenceUpdate(
  req,
  res,
  next,
) {
  const { id } = req.params;
  const {
    name,
    lastName,
    email,
    phone,
    company,
  } = req.body;

  try {
    const updateReference = await ReferenceService.updateReference(
      id,
      name,
      lastName,
      email,
      phone,
      company,
    );

    res.status(200).send(updateReference);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  referenceGet,
  referencesGetAll,
  referenceCreate,
  referenceDelete,
  referenceUpdate,
};
