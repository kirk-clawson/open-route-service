import { routeReducer, initialState } from './route.reducer';

describe('Route Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = routeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
