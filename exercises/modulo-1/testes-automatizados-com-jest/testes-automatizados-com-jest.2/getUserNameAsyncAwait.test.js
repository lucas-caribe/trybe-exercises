const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'Invalid id!' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

describe('Testing getUserName', () => {
  describe('when the user exists', () => {
    it('should return Mark when the searched id is 4', async () => {
      const userName = await getUserName(4);

      expect(userName).toBe('Mark');
    });
  });

  describe("when the user doesn't exist", () => {
    it('should return an error message', async () => {
      try {
        await getUserName(10);
      } catch (error) {
        expect(error).toEqual({ error: 'Invalid id!' });
      }
    });
  });
});
