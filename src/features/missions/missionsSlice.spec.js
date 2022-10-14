import missionsReducer, {
  renderMission,
  joinMission,
  leaveMission,
} from './missionsSlice';

describe('missions reducer', () => {
  const initialState = [{
    id: 1,
    name: 'Mars 2020',
    description: 'The Mars 2020 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
    reserved: false,
  },
  {
    id: 2,
    name: 'Mars 2030',
    description: 'The Mars 2030 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
    reserved: true,
  },
  {
    id: 3,
    name: 'Mars 2040',
    description: 'The Mars 2040 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
    reserved: false,
  },
  {
    id: 4,
    name: 'Mars 2050',
    description: 'The Mars 2050 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
    reserved: false,
  },
  ];

  it('should handle initial state', () => {
    expect(missionsReducer(undefined, { type: 'unknown' })).toEqual([]);
  });

  it('should handle renderMissions', () => {
    const actual = missionsReducer(initialState, renderMission());
    expect(actual).toEqual(initialState);
  });

  it('should handle joinMission', () => {
    const actual = missionsReducer(initialState, joinMission(1));
    expect(actual).toEqual([{
      id: 1,
      name: 'Mars 2020',
      description: 'The Mars 2020 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
      reserved: true,
    },
    {
      id: 2,
      name: 'Mars 2030',
      description: 'The Mars 2030 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
      reserved: true,
    },
    {
      id: 3,
      name: 'Mars 2040',
      description: 'The Mars 2040 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
      reserved: false,
    },
    {
      id: 4,
      name: 'Mars 2050',
      description: 'The Mars 2050 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
      reserved: false,
    },
    ]);
  });

  it('should handle leaveMission', () => {
    const actual = missionsReducer(initialState, leaveMission(2));
    expect(actual).toEqual([{
      id: 1,
      name: 'Mars 2020',
      description: 'The Mars 2020 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
      reserved: false,
    },
    {
      id: 2,
      name: 'Mars 2030',
      description: 'The Mars 2030 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
      reserved: false,
    },
    {
      id: 3,
      name: 'Mars 2040',
      description: 'The Mars 2040 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
      reserved: false,
    },
    {
      id: 4,
      name: 'Mars 2050',
      description: 'The Mars 2050 mission will seek signs of past microbial life, characterize the planet’s climate and geology, collect samples for future return to Earth, and pave the way for human exploration of the Red Planet.',
      reserved: false,
    },
    ]);
  });
});
