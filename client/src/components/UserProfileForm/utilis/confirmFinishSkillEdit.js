const confirmFinishSkillEdit = (FormikBag, form, index, callback) => {
  if (
    FormikBag.values.skills[index].skillname.length > 1 &&
    FormikBag.values.skills[index].icon.length > 1
  ) {
    form.setFieldValue(`skills.${index}.edit`, false);
    callback(false);
  }
};

export default confirmFinishSkillEdit;
