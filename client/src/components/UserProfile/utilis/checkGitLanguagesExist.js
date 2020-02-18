const checkGitLanguagesExist = gitLang => {
  if (gitLang) {
    if (gitLang.length > 0) {
      return true;
    }
    return false;
  }
  return false;
};

export default checkGitLanguagesExist;
