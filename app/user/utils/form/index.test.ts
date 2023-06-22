import schema from '.';
import type { UserInput } from '../../models';

describe('Form Util', () => {
  it('has a schema', () => {
    expect(schema).toBeDefined();
  });

  it('should validate', async () => {
    const user: UserInput = {
      firstName: 'Stephen',
      lastName: 'Roth',
      email: 'stephen@email.com',
      password: 'NOT_A_REAL_THING',
    };

    const result = await schema.validate(user);

    expect(result).toMatchObject(user);
  });
});
