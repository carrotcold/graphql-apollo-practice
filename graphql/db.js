export const people = [
  {
    id: '0',
    name: 'carrot',
    age: 20,
    location: 'seoul',
  },
  {
    id: '1',
    name: 'potato',
    age: 17,
    location: 'busan',
  },
  {
    id: '2',
    name: 'kiwi',
    age: 32,
    location: 'jeju',
  },
  {
    id: '3',
    name: 'avocado',
    age: 12,
    location: 'dokdo',
  },
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
