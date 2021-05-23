const api = require('../src/mockApi');

describe('verifica o usuário', () => {
  it('cria uma api com retorno falso (fake api)', () => {
    const json = {
      gender: 'male',
      name: { first: 'Antônio', last: 'Britto' },
      location: {
        country: 'Brazil',
      },
      email: 'tunico@bol.com.br',
      login: { username: 'tunicao123', password: '1234567890' },
    };

    const fetchURL = jest.spyOn(api, 'fetchURL').mockResolvedValue(json);

    expect(fetchURL()).resolves.toBe(json);
    expect(fetchURL).toHaveBeenCalledTimes(1);
  });

  test('verifica se o usuário é o tunico', async () => (
    api.fetchURL().then((user) => {
      const { gender, name, location, email, login } = user;
      const { first, last } = name;
      const { country } = location;
      const { username, password } = login;
      expect(gender).toEqual('male');
      expect(first).toEqual('Antônio');
      expect(last).toEqual('Britto');
      expect(country).toEqual('Brazil');
      expect(email).toEqual('tunico@bol.com.br');
      expect(username).toEqual('tunicao123');
      expect(password).toEqual('1234567890');
    })
  ));
});
