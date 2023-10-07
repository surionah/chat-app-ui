const peopleService = {
  async getPeople() {
    const response = await fetch("http://localhost:8000/people");
    const people = await response.json();
    console.log(people, "12312313123123123123123123");
    return people;
  },
};

export default peopleService;
