const names = {
  adult: {
    us: {
      firstNames: ['John', 'Jane', 'Michael', 'Emily'],
      lastNames: ['Smith', 'Johnson', 'Williams', 'Brown'],
    },
    uk: {
      firstNames: ['James', 'Olivia', 'Jack', 'Amelia'],
      lastNames: ['Smith', 'Jones', 'Taylor', 'Brown'],
    },
    fr: {
      firstNames: ['Jean', 'Marie', 'Pierre', 'Sophie'],
      lastNames: ['Martin', 'Bernard', 'Thomas', 'Petit'],
    },
    de: {
      firstNames: ['Max', 'Mia', 'Leon', 'Emma'],
      lastNames: ['Müller', 'Schmidt', 'Schneider', 'Fischer'],
    },
  },
  child: {
    us: {
      firstNames: ['Billy', 'Sally', 'Tommy', 'Jenny'],
      lastNames: ['Smith', 'Johnson', 'Williams', 'Brown'],
    },
    uk: {
      firstNames: ['Alfie', 'Evie', 'Charlie', 'Lily'],
      lastNames: ['Smith', 'Jones', 'Taylor', 'Brown'],
    },
    fr: {
      firstNames: ['Lucas', 'Chloé', 'Léo', 'Manon'],
      lastNames: ['Martin', 'Bernard', 'Thomas', 'Petit'],
    },
    de: {
      firstNames: ['Ben', 'Hannah', 'Paul', 'Lina'],
      lastNames: ['Müller', 'Schmidt', 'Schneider', 'Fischer'],
    },
  },
  senior: {
    us: {
      firstNames: ['Robert', 'Mary', 'William', 'Patricia'],
      lastNames: ['Smith', 'Johnson', 'Williams', 'Brown'],
    },
    uk: {
      firstNames: ['Arthur', 'Margaret', 'George', 'Elizabeth'],
      lastNames: ['Smith', 'Jones', 'Taylor', 'Brown'],
    },
    fr: {
      firstNames: ['André', 'Jacqueline', 'Bernard', 'Simone'],
      lastNames: ['Martin', 'Bernard', 'Thomas', 'Petit'],
    },
    de: {
      firstNames: ['Hans', 'Ursula', 'Werner', 'Helga'],
      lastNames: ['Müller', 'Schmidt', 'Schneider', 'Fischer'],
    },
  },
};

export const generateName = (
  ageGroup,
  nationality,
  includeFirstName,
  includeLastName
) => {
  const firstNameList = names[ageGroup][nationality].firstNames;
  const lastNameList = names[ageGroup][nationality].lastNames;

  const randomFirstNameIndex = Math.floor(Math.random() * firstNameList.length);
  const randomLastNameIndex = Math.floor(Math.random() * lastNameList.length);

  const firstName = firstNameList[randomFirstNameIndex];
  const lastName = lastNameList[randomLastNameIndex];

  let generatedName = '';

  if (includeFirstName) {
    generatedName += firstName;
  }

  if (includeFirstName && includeLastName) {
    generatedName += ' ';
  }

  if (includeLastName) {
    generatedName += lastName;
  }

  return generatedName;
};
