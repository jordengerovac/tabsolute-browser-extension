export function saveState (state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('tabsolute', serializedState);
    } catch (e) {
      // Ignore write errors;
    }
};

export function loadState() {
    try {
      const serializedState = localStorage.getItem('tabsolute');
      if(serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
};