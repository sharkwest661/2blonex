// src/utils/constants/animalsConstants.js

export const ANIMAL_TYPES = [
  { value: "dogs", label: "İtlər" },
  { value: "cats", label: "Pişiklər" },
  { value: "birds", label: "Quşlar" },
  { value: "fish", label: "Balıqlar" },
  { value: "rabbits", label: "Dovşanlar" },
  { value: "hamsters", label: "Hamsterlər" },
  { value: "reptiles", label: "Sürünənlər" },
  { value: "horses", label: "Atlar" },
  { value: "farm-animals", label: "Ferma heyvanları" },
  { value: "exotic", label: "Ekzotik heyvanlar" },
  { value: "pet-supplies", label: "Heyvan ləvazimatı" },
  { value: "pet-food", label: "Heyvan yeməkləri" },
  { value: "pet-care", label: "Heyvan baxımı" },
  { value: "other", label: "Digər" },
];

export const ANIMAL_BREEDS = [
  // Dogs
  { value: "german-shepherd", label: "Alman çobanı" },
  { value: "golden-retriever", label: "Golden Retriever" },
  { value: "labrador", label: "Labrador" },
  { value: "poodle", label: "Pudel" },
  { value: "bulldog", label: "Bulldog" },
  { value: "chihuahua", label: "Chihuahua" },
  { value: "husky", label: "Husky" },
  { value: "mixed-breed", label: "Qarışıq cins" },

  // Cats
  { value: "persian", label: "Fars pişiyi" },
  { value: "siamese", label: "Siam pişiyi" },
  { value: "british-shorthair", label: "Britaniya qısasaçlı" },
  { value: "maine-coon", label: "Maine Coon" },
  { value: "scottish-fold", label: "Şotland bükümlü" },
  { value: "domestic-cat", label: "Ev pişiyi" },

  // Birds
  { value: "canary", label: "Kanarey" },
  { value: "parrot", label: "Tutuquşu" },
  { value: "budgie", label: "Dalğalı tutuquşu" },
  { value: "pigeon", label: "Göyərçin" },

  { value: "other-breed", label: "Digər cins" },
];

export const ANIMAL_AGES = [
  { value: "puppy-kitten", label: "Bala (0-6 ay)" },
  { value: "young", label: "Gənc (6 ay - 2 il)" },
  { value: "adult", label: "Yetkin (2-8 il)" },
  { value: "senior", label: "Yaşlı (8+ il)" },
  { value: "unknown", label: "Naməlum" },
];

export const ANIMAL_GENDERS = [
  { value: "male", label: "Erkək" },
  { value: "female", label: "Dişi" },
  { value: "unknown", label: "Naməlum" },
];

export const ANIMAL_CONDITIONS = [
  { value: "healthy", label: "Sağlam" },
  { value: "vaccinated", label: "Peyvəndli" },
  { value: "sterilized", label: "Sterilizə olunmuş" },
  { value: "with-papers", label: "Sənədli" },
  { value: "needs-care", label: "Baxım tələb edir" },
];

export const ANIMAL_PURPOSES = [
  { value: "pet", label: "Ev heyvanı" },
  { value: "breeding", label: "Çoxaltma üçün" },
  { value: "guard", label: "Mühafizə üçün" },
  { value: "show", label: "Sərgi üçün" },
  { value: "therapy", label: "Terapiya üçün" },
  { value: "working", label: "İş üçün" },
  { value: "free-adoption", label: "Pulsuz sahiplənmə" },
];

export const ANIMAL_CATEGORIES = [
  { value: "food", label: "Yem və qida" },
  { value: "toys", label: "Oyuncaqlar" },
  { value: "beds", label: "Yataqlar" },
  { value: "carriers", label: "Daşıyıcılar" },
  { value: "collars", label: "Boyunbağılar" },
  { value: "grooming", label: "Baxım ləvazimatı" },
  { value: "health", label: "Sağlamlıq məhsulları" },
  { value: "training", label: "Təlim ləvazimatı" },
  { value: "aquarium", label: "Akvarium ləvazimatı" },
  { value: "cages", label: "Qəfəslər" },
];

export const ANIMAL_DEFAULT_FILTERS = {
  animalType: "",
  breed: "",
  priceMin: "",
  priceMax: "",
  city: "",
  age: "",
  gender: "",
  condition: "",
  purpose: "",
  category: "",
  showMoreFilters: false,
};

export const generateAnimalProducts = () => {
  const products = [];
  for (let i = 1; i <= 50; i++) {
    const randomType =
      ANIMAL_TYPES[Math.floor(Math.random() * ANIMAL_TYPES.length)];
    const randomBreed =
      ANIMAL_BREEDS[Math.floor(Math.random() * ANIMAL_BREEDS.length)];
    const randomAge =
      ANIMAL_AGES[Math.floor(Math.random() * ANIMAL_AGES.length)];
    const randomGender =
      ANIMAL_GENDERS[Math.floor(Math.random() * ANIMAL_GENDERS.length)];

    products.push({
      id: `animal-${i}`,
      title: `${randomBreed.label} - ${randomAge.label} ${randomGender.label}`,
      price: Math.floor(Math.random() * 2000) + 50,
      currency: "₼",
      location: "Bakı",
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      image: `https://picsum.photos/300/300?random=animal${i}`,
      category: "animals",
      filters: {
        animalType: randomType.value,
        breed: randomBreed.value,
        age: randomAge.value,
        gender: randomGender.value,
        condition:
          ANIMAL_CONDITIONS[
            Math.floor(Math.random() * ANIMAL_CONDITIONS.length)
          ].value,
      },
    });
  }
  return products;
};
