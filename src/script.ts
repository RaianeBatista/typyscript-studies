function firstLetterUppercase(name: string, lastname: string): string {
  let firstLetter = name.charAt(0).toUpperCase();
  let lastLetter = lastname.charAt(0).toUpperCase();
  return (
    firstLetter + name.substring(1) + ' ' + lastLetter + lastname.substring(1)
  );
}

//firstLetterUppercase('raiane', 'batista');
firstLetterUppercase('15',49);

//Raiane
