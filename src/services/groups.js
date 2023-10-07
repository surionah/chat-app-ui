const groupsService = {
  async getGroups() {
    const response = await fetch("http://localhost:8000/groups");
    const groups = await response.json();
    return groups;
  },
};

export default groupsService;
