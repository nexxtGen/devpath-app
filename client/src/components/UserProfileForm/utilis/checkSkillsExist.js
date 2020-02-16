const checkSkillsExist = FormikBag => {
  if (FormikBag.values.skills && FormikBag.values.skills.length > 0) {
    return true;
  }
  return false;
};

export default checkSkillsExist;
