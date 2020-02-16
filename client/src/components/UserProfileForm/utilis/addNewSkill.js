const addNewSkill = (FormikBag, arrayHelpers, form) => {
  console.log('You adding new skill');
  if (
    FormikBag.values.skillname.length > 1 &&
    FormikBag.values.icon.length > 1
  ) {
    arrayHelpers.push({
      skillName: FormikBag.values.skillname,
      icon: FormikBag.values.icon,
      editMode: false
    });
    form.setFieldValue('skillname', '');
    form.setFieldValue('icon', '');
  }
};

export default addNewSkill;
