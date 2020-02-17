const addNewSkill = (FormikBag, arrayHelpers, form) => {
  if (
    FormikBag.values.skillname.length > 1 &&
    FormikBag.values.icon.length > 1
  ) {
    arrayHelpers.push({
      skillname: FormikBag.values.skillname,
      icon: FormikBag.values.icon,
      edit: false
    });
    form.setFieldValue('skillname', '');
    form.setFieldValue('icon', '');
  }
};

export default addNewSkill;
