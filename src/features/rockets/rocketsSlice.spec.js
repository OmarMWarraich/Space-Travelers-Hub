import rocketsReducer, {
  renderRockets,
  reserveRocket,
  cancelRocket,
} from './rocketsSlice';

describe('rockets reducer', () => {
  const initialState = [
    {
      id: 1,
      name: 'Falcon 1',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
      image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
      reserved: false,
    },
    {
      id: 2,
      name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
      image: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png',
      reserved: true,
    },
    {
      id: 3,
      name: 'Falcon Heavy',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
      image: 'https://images2.imgbox.com/3d/86/cnu0pan8_o.png',
      reserved: false,
    },
    {
      id: 4,
      name: 'Starship',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
      image: 'https://images2.imgbox.com/4a/bd/d8UxLh4q_o.png',
      reserved: false,
    },
  ];

  it('should handle initial state', () => {
    expect(rocketsReducer(undefined, { type: 'unknown' })).toEqual([]);
  });

  it('should handle renderRockets', () => {
    const actual = rocketsReducer(initialState, renderRockets());
    expect(actual).toEqual(initialState);
  });

  it('should handle reserveRocket', () => {
    const actual = rocketsReducer(initialState, reserveRocket(1));
    expect(actual).toEqual([
      {
        id: 1,
        name: 'Falcon 1',
        description: 'A two-stage rocket designed and manufactured by SpaceX.',
        image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        reserved: true,
      },
      {
        id: 2,
        name: 'Falcon 9',
        description: 'A two-stage rocket designed and manufactured by SpaceX.',
        image: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png',
        reserved: true,
      },
      {
        id: 3,
        name: 'Falcon Heavy',
        description: 'A two-stage rocket designed and manufactured by SpaceX.',
        image: 'https://images2.imgbox.com/3d/86/cnu0pan8_o.png',
        reserved: false,
      },
      {
        id: 4,
        name: 'Starship',
        description: 'A two-stage rocket designed and manufactured by SpaceX.',
        image: 'https://images2.imgbox.com/4a/bd/d8UxLh4q_o.png',
        reserved: false,
      },
    ]);
  });

  it('should handle cancelRocket', () => {
    const actual = rocketsReducer(initialState, cancelRocket(2));
    expect(actual).toEqual([
      {
        id: 1,
        name: 'Falcon 1',
        description: 'A two-stage rocket designed and manufactured by SpaceX.',
        image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        reserved: false,
      },
      {
        id: 2,
        name: 'Falcon 9',
        description: 'A two-stage rocket designed and manufactured by SpaceX.',
        image: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png',
        reserved: false,
      },
      {
        id: 3,
        name: 'Falcon Heavy',
        description: 'A two-stage rocket designed and manufactured by SpaceX.',
        image: 'https://images2.imgbox.com/3d/86/cnu0pan8_o.png',
        reserved: false,
      },
      {
        id: 4,
        name: 'Starship',
        description: 'A two-stage rocket designed and manufactured by SpaceX.',
        image: 'https://images2.imgbox.com/4a/bd/d8UxLh4q_o.png',
        reserved: false,
      },
    ]);
  });
});
