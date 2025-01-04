function firstLetterUppercase(name: string, lastname: string): string {
  let firstLetterName = name.charAt(0).toUpperCase();
  let lastLettername = lastname.charAt(0).toUpperCase();
  return firstLetterName + name.substring(1) + ' ' + lastLettername + lastname.substring(1);
}

firstLetterUppercase('raiane', 'batista');
//Raiane
