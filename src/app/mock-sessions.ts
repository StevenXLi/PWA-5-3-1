import { Session } from './session';
import { Workouts } from './workouts';

export const WORKOUTS: Workouts[] = [
    { name: 'Squat', OneRepMax: 130, type: 'main', subType: '' },
    { name: 'Bench', OneRepMax: 100, type: 'main', subType: '' },
    { name: 'Deadlift', OneRepMax: 180, type: 'main', subType: '' },
    { name: 'OH Press', OneRepMax: 60, type: 'main', subType: '' },
    { name: 'Dips', OneRepMax: 0, type: 'accessory', subType: 'push' },
    { name: 'Push-ups', OneRepMax: 0, type: 'accessory', subType: 'push' },
    { name: 'DB Bench', OneRepMax: 0, type: 'accessory', subType: 'push' },
    { name: 'Tri Extension', OneRepMax: 0, type: 'accessory', subType: 'push' },
    { name: 'Tri Push-down', OneRepMax: 0, type: 'accessory', subType: 'push' },
    { name: 'Pull-ups', OneRepMax: 0, type: 'accessory', subType: 'pull' },
    { name: 'Inverted rows', OneRepMax: 0, type: 'accessory', subType: 'pull' },
    { name: 'Rows', OneRepMax: 0, type: 'accessory', subType: 'pull' },
    { name: 'Face pulls', OneRepMax: 0, type: 'accessory', subType: 'pull' },
    { name: 'Lat pulldown', OneRepMax: 0, type: 'accessory', subType: 'pull' },
    { name: 'Curls', OneRepMax: 0, type: 'accessory', subType: 'pull' },
    { name: 'Back raises', OneRepMax: 0, type: 'accessory', subType: 'Core/Leg' },
    { name: 'Reverse hyperextensions', OneRepMax: 0, type: 'accessory', subType: 'Core/Leg' },
    { name: 'Lunges', OneRepMax: 0, type: 'accessory', subType: 'Core/Leg' },
    { name: 'Step-ups', OneRepMax: 0, type: 'accessory', subType: 'Core/Leg' },
    { name: 'Sit-ups', OneRepMax: 0, type: 'accessory', subType: 'Core/Leg' }
];

export const SESSIONS: Session[] = [
    {
        time: new Date(),
        main: [ WORKOUTS[0], WORKOUTS[1] ],
        accessory: [ WORKOUTS[5], WORKOUTS[11], WORKOUTS[17] ]
    }
];
